import { IVideo, NewVideo } from "../../controllers/interfaces/interfaces"
import { SERVER_DOWN_MESSAGE } from "../../shared/utils/http.util"

const VIDEO_CONTENT_TYPE = 'video/mp4'

export default class VideoService {
    private baseUrl: string
    constructor(baseUrl: string){
        this.baseUrl = baseUrl
    }

    // POST JSON al back. Devuelve el payload o lanza el mensaje de error que mandó el back.
    private async postJson<T>(path: string, body: unknown): Promise<T> {
        let res: Response
        try {
            res = await fetch(`${this.baseUrl}${path}`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(body),
            })
        } catch {
            throw new Error(SERVER_DOWN_MESSAGE)
        }

        if (res.status === 503 || res.status === 504) {
            throw new Error(SERVER_DOWN_MESSAGE)
        }

        const data = await res.json().catch(() => null)
        if (!res.ok) {
            throw new Error(data?.error || 'Error al procesar la solicitud.')
        }
        return data?.payload as T
    }

    async getAll(): Promise<IVideo[]> {
        try {
            const url = `${this.baseUrl}/video/public`
            const res = await fetch(url)
            const data = await res.json()
            const response = data.payload as IVideo[]

            return response

        } catch (error) {
            console.log(error);
            return []
        }
    }

    async getUserVideos(email: string): Promise<IVideo[]> {
        const fetchParams = {
            url: `${this.baseUrl}/video/channel`,
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify({email}),
        }
        try {
            const res = await fetch(fetchParams.url, {
                method: fetchParams.method,
                headers: fetchParams.headers,
                body: fetchParams.body
            })

            const data = await res.json()

            const info = data.payload as IVideo[]

            return info
        } catch (error) {
            console.log(error);
            return []
        }
    }

    /**
     * Sube un video en 3 pasos:
     * 1. El back valida y devuelve una URL prefirmada de R2.
     * 2. El navegador sube el archivo directo a R2 (no pasa por Vercel, sin límite de 4.5 MB).
     * 3. El back verifica el archivo y guarda los datos en Mongo.
     */
    async create({ file, email, title, isPrivate }: NewVideo): Promise<void> {
        const { uploadUrl, key } = await this.postJson<{ uploadUrl: string, key: string }>(
            '/video/upload-url',
            { email, fileName: file.name, size: file.size }
        )

        let upload: Response
        try {
            upload = await fetch(uploadUrl, {
                method: 'PUT',
                headers: { 'Content-Type': VIDEO_CONTENT_TYPE },
                body: file,
            })
        } catch {
            throw new Error('No se pudo subir el video. Revisá tu conexión e intentá de nuevo.')
        }
        if (!upload.ok) {
            throw new Error('No se pudo subir el video. Intentá de nuevo.')
        }

        await this.postJson('/video', { email, title, isPrivate, key, originalName: file.name })
    }
}

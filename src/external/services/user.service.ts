import { Login } from "../../controllers/interfaces/interfaces"
import { User } from "../../domain/entities/user.entity"
import { SERVER_DOWN_MESSAGE } from "../../shared/utils/http.util"

export default class UserService {
    private baseUrl: string
    constructor(baseUrl: string){
        this.baseUrl = baseUrl
    }

    // POST JSON al back. Traduce caídas de red y 503/504 a un mensaje claro.
    private async postJson(path: string, body: unknown): Promise<{ res: Response, data: any }> {
        let res: Response
        try {
            res = await fetch(`${this.baseUrl}${path}`, {
                method: 'POST',
                headers: { 'Content-type': 'application/json' },
                body: JSON.stringify(body),
            })
        } catch {
            // fetch solo falla así cuando no hay respuesta (red caída, CORS, servidor muerto)
            throw new Error(SERVER_DOWN_MESSAGE)
        }

        if (res.status === 503 || res.status === 504) {
            throw new Error(SERVER_DOWN_MESSAGE)
        }

        const data = await res.json().catch(() => null)
        return { res, data }
    }

    async register(user: User): Promise<void> {
        const { res, data } = await this.postJson('/users', user)

        if (res.ok) return

        if (res.status === 400 && data?.message === 'Email already exists') {
            throw new Error('Este correo electrónico ya está registrado')
        }
        throw new Error('Error al intentar registrarse')
    }

    async login(user: Login): Promise<void> {
        const { res } = await this.postJson('/auth', user)

        if (res.ok) return

        if (res.status === 400) {
            throw new Error('Usuario o contraseña incorrectos')
        }
        throw new Error('Error al intentar iniciar sesión')
    }
}

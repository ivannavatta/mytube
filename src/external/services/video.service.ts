import { IVideo } from "../../controllers/interfaces/interfaces"

export default class VideoService {
    private baseUrl: string
    constructor(baseUrl: string){
        this.baseUrl = baseUrl
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

    async create(video: any): Promise<void>{
        const fetchParams = {
            url: `${this.baseUrl}/video`,
            headers: {
               
            },
            method: 'POST',
            body: video,
        }
        try {
            const res = await fetch(fetchParams.url, {
                method: fetchParams.method,
                headers: fetchParams.headers,
                body: fetchParams.body
            })

            const data = await res.json()

            const video = data.payload
            console.log("🚀 ~ VideoService ~ create ~ video:", video)
            
        } catch (error) {
            console.log(error);
        }
    }

}
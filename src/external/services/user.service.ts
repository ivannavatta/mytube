import User from "../../domain/entities/user.entity"

export default class UserService {
    private baseUrl: string
    constructor(baseUrl: string){
        this.baseUrl = baseUrl
    }

    async register(user: User): Promise<void>{
        const fetchParams = {
            url: `${this.baseUrl}/users`,
            headers: {
                'Content-type': 'application/json',
            },
            method: 'POST',
            body: JSON.stringify(user),
        }
        try {
            const res = await fetch(fetchParams.url, {
                method: fetchParams.method,
                headers: fetchParams.headers,
                body: fetchParams.body
            })

            const data = res.json()
            console.log("🚀 ~ UserService ~ register ~ data:", data)
        } catch (error) {
            console.log(error);
        }
    }
}
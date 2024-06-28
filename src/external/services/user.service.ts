import { Login, User } from "../../domain/entities/user.entity"
import { isValidUser } from "../../shared/utils/validUser.util"

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

            const data = await res.json()

            const user = data.payload
            
            if(isValidUser(user)){
            console.log(`User Name: ${user.firstName}`);
            console.log(`User Email: ${user.email}`);
            }
            else{
                throw new Error('Invalid user data')
            }
            
        } catch (error) {
            console.log(error);
        }
    }

    async login(user: Login) {
        const fetchParams = {
            method: 'POST',
            url: `${this.baseUrl}/auth`,
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(user)
        }
        try {
            const res = await fetch(fetchParams.url, {
                method: fetchParams.method,
                headers: fetchParams.headers,
                body: fetchParams.body
            })

            const data = await res.json()
            console.log("🚀 ~ UserService ~ login ~ data:", data)
            
        } catch (error) {
            console.log(error);
            
        }
    }
}
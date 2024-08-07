import { Login } from "../../controllers/interfaces/interfaces"
import { User } from "../../domain/entities/user.entity"
import { isValidUser } from "../../shared/utils/validUser.util"

export default class UserService {
    private baseUrl: string
    constructor(baseUrl: string){
        this.baseUrl = baseUrl
    }

    async register(user: User): Promise<void> {
    const fetchParams = {
        url: `${this.baseUrl}/users`,
        headers: {
            'Content-type': 'application/json',
        },
        method: 'POST',
        body: JSON.stringify(user),
    };
    
    try {
        const res = await fetch(fetchParams.url, {
            method: fetchParams.method,
            headers: fetchParams.headers,
            body: fetchParams.body
        });

        const data = await res.json();

        if (res.ok) {
            window.location.href = '/login';
        } else if (res.status === 400 && data.message === 'Email already exists') {
            throw new Error('Este correo electrónico ya está registrado');
        } else {
            throw new Error('Error al intentar registrarse');
        }
        
    } catch (error) {
        console.log(error);
        throw error;
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
        };

        try {
            const res = await fetch(fetchParams.url, {
                method: fetchParams.method,
                headers: fetchParams.headers,
                body: fetchParams.body
            });

            const data = await res.json();

            if (!res.ok) {
                throw new Error(data.message || 'Login failed');
            }

            return data;
        } catch (error) {
            if(error instanceof Error){
                throw new Error(error.message || 'Network error');

            }
        }
    }
}
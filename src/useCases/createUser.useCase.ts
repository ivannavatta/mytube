import { User } from "../domain/entities/user.entity";
import UserService from "../external/services/user.service";
import { CreateUser } from "./interfaces/user.interface";

export default class CreateUserUseCase implements CreateUser {
    private userService: UserService
    constructor(userService: UserService){
        this.userService = userService
    }

    async execute(user: User): Promise<void>{
        if (user.firstName.length < 4) {
            throw new Error("El nombre debe tener al menos 4 caracteres.");
        }

        if (user.lastName.length < 4) {
            throw new Error("El apellido debe tener al menos 4 caracteres.");
        }

    
        if (user.password.length < 4) {
            throw new Error("La contraseña debe tener al menos 4 caracteres.");
        }

        const emailRegex = /^[a-zA-Z0-9._%+-]{4,}@(gmail|hotmail)\.com$/;
        if (!emailRegex.test(user.email)) {
            throw new Error("El correo electrónico debe estar completo");
        }
        return await this.userService.register(user)
    }
}
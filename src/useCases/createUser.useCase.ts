import { User } from "../domain/entities/user.entity";
import UserService from "../external/services/user.service";
import { CreateUser } from "./interfaces/user.interface";

export default class CreateUserUseCase implements CreateUser {
    private userService: UserService
    constructor(userService: UserService){
        this.userService = userService
    }

    async execute(user: User): Promise<void>{
        return await this.userService.register(user)
        //agregar logica para validar el formulario, porque aunq mandes todos numeros el formulario se envia y se crea el usario, ya que la info del req.body llega como string
    }
}
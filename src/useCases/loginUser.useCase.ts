import { Login } from "../controllers/interfaces/interfaces";
import UserService from "../external/services/user.service";
import { LoginUser } from "./interfaces/user.interface";

export default class LoginUserUseCase implements LoginUser {
    private userService: UserService
    constructor(userService: UserService){
        this.userService = userService
    }

    async execute(user: Login): Promise<void>{
        return await this.userService.login(user)
    }
}
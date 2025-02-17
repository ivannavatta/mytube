import { Login } from "../../controllers/interfaces/interfaces";
import { User } from "../../domain/entities/user.entity";

export interface CreateUser {
    execute(user: User): Promise<void>
}

export interface LoginUser {
    execute(user: Login): Promise<void>
}
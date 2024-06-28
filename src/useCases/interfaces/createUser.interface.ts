import { User } from "../../domain/entities/user.entity";


export interface CreateUser {
    execute(user: User): Promise<void>
}
import { User } from "../../domain/entities/user.entity"


export const isValidUser = (user: any): user is User => {
    return typeof user.firstName === 'string' &&
           typeof user.lastName === 'string' &&
           typeof user.email === 'string' &&
           typeof user.password === 'string'
}
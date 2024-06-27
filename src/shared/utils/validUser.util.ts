import User from "../../domain/entities/user.entity";

export const isValidUser = (user: any): user is User => {
    return typeof user.id === 'string' &&
           typeof user.name === 'string' &&
           typeof user.lastName === 'string' &&
           typeof user.lastName === 'string'
}
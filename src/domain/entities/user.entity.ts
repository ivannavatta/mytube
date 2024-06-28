export class User {
    constructor(
        public firstName: string,
        public lastName: string,
        public email: string,
        public password: string
    ){}
}
 

export interface Login {
    email: string
    password: string
}
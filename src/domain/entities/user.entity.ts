export class User {
    constructor(
        public firstName: string,
        public lastName: string,
        public email: string,
        public password: string
    ){}
}
 

export class Login {
    constructor(
        public email: string,
        public password: string){}
}
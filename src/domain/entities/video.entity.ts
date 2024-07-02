export class Video {
    constructor(
       public email: string,
       public originalName: string,
       public title: string,
       public size: number,
       public isPrivate: boolean,
       public url: string){}
    
}
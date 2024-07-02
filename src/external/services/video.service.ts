import { Video } from "../../domain/entities/video.entity"

export default class VideoService {
    private baseUrl: string
    constructor(baseUrl: string){
        this.baseUrl = baseUrl
    }

    // async create(video: Video): Promise<void>{
    //     const fetchParams = {
    //         url: `${this.baseUrl}/video`,
    //         headers: {
    //             'Content-type': 'multipart/form-data',
    //         },
    //         method: 'POST',
    //         body: JSON.stringify(video),
    //     }
    //     try {
    //         const res = await fetch(fetchParams.url, {
    //             method: fetchParams.method,
    //             headers: fetchParams.headers,
    //             body: fetchParams.body
    //         })

    //         const data = await res.json()

    //         const video = data.payload
            
    //         // if(isValidUser(video)){
    //         // console.log(`User Name: ${video.firstName}`);
    //         // console.log(`User Email: ${video.email}`);
    //         // }
    //         // else{
    //         //     throw new Error('Invalid user data')
    //         // }
            
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }

    async create(video: any): Promise<void>{
        const fetchParams = {
            url: `${this.baseUrl}/video`,
            headers: {
               
            },
            method: 'POST',
            body: video,
        }
        try {
            const res = await fetch(fetchParams.url, {
                method: fetchParams.method,
                headers: fetchParams.headers,
                body: fetchParams.body
            })

            const data = await res.json()

            const video = data.payload
            
            // if(isValidUser(video)){
            // console.log(`User Name: ${video.firstName}`);
            // console.log(`User Email: ${video.email}`);
            // }
            // else{
            //     throw new Error('Invalid user data')
            // }
            
        } catch (error) {
            console.log(error);
        }
    }

}
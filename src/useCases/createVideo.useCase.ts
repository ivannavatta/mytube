import VideoService from "../external/services/video.service";
import { CreateVideo } from "./interfaces/video.interface";


export default class CreateVideoUseCase implements CreateVideo {
    private videoService: VideoService
    constructor(videoService: VideoService){
        this.videoService = videoService
    }

    async execute(video: any): Promise<void>{
        const title = video.get('title') as string;
           if (!title || title.length < 4) {
            throw new Error("El nombre del video es demasiado corto.");
        }

        return await this.videoService.create(video)
    }
}
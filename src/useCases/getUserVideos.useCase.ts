import { IVideo } from "../controllers/interfaces/interfaces"
import VideoService from "../external/services/video.service"
import { GetUserVideos } from "./interfaces/video.interface"



export default class GetUserVideosUseCase implements GetUserVideos{
    private videoService: VideoService
    constructor(videoService: VideoService){
        this.videoService = videoService
    }


    async execute(email: string): Promise<IVideo[]>{
        return await this.videoService.getUserVideos(email)
    }
}
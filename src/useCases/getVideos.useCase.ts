import { IVideo } from "../controllers/interfaces/interfaces"
import VideoService from "../external/services/video.service"
import { GetVideos } from "./interfaces/video.interface"



export default class GetVideosUseCase implements GetVideos {
    private videoService: VideoService
    constructor(videoService: VideoService){
        this.videoService = videoService
    }


    async execute(): Promise<IVideo[]>{
        return await this.videoService.getAll()
    }
}
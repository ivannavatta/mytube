import VideoService from "../external/services/video.service";
import { CreateVideo } from "./interfaces/video.interface";


export default class CreateVideoUseCase implements CreateVideo {
    private videoService: VideoService
    constructor(videoService: VideoService){
        this.videoService = videoService
    }

    // async execute(video: Video): Promise<void>{
    //     return await this.videoService.create(video)
    //     //agregar logica para validar el formulario, porque aunq mandes todos numeros el formulario se envia y se crea el video, ya que la info del req.body llega como string
    // }

    async execute(video: any): Promise<void>{
        return await this.videoService.create(video)
        //agregar logica para validar el formulario, porque aunq mandes todos numeros el formulario se envia y se crea el video, ya que la info del req.body llega como string
    }
}
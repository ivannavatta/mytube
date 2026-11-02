import { NewVideo } from "../controllers/interfaces/interfaces";
import VideoService from "../external/services/video.service";
import { CreateVideo } from "./interfaces/video.interface";

export const MAX_VIDEO_MB = 50;

export default class CreateVideoUseCase implements CreateVideo {
    private videoService: VideoService
    constructor(videoService: VideoService){
        this.videoService = videoService
    }

    async execute(video: NewVideo): Promise<void>{
        if (!video.title || video.title.length < 4) {
            throw new Error("El nombre del video es demasiado corto.");
        }
        if (!video.file.name.toLowerCase().endsWith('.mp4')) {
            throw new Error("Solo se permiten archivos .mp4");
        }
        if (video.file.size > MAX_VIDEO_MB * 1024 * 1024) {
            throw new Error(`El archivo es demasiado grande. El tamaño máximo permitido es ${MAX_VIDEO_MB}MB.`);
        }

        return await this.videoService.create(video)
    }
}

import { Video } from "../../domain/entities/video.entity";

export interface CreateVideo {
    // execute(video: Video): Promise<void>
    execute(video: any): Promise<void>
}
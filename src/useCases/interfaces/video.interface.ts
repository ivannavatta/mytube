import { IVideo, NewVideo } from "../../controllers/interfaces/interfaces";

export interface CreateVideo {
    execute(video: NewVideo): Promise<void>
}

export interface GetVideos {
    execute(): Promise<IVideo[]>
}

export interface GetUserVideos {
    execute(email: string): Promise<IVideo[]>
}
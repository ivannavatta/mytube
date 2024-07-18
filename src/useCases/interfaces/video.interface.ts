import { IVideo } from "../../controllers/interfaces/interfaces";

export interface CreateVideo {
    execute(video: any): Promise<void>
}

export interface GetVideos {
    execute(): Promise<IVideo[]>
}

export interface GetUserVideos {
    execute(email: string): Promise<IVideo[]>
}
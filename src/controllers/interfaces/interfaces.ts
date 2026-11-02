export interface Login {
    email: string,
    password: string
}

export interface IVideo {
    _id: string
    originalName: string
    title: string
    size: number
    isPrivate: boolean
    url: string
    videoUrl: string
}

export interface NewVideo {
    file: File
    email: string
    title: string
    isPrivate: string
}

export interface IVideoResponse {
    _id: string;
    user: string;
    status: boolean;
    videos: IVideo[];
    createdAt: string;
    updatedAt: string;
}


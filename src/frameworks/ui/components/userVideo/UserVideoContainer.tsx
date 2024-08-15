import React, { useContext, useEffect, useState } from 'react';
import VideoService from '../../../../external/services/video.service';
import GetUserVideosUseCase from '../../../../useCases/getUserVideos.useCase';
import { UserContext } from '../../../../domain/context/userContext.context';
import UserVideoDetails from './UserVideoDetails';
import { IVideo } from '../../../../controllers/interfaces/interfaces';
import config from '../../../../domain/config/app.config'
const { base_url } = config

const UserVideoContainer = () => {
    const [info, setInfo] = useState<IVideo[]>([]);
    const [error, setError] = useState('');

    const context = useContext(UserContext);

    if (!context) throw new Error('no se encuentra en el contexto');

    const { email, login } = context;

    useEffect(() => {
        const fetchVideos = async () => {
            if (email === '') {
                return;
            }
            try {
                const videoService = new VideoService(`${base_url}`);
                const res = new GetUserVideosUseCase(videoService);
                const videoData = await res.execute(email);

                setInfo(videoData);
            } catch (error) {
                setError('Failed to load videos');
            }
        };

        fetchVideos();
    }, [email]);

    return (
        <div className="userVideo-container">
            {error && <p>{error}</p>}
            {
                login ? info.length !== 0 ?
                (
            <table className="video-table">
                <thead>
                    <tr>
                        <th>File</th>
                        <th>Title</th>
                        <th>Size</th>
                        <th>Is Private</th>
                        <th>URL</th>
                    </tr>
                </thead>
                <tbody>
                    {info.map((video) => (
                        <UserVideoDetails key={video._id} {...video} />
                    ))}
                </tbody>
            </table>

                ):
                <p className='messageChannel'>Sube tu primer video,<a href="/upload">aqui</a></p>
                :
                <p className='messageChannel'>Inica sesion, para ver tus videos</p>
            }
        </div>
    );
};

export default UserVideoContainer;

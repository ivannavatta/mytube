import React, { useContext } from 'react';
import './VideoInfo.css';
import { VideoContext } from '../../../../domain/context/videoContext.context';

const VideoInfo: React.FC = () => {
    const context = useContext(VideoContext);

    if (!context) throw new Error('No se encuentra en el contexto');

    const { url, title } = context;

    return (
        <div className="video-detail">
            <div className="video-container">
                <video src={url} width="100%" controls>
                    Tu navegador no soporta la etiqueta de video.
                </video>
            </div>
            <div className="video-info">
                <h1>{title}</h1>
                {/* Agrega cualquier otra información del video aquí */}
            </div>
        </div>
    );
};

export default VideoInfo;


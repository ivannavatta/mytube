import React, { useContext } from 'react';
import './UserVideos.css';
import { Link } from 'react-router-dom';
import { VideoContext } from '../../../../domain/context/videoContext.context';

interface UserVideoDetailsProps {
    originalName: string;
    title: string;
    size: number;
    isPrivate: boolean;
    url: string;
}

const UserVideoDetails: React.FC<UserVideoDetailsProps> = ({ originalName, title, size, isPrivate, url }) => {
    const context = useContext(VideoContext);

    if (!context) throw new Error('No se encuentra en el contexto');
  
    const { setTitle, setUrl } = context;
  
    const handleChange = () => {
      setTitle(title);
      setUrl(originalName);
    };
    return (
        <tr>
            <td>{originalName}</td>
            <td>{title}</td>
            <td>{size}</td>
            <td>{isPrivate ? 'Private' : 'Public'}</td>
            <Link to={url} onClick={handleChange}><td>{url}</td></Link>
            
        </tr>
    );
};

export default UserVideoDetails;

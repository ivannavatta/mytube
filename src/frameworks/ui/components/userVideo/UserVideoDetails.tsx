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
    urlGCS: string;
}

const UserVideoDetails: React.FC<UserVideoDetailsProps> = ({ originalName, title, size, isPrivate, url, urlGCS}) => {
    const context = useContext(VideoContext);

    if (!context) throw new Error('No se encuentra en el contexto');
  
    const { setTitle, setUrl } = context;
  
    const handleChange = () => {
      setTitle(title);
      setUrl(urlGCS);
    };
    return (
        <tr>
            <td>{originalName}</td>
            <td>{title}</td>
            <td>{size}</td>
            <td>{isPrivate ? 'Private' : 'Public'}</td>
            <td><Link to={url} onClick={handleChange}>{url}</Link></td>
            
        </tr>
    );
};

export default UserVideoDetails;

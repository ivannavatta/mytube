import React, { useContext } from 'react';
import './Home.css';
import { VideoContext } from '../../../../domain/context/videoContext.context';
import { Link } from 'react-router-dom';

interface HomeDetailsProps {
  title: string;
  url: string;
  urlGCS: string;
}

const HomeDetails: React.FC<HomeDetailsProps> = ({ title, url, urlGCS }) => {
  const context = useContext(VideoContext);

  if (!context) throw new Error('No se encuentra en el contexto');

  const { setTitle, setUrl } = context;

  const handleChange = () => {
    setTitle(title);
    setUrl(urlGCS);
  };

  return (
    <Link to={url} onClick={handleChange}>
      <div className="card">
        <div className="card-image">
          <img src="https://via.placeholder.com/150" alt={title} />
        </div>
        <div className="card-content">
          <h3>{title}</h3>
        </div>
      </div>
    </Link>
  );
};

export default HomeDetails;


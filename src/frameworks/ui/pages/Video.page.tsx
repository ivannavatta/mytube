
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import VideoContainer from '../components/createVideo/VideoContainer';


interface VIdeoPageProps {
  email: string
}

const VideoPage: React.FC<VIdeoPageProps> = ({ email }) => {
  const [show, setShow] = useState(true);
  const navigate = useNavigate();

  const handleClose = () => {
    setShow(false);
    navigate('/'); // Navegar a la ruta principal después de cerrar el modal
  };

  useEffect(() => {
    if (!show) {
      navigate('/');
    }
  }, [show, navigate]);

  return (
    <VideoContainer
      setShow={setShow}
      show={show}
      email={email}
    />
  );
};

export default VideoPage;

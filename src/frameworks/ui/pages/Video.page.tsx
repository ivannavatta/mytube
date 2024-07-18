
import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import VideoContainer from '../components/createVideo/VideoContainer';
import { UserContext } from '../../../domain/context/userContext.context';

const VideoPage: React.FC = () => {
  const context = useContext(UserContext)

  if(!context) throw new Error('no existe el contexto')

  const { email } = context

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

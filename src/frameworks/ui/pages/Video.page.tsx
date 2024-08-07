
import React, { useState, useEffect } from 'react';
import VideoContainer from '../components/createVideo/VideoContainer';
import { useNavigate } from 'react-router-dom';

const VideoPage: React.FC = () => {
  const [show, setShow] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (!show) {
      navigate('/');
    }
  }, [show, navigate]);
  return (
    <VideoContainer
      setShow={setShow}
      show={show}
    />
  );
};

export default VideoPage;

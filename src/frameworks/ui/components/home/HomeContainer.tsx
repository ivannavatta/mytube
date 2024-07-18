import React, { useEffect, useState } from 'react'
import HomeDetails from './HomeDetails'
import VideoService from '../../../../external/services/video.service';
import GetVideosUseCase from '../../../../useCases/getVideos.useCase';
import { IVideo, IVideoResponse } from '../../../../controllers/interfaces/interfaces';
import './Home.css'

const HomeContainer = () => {
  const [videos, setVideos] = useState<IVideo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
      const fetchVideos = async () => {
          try {
            const videoService = new VideoService('http://localhost:3001');
            const getVideos = new GetVideosUseCase(videoService);
            const videoData = await getVideos.execute();
            console.log("🚀 ~ fetchVideos ~ videoData:", videoData)
  
            setVideos(videoData);
          } catch (error) {
              setError('Failed to load videos');
          } finally {
              setLoading(false);
          }
      };

      fetchVideos();
  }, []);

  if (loading) {
      return <div>Loading...</div>;
  }

  if (error) {
      return <div>{error}</div>;
  }

  return (
      <div className="home-details">
          {videos.map((video) => (
              <HomeDetails key={video._id} {...video} />
          ))}
      </div>
  );
};


export default HomeContainer
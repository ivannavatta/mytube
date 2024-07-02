import React, { ChangeEvent, useState } from 'react';
import { Video } from '../../../domain/entities/video.entity';
import VideoService from '../../../external/services/video.service';
import CreateVideoUseCase from '../../../useCases/createVideo.useCase';
import VideoDetails from './VideoDetails';


const VideoContainer: React.FC = () => {
  // const [email, setEmail] = useState('');
  // const [originalName, setOriginalName] = useState('');
  // const [title, setTitle] = useState('');
  // const [size, setSize] = useState<number>(0);
  // const [privately, setPrivately ] = useState(false);
  // const [url, setUrl] = useState('');

  const [file, setFile] = useState<File | null>(null);
  const [title, setTitle] = useState<string>('');
  const [privately, setPrivately] = useState<string>('');

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setFile(event.target.files[0]);
    }
  };

  const handleTileChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value)
  }

  const handlePrivatelyChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setPrivately(e.target.value)
  }

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!file) {
      alert('Please select a file first!');
      return;
    }
    const formData = new FormData();
    formData.append('img', file);
    formData.append('title', title);
    formData.append('isPrivate', privately);

    const videoService = new VideoService('http://localhost:3001');
    const createVideoUseCase = new CreateVideoUseCase(videoService);


    try {
      await createVideoUseCase.execute(formData);
      console.log("Video created successfully");
    } catch (error) {
      console.error("Error registering user", error);
    }
  }

  // const handleSubmit = async (e: React.FormEvent) => {
  //   e.preventDefault();
  //   const video = new Video(email, originalName, title, size, privately, url);
  //   const videoService = new VideoService('http://localhost:3001');
  //   const createVideoUseCase = new CreateVideoUseCase(videoService);


  //   try {
  //     await createVideoUseCase.execute(video);
  //     console.log("User registered successfully");
  //   } catch (error) {
  //     console.error("Error registering user", error);
  //   }
  // };

  return (
    <VideoDetails
      handleSubmit={handleSubmit}
      handleFileChange={handleFileChange}
      handleTileChange={handleTileChange}
      handlePrivatelyChange={handlePrivatelyChange}
      title={title}
      privately={privately}
      // setEmail={setEmail}
      // setOriginalName={setOriginalName}
      // setTitle={setTitle}
      // setSize={setSize}
      // setPrivately={setPrivately}
      // setUrl={setUrl}
      // email={email}
      // originalName={originalName}
      // title={title}
      // size={size}
      // privately={privately}
      // url={url}
    />
  );
};

export default VideoContainer;
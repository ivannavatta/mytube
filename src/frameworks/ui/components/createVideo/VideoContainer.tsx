import React, { useContext, useState } from 'react';
import VideoService from '../../../../external/services/video.service';
import CreateVideoUseCase from '../../../../useCases/createVideo.useCase';
import VideoDetails from './VideoDetails';
import { UserContext } from '../../../../domain/context/userContext.context';
import config from '../../../../domain/config/app.config'
const { base_url } = config
interface VideoContainterProps {
  setShow: (React.Dispatch<React.SetStateAction<boolean>>),
  show: boolean
}
const VideoContainer: React.FC<VideoContainterProps> = ({ setShow, show}) => {
  const context = useContext(UserContext)

  if(!context) throw new Error('no existe el contexto')

  const { email } = context

  const [file, setFile] = useState<File | null>(null);
  const [title, setTitle] = useState<string>('');
  const [privately, setPrivately] = useState<string>('public');

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setFile(event.target.files[0]);
    }
  };

  const handleTileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value)
  }

  const handlePrivatelyChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
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
    formData.append('email', email);
    formData.append('title', title);
    formData.append('isPrivate', privately);

    const videoService = new VideoService(`${base_url}`);
    const createVideoUseCase = new CreateVideoUseCase(videoService);


    try {
      await createVideoUseCase.execute(formData);
      console.log("Video created successfully");
    } catch (error) {
      console.error("Error registering user", error);
    }
  }

  return (
    <VideoDetails
      handleSubmit={handleSubmit}
      handleFileChange={handleFileChange}
      handleTileChange={handleTileChange}
      handlePrivatelyChange={handlePrivatelyChange}
      title={title}
      privately={privately}
      setShow={setShow}
      show={show}
    />
  );
};

export default VideoContainer;
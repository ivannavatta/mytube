import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
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
  const navigate = useNavigate()

  if(!context) throw new Error('no existe el contexto')

    const { email } = context

    const [file, setFile] = useState<File | null>(null);
    const [title, setTitle] = useState<string>('');
    const [privately, setPrivately] = useState<string>('public');
    const [errors, setErrors] = useState<string>('');
    const [uploading, setUploading] = useState(false);

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
    if (uploading) return;
    if (!file) {
      setErrors('Seleccioná un video .mp4 para subir.');
      return;
    }

    const videoService = new VideoService(`${base_url}`);
    const createVideoUseCase = new CreateVideoUseCase(videoService);

    setErrors('');
    setUploading(true);
    try {
      await createVideoUseCase.execute({ file, email, title, isPrivate: privately });
      navigate('/');
    } catch (error) {
      console.error('Error subiendo el video', error);
      setErrors(error instanceof Error ? error.message : 'Error al subir el video');
    } finally {
      setUploading(false);
    }
  }

  return (
    <>
    <VideoDetails
      handleSubmit={handleSubmit}
      handleFileChange={handleFileChange}
      handleTileChange={handleTileChange}
      handlePrivatelyChange={handlePrivatelyChange}
      title={title}
      privately={privately}
      setShow={setShow}
      show={show}
      errors={errors}
      uploading={uploading}
      fileName={file?.name}
    />
    </>
  );
};

export default VideoContainer;
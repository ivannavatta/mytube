import React from 'react';
import Modal, { FormField } from '../Modal/Modal';

interface VideoDetailsProps {
    handleSubmit: (e: React.FormEvent) => void;
    handleFileChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    handleTileChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    handlePrivatelyChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
    setShow: React.Dispatch<React.SetStateAction<boolean>>;
    show: boolean;
    title: string;
    privately: string;
    errors: string;
    uploading: boolean;
    fileName?: string;
}

const VideoDetails: React.FC<VideoDetailsProps> = ({
    handleSubmit,
    handleFileChange,
    handleTileChange,
    handlePrivatelyChange,
    title,
    privately,
    setShow,
    show,
    errors,
    uploading,
    fileName
}) => {
    const handleClose = () => setShow(false);

    if (!show) return null;

    const fields: FormField[] = [
      {
        id: 'title',
        label: 'Title',
        type: 'text',
        value: title,
        handleChangeInput: handleTileChange
      },
      {
        id: 'privately',
        label: 'Privacy',
        type: 'select',
        value:  privately,
        handleChangeSelect: handlePrivatelyChange,
        options: ['public', 'private']
      }
    ]

    return (
      <Modal
        titleLabel='Create video'
        fileLabel={fileName || 'Select files'}
        fileAccept='video/mp4,.mp4'
        submitButtonLabel={uploading ? 'Subiendo…' : 'Create'}
        submitDisabled={uploading}
        handleClose={handleClose}
        handleSubmit={handleSubmit}
        fields={fields}
        handleFileChange={handleFileChange}
        showFileField={true}
        loginError={errors}
      />
    );
};

export default VideoDetails;



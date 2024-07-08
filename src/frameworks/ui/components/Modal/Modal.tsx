import React from 'react';
import PublishIcon from '@mui/icons-material/Publish';
import './Modal.css'

export interface FormField {
    id: string;
    label: string;
    type: string;
    value: string;
    options?: string[];
    handleChangeInput?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleChangeSelect?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

interface ReusableFormProps {
    titleLabel: string;
    fileLabel?: string;
    submitButtonLabel: string;
    handleClose: () => void;
    handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
    handleFileChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    fields: FormField[];
    showFileField?: boolean;
    children?: React.ReactNode;
}

const Modal: React.FC<ReusableFormProps> = ({
    titleLabel,
    fileLabel,
    submitButtonLabel,
    handleClose,
    handleSubmit,
    handleFileChange,
    fields,
    showFileField = false,
    children
}) => {
    return (
        <div className="modal-overlay" onClick={handleClose}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                <div className="modal-header">
                    <h2>{titleLabel}</h2>
                    <button onClick={handleClose} className="close-button">&times;</button>
                </div>
                <form onSubmit={handleSubmit}>
                    {showFileField && (
                        <div className='divFile'>
                            <div className="divButtonVideos">
                                <PublishIcon />
                                <input type="file" id="file" onChange={handleFileChange} className="inputFiled" />
                                <label htmlFor="file" className="labelFiled">{fileLabel}</label>
                            </div>
                        </div>
                    )}
                    {fields.map(field => (
                        <div key={field.id} className='form-group'>
                            <label htmlFor={field.id} className='label'>
                                {field.type === 'select' ? (
                                    <select id={field.id} value={field.value} onChange={field.handleChangeSelect}>
                                        {field.options?.map(option => (
                                            <option key={option} value={option}>{option}</option>
                                        ))}
                                    </select>
                                ) : (
                                    <input
                                        placeholder=' '
                                        type={field.type}
                                        id={field.id}
                                        className='input'
                                        value={field.value}
                                        onChange={field.handleChangeInput}
                                    />
                                )}
                                <span className='span'>{field.label}</span>
                            </label>
                        </div>
                    ))}
                    {children}
                    <button type="submit">{submitButtonLabel}</button>
                </form>
            </div>
        </div>
    );
};

export default Modal;



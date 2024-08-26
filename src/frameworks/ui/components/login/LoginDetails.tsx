import React from 'react'
import Modal, { FormField } from '../Modal/Modal';
import { Link } from 'react-router-dom';
import './Login.css'

interface LoginDetailsProps {
    handleSubmit: (e: React.FormEvent) => void;
    setEmail: (e: React.ChangeEvent<HTMLInputElement>) => void 
    setPassword: (e: React.ChangeEvent<HTMLInputElement>) => void 
    email: string
    password: string
    setShow: (React.Dispatch<React.SetStateAction<boolean>>),
    show: boolean
    error: string
}

const LoginDetails: React.FC<LoginDetailsProps> = ({
    handleSubmit, setEmail, setPassword, email, password, setShow, show, error
}) => {

  const handleClose = () => setShow(false);

  if (!show) return null;

  const fields: FormField[] = [
    {
      id: 'email',
      label: 'Email',
      type: 'text',
      value: email,
      handleChangeInput: setEmail
    },
    {
      id: 'password',
      label: 'Password',
      type: 'password',
      value:  password,
      handleChangeInput: setPassword
    }
  ]

  return (
    <>
    <Modal titleLabel='Log in' submitButtonLabel='Log in' handleClose={handleClose} handleSubmit={handleSubmit} fields={fields} loginError={error}>
      You do not have an account? <Link to={'/signup'}>Sign up</Link> 
    </Modal>
    </>
  )
}

export default LoginDetails
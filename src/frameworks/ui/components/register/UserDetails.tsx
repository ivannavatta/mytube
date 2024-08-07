import React from 'react'
import Modal, { FormField } from '../Modal/Modal';

interface UserDetailsProps {
    handleSubmit: (e: React.FormEvent) => void;
    setName: (e: React.ChangeEvent<HTMLInputElement> ) => void;
    setLastName: (e: React.ChangeEvent<HTMLInputElement> ) => void
    setEmail: (e: React.ChangeEvent<HTMLInputElement> ) => void;
    setPassword: (e: React.ChangeEvent<HTMLInputElement> ) => void;
    setShow: React.Dispatch<React.SetStateAction<boolean>>;
    show: boolean;
    name: string;
    lastName: string;
    email: string;
    password: string;
    errors: { [key: string]: string };
  }

const UserDetails: React.FC<UserDetailsProps> = ({
  handleSubmit,
  setName,
  setLastName,
  setEmail,
  setPassword,
  name,
  lastName,
  email,
  password,
  setShow,
  show,
  errors
}) => {

  const handleClose = () => setShow(false)
  

  if(!show) return null

  const fields: FormField[] = [
    {
      id: 'name',
      label: 'Name',
      type: 'text',
      value: name,
      handleChangeInput: setName,
      error: errors.name
    },
    {
      id: 'lastName',
      label: 'LastName',
      type: 'text',
      value: lastName,
      handleChangeInput: setLastName,
      error: errors.lastName
    },
    {
      id: 'email',
      label: 'Email',
      type: 'text',
      value: email,
      handleChangeInput: setEmail,
      error: errors.email
    },
    {
      id: 'password',
      label: 'Password',
      type: 'password',
      value: password,
      handleChangeInput: setPassword,
      error: errors.password
    },
  ]
  return (
   <Modal titleLabel='Register' submitButtonLabel='Sign up' handleSubmit={handleSubmit} fields={fields} handleClose={handleClose}/>
  )
}

export default UserDetails
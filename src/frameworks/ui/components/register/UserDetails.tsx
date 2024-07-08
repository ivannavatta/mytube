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
  show
}) => {

  const handleClose = () => setShow(false)
  

  if(!show) return null

  const fields: FormField[] = [
    {
      id: 'name',
      label: 'Name',
      type: 'text',
      value: name,
      handleChangeInput: setName
    },
    {
      id: 'lastName',
      label: 'LastName',
      type: 'text',
      value: lastName,
      handleChangeInput: setLastName
    },
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
      value: password,
      handleChangeInput: setPassword
    },
  ]
  return (
   <Modal titleLabel='Register' submitButtonLabel='Sign up' handleSubmit={handleSubmit} fields={fields} handleClose={handleClose}/>
  )
}

export default UserDetails
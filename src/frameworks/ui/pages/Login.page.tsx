// LoginPage.tsx
import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import LoginContainer from '../components/login/LoginContainer';
import { UserContext } from '../../../domain/context/userContext.context';

const LoginPage: React.FC = () => {
  const context = useContext(UserContext)
  if(!context) throw new Error('no existe el contexto')

  const { setEmail, setPassword, setLogin, email, password} = context
  const [open, setOpen] = useState(true);
  const navigate = useNavigate();

  const handleClose = () => {
    setOpen(false);
    navigate('/'); // Navegar a la ruta principal después de cerrar el modal
  };

  useEffect(() => {
    if (!open) {
      navigate('/');
    }
  }, [open, navigate]);

  return (
    <LoginContainer
      setEmail={setEmail}
      setPassword={setPassword}
      email={email}
      password={password}
      setLogin={setLogin}
      setShow={setOpen}
      show={open}
    />
  );
};

export default LoginPage;

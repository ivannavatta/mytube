// LoginPage.tsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import LoginContainer from '../components/login/LoginContainer';

interface LoginPageProps {
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
  setLogin: React.Dispatch<React.SetStateAction<boolean>>;
  email: string;
  password: string;
}

const LoginPage: React.FC<LoginPageProps> = ({
  setEmail,
  setPassword,
  setLogin,
  email,
  password
}) => {
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

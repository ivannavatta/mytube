import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import LoginContainer from '../components/login/LoginContainer';

const LoginPage: React.FC = () => {
  
  const [open, setOpen] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (!open) {
      navigate('/');
    }
  }, [open, navigate]);

  return (
    <LoginContainer
      setShow={setOpen}
      show={open}
    />
  );
};

export default LoginPage;

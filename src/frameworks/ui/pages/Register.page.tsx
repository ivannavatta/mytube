import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import UserContainer from '../components/register/UserContainer';

const RegisterPage: React.FC = () => {
  const [show, setShow] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (!show) {
      navigate('/');
    }
  }, [show, navigate]);
  return (
    <UserContainer
      setShow={setShow}
      show={show}
    />
  );
};

export default RegisterPage;

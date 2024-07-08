import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import UserContainer from '../components/register/UserContainer';


interface RegisterPageProps {
  
}

const RegisterPage: React.FC<RegisterPageProps> = ({

}) => {
  const [show, setShow] = useState(true);
  const navigate = useNavigate();

  const handleClose = () => {
    setShow(false);
    navigate('/'); // Navegar a la ruta principal después de cerrar el modal
  };

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

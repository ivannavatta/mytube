// MyNavbar.tsx
import React, { useContext } from 'react';
import { Navbar, Button } from 'react-bootstrap';
import { FaVideo } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { UserContext } from '../../../../domain/context/userContext.context';


const MyNavbar: React.FC = () => {
  const context = useContext(UserContext)

  if(!context) throw new Error('no existe el contexto')

    const { login, email } = context
  return (
    <Navbar className="navbar">
     <Link to={'/'}><Navbar.Brand>MyTube</Navbar.Brand></Link> 
      <div className="navbar-right">
        {email !== '' ? (
          <div className="icon-container">
           <Link to={'/upload'}><FaVideo className="video-icon" /></Link> 
            <span className="tooltip-text">Crear</span>
          </div>
        ) : (
          <Button className="login-button" variant="outline-light">
            <Link to={"/login"}>Log In</Link>
          </Button>
        )}
      </div>
    </Navbar>
  );
};

export default MyNavbar;




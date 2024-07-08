// MyNavbar.tsx
import React from 'react';
import { Navbar, Button } from 'react-bootstrap';
import { FaVideo } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Navbar.css';

interface MyNavbarProps {
  login: boolean;
}

const MyNavbar: React.FC<MyNavbarProps> = ({ login }) => {
  return (
    <Navbar bg="dark" variant="dark" className="navbar">
      <Navbar.Brand href="/home">MyTube</Navbar.Brand>
      <div className="navbar-right">
        {login ? (
          <div className="icon-container">
           <Link to={'upload'}><FaVideo className="video-icon" /></Link> 
            <span className="tooltip-text">Crear</span>
          </div>
        ) : (
          <Button className="login-button" variant="outline-light">
            <Link to="/login">Log In</Link>
          </Button>
        )}
      </div>
    </Navbar>
  );
};

export default MyNavbar;




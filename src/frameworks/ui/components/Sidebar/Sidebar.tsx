import React from 'react';
import { Nav } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import './Sidebar.css';

const Sidebar: React.FC = () => {
  const location = useLocation();

  return (
    <div className="sidebar">
      <Nav  className="flex-column">
        <Nav.Link href="/" className={location.pathname === '/' ? 'active' : ''}>Home</Nav.Link>
        <Nav.Link href='/channel' className={location.pathname === '/channel' ? 'active' : ''}>Your Videos</Nav.Link>
        <Nav.Link href='/subscriptions' className={location.pathname === '/subscriptions' ? 'active' : ''}>Subscriptions</Nav.Link>
      </Nav>
    </div>
  );
};

export default Sidebar;


import React, { useState } from 'react';
import { Nav } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import './Sidebar.css';

const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button className="sidebar-toggle" onClick={toggleSidebar}>
        <FaBars />
      </button>
      <div className={`sidebar ${isOpen ? 'open' : ''}`}>
        <Nav className="flex-column">
          <Nav.Link href="/" className={location.pathname === '/' ? 'active' : ''}>Home</Nav.Link>
          <Nav.Link href="/channel" className={location.pathname === '/channel' ? 'active' : ''}>Your Videos</Nav.Link>
        </Nav>
      </div>
    </>
  );
};

export default Sidebar;



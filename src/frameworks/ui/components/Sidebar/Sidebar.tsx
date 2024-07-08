import React from 'react';
import { Nav } from 'react-bootstrap';
import './Sidebar.css';

const Sidebar: React.FC = () => {
  return (
    <div className="sidebar">
      <Nav defaultActiveKey="/home" className="flex-column">
        <Nav.Link href="/home">Home</Nav.Link>
        <Nav.Link eventKey="link-5">Your Videos</Nav.Link>
        <Nav.Link eventKey="link-2">Subscriptions</Nav.Link>
      </Nav>
    </div>
  );
};

export default Sidebar;

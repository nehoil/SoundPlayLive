import React from 'react';
import './NavBar.scss';
import { CloudOutlined } from '@ant-design/icons';

export default function NavBar() {

  return (
    <div className="navbar-container">
      <div className="navbar-content container">
      <a href="/">
      <div className="logo">
      <CloudOutlined />
      SoundPlay</div>
      </a> 
      </div>
    </div>
  );
}

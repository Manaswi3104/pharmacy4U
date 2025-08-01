// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../assets/logo.png';

function Navbar() {
  return (
    <div className="navbar">
      <div className="left">
        <div className="img">
          <img src={logo} alt="logo" className="logo" />
        </div>
        <div className="name">
          <h1>Pharmacy4U</h1>
        </div>
      </div>
      <div className="right">
        <ul>
          <li><Link to="/about">What We Are</Link></li>
          <li><Link to="/about">Why Choose Us</Link></li>
          <li><Link to="/">Go to Homepage</Link></li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;

// src/pages/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { footer } from '../components/footer';
import './Home.css';

function Home() {
  return (
    <div className="home-container">
      <h2>Welcome to Pharmacy4U</h2>
      <p>Your trusted online pharmacy committed to your health and wellness.</p>
    </div>
  );
}

export default Home;


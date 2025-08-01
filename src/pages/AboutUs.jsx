// src/pages/AboutUs.jsx
import React from 'react';
import './AboutUs.css';

function AboutUs() {
  return (
    <div className="about-container">
      <h3>What we are?</h3>
      <p><b>Pharmacy4U</b>, your trusted online pharmacy committed to providing you with high-quality 
        health and wellness products. Our mission is to make healthcare accessible, affordable, and
        convenient for everyone.</p>

      <h3>Why Choose Us?</h3>
      <ul>
        <li><b>Trusted Professionals:</b> Qualified pharmacists and healthcare experts dedicated to your well-being.</li>
        <li><b>Quality Assurance:</b> We source our products from reputable manufacturers and suppliers.</li>
        <li><b>Privacy and Security:</b> Your health data is protected with advanced security.</li>
        <li><b>Community Focused:</b> We participate in awareness programs and charitable activities.</li>
      </ul>
    </div>
  );
}

export default AboutUs;

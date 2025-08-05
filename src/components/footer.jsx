import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-columns">
        <div className="footer-col">
          <strong>Pharmacy4U</strong>
          <p>© 2023 Pharmacy4U.<br />All rights reserved.</p>
        </div>
        <div className="footer-col">
          <strong>Contact Us</strong>
          <p>1233-456-7890</p>
          <a href="mailto:abc@gamil.com" className="footer-link">abc@gamil.com</a>
        </div>
        <div className="footer-col">
          <strong>Follow Us</strong>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="footer-link">Facebook</a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="footer-link">Twitter</a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="footer-link">Instagram</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;

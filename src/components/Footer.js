import React from 'react';
import '../assets/styles/Footer.css'; // Path to your Footer CSS file

import facebook from "../assets/images/facebook.png"
import instagram from "../assets/images/instagram.png"
import twitter from "../assets/images/twitter.png"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h4>Contact Us</h4>
          <p>Address: 123 VRN St, City, Country</p>
          <p>Phone: (123) 456-7890</p>
          <p>Email: contact@vrngroup.com</p>
        </div>
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/about">About Us</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Follow Us</h4>
          <div className="social-links">
  <a href="http://facebook.com" target="_blank" rel="noopener noreferrer">
    <img src={facebook} alt="Facebook" />
  </a>
  <a href="http://twitter.com" target="_blank" rel="noopener noreferrer">
    <img src={twitter} alt="Twitter" />
  </a>
  <a href="http://instagram.com" target="_blank" rel="noopener noreferrer">
    <img src={instagram} alt="Instagram" />
  </a>
  {/* Add other social links as needed */}
</div>
        </div>
      </div>
      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} VRN Group of Companies | All Rights Reserved
        <p className="powered-by">
          Powered by <a href="https://www.grow4tech.com" target="_blank" rel="noopener noreferrer">Grow4Tech</a>
        </p>
      </div>
      
    </footer>
  );
};

export default Footer;

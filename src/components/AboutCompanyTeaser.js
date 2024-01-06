// AboutCompanyTeaser.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/AboutCompanyTeaser.css';
import companyImage from '../assets/images/company-image.png';

const AboutCompanyTeaser = () => (
  <section className="about-company-teaser">
    <div className="container">
      <div className="image-container">
        <img src={companyImage} alt="VRN Group" className="company-image" />
      </div>
      <div className="text-content">
        <h2>About VRN Group of Companies</h2>
        <p>
          Since its inception in [Year], VRN Group has been at the forefront of innovation in [Industry/Field]...
        </p>
        <Link to="/about-us" className="learn-more-btn">Learn More</Link>
      </div>
    </div>
  </section>
);

export default AboutCompanyTeaser;

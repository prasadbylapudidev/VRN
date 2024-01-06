// WhyVRNSection.js
import React from 'react';
import '../assets/styles/WhyVRNSection.css'; // Make sure to create this CSS file

const WhyVRNSection = () => {
  return (
    <section className="why-vrn-section">
      <div className="container">
        <h2>Why Choose VRN Group of Companies?</h2>
        <p>We lead with innovation and excellence in our field, providing top-notch services and building lasting relationships.</p>
        <div className="features">
          <div className="feature">
            <h3>Innovation</h3>
            <p>Pushing the boundaries of what's possible to deliver solutions that make a real difference.</p>
          </div>
          <div className="feature">
            <h3>Quality</h3>
            <p>Committed to the highest standards of excellence in every project we undertake.</p>
          </div>
          <div className="feature">
            <h3>Integrity</h3>
            <p>Our business is built on trust and ethical practices, ensuring transparency in all interactions.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyVRNSection;

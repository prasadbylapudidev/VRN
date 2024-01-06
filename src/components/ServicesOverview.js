// ServicesOverview.js
import React from 'react';
import '../assets/styles/ServicesOverview.css';
import event from '../assets/images/event.png';
import hardware from '../assets/images/hardware.png';
import construction from '../assets/images/construction.png';
import education from '../assets/images/education.png';

const ServiceItem = ({ id, title, description, imageUrl, detailUrl }) => (
    <div className="service" id={id}>
      <img src={imageUrl} alt={title} className="service-icon" />
      <div className="service-content">
        <h3 className="service-title">{title}</h3>
        <p className="service-description">{description}</p>
        <a href={detailUrl} className="service-link">Learn More</a>
      </div>
    </div>
  );
  

const ServicesOverview = () => (
  <section className="services-overview">
    <h2 className="services-overview-title">Our Services</h2> {/* Main title for the section */}
    <div className="container">
      <ServiceItem
        id="event-management"
        title="Event Management"
        description="Brief description of Event Management services..."
        imageUrl={event}
        detailUrl="events"
      />
      <ServiceItem
        id="constructions"
        title="Constructions"
        description="Brief description of Construction services..."
        imageUrl={construction}
        detailUrl="construction"
      />
      <ServiceItem
        id="computer-hardware"
        title="Computer Hardware"
        description="Brief description of Computer Hardware services..."
        imageUrl={hardware}
        detailUrl="path_to_computer_hardware_details.html"
      />
      <ServiceItem
        id="education"
        title="Education"
        description="Brief description of Educational services..."
        imageUrl={education}
        detailUrl="path_to_education_details.html"
      />
    </div>
  </section>
);

export default ServicesOverview;

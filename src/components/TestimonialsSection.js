import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import '../assets/styles/TestimonialsSection.css';

import client1 from "../assets/images/client-logo-1.png";
import client2 from "../assets/images/client-logo-2.png";

// Example data, replace with your actual import statements or data fetching logic
const testimonialsData = [
  {
    id: 1,
    text: "VRN Group provided exceptional service...",
    author: "John Doe, CEO of Company",
    image: client1 // Make sure this path is correct
  },

  {
    id: 2,
    text: "VRN Group provided exceptional service...",
    author: "Akshay Patil, CEO of Company",
    image: client2 // Make sure this path is correct
  }
  // ... other testimonials
];

const TestimonialsSection = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true
  };

  return (
    <section className="testimonials-section">
      <div className="container">
        <h2>What Our Clients Say</h2>
        <Slider {...sliderSettings}>
          {testimonialsData.map((testimonial) => (
            <div key={testimonial.id} className="testimonial">
              <div className='img-section'>
                <img src={testimonial.image} alt={`Testimonial by ${testimonial.author}`} className="testimonial-img" />
              </div>
              <div className='testiMonial-text'>
                <blockquote>{testimonial.text}</blockquote>
                <p className="testimonial-author">{testimonial.author}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default TestimonialsSection;

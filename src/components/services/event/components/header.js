// Header.js
import React from 'react';
import { Container } from 'react-bootstrap';

export const Header = (props) => {
  const { title, paragraph } = props.data || {};

  return (
    <header id="header">
      <div
        className="intro d-flex align-items-center justify-content-center text-center" // Added Flexbox classes
        style={{
          backgroundImage: `url('https://shivambhaktifood.files.wordpress.com/2018/02/events-main-banner-image.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: 'white', 
          height: '500px',
        }}
      >
        <div className="overlay">
          <Container>
            <div className="row">
              <div className="col-md-8 offset-md-2 intro-text">
                <h1>
                  {title || 'Loading'}
                  <span></span>
                </h1>
                <p>{paragraph || 'Loading'}</p>
                
              </div>
            </div>
          </Container>
        </div>
      </div>
    </header>
  );
};


// Header.js
import React from 'react';
import { Container } from 'react-bootstrap';

export const Header = (props) => {
  const { title, paragraph } = props.data || {};

  return (
    <header id="header">
      <div
        className="intro d-flex align-items-center justify-content-center text-center"
        style={{
          backgroundImage: `url('https://previews.123rf.com/images/nataliia2910/nataliia29101708/nataliia2910170800004/83277655-vector-illustration-of-buildings-constructions-site-and-cranes-banner-skyscraper-under-construction.jpg')`,
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
                <h1 style={{color:'black'}}>
                  {title || 'Loading'}
                  <span></span>
                </h1>
                <p style={{color:'black'}}>{paragraph || 'Loading'}</p>
                
              </div>
            </div>
          </Container>
        </div>
      </div>
    </header>
  );
};


import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faRing, 
  faCamera, 
  faUtensils, 
  faMusic, 
  faHeart, 
  faChessBishop
} from '@fortawesome/free-solid-svg-icons';
export const Services = (props) => {
  return (
    <div id='services' className='text-center' style={{ background: 'linear-gradient(to right, #6372ff 0%, #5ca9fb 100%)', padding: '50px 0' }}>
      <div className='container'>
        <div className='section-title'>
          <h2 style={{color:'white'}}>OUR SERVICES</h2>
          <p style={{color:'white',fontSize:'20px'}}>
           Our all-in-one solution for unforgettable weddings, seamlessly blending creativity and perfection.
          </p>
        </div>
        <br/>
        <div className='row'>
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className='col-md-4'>
                  <div className='event-service-icon' 
                    style={{ 
                      boxShadow: '10px 10px 10px rgba(0, 0, 0, 0.05)',
                      width: '120px',
                      height: '120px',
                       background: 'linear-gradient(to right, #6372ff 0%, #5ca9fb 100%)',
                         borderRadius: '50%',
                      color: '#fff',
                        display: 'inline-flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      
                      }}>
                  <FontAwesomeIcon
                    className='icon'
                    icon={getIcon(d.icon)}
                    size='2x'
                    style={{
                      padding:'40px 0',

                    }}
                  />

                  </div>
                  <div className='service-desc'>
                    <h3 style={{color:"white"}}>{d.name}</h3>
                    <p style={{color:'white'}}>{d.text}</p>
                  </div>
                </div>
              ))
            : 'loading'}
        </div>
      </div>
    </div>
  );
};

const getIcon = (iconName) => {
  switch (iconName) {
    case 'fa fa-ring':
      return faRing; 
    case 'fa fa-camera':
      return faCamera; 
    case 'fa fa-cutlery':
      return faUtensils; 
    case 'fa fa-chess-bishop':
      return faChessBishop;
    case 'fa fa-music':
      return faMusic; 
    case 'fa fa-heart':
      return faHeart;
    default:
      return null;
  }
};

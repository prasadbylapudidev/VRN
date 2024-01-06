import React from 'react';
import './team.css';

export const Team = (props) => {
  return (
    <div id='team' className='text-center'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-12'>
            <div className='section-title'>
              <h2>Meet the Team</h2>
              <br/>
            </div>
          </div>
        </div>

        <div className='row'>
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className='col-md-3 col-sm-6 team'>
                  <div className='thumbnail'>
                    <img src={d.img} alt='...' className='team-img' />
                    <div className='caption'>
                      <h4>{d.name}</h4>
                      <p>{d.job}</p>
                      {/* Add social media links/icons here if needed */}
                    </div>
                  </div>
                </div>
              ))
            : 'loading'}
        </div>
      </div>
    </div>
  );
};

import { useState } from 'react';
import './contact.css';
import {
  faMapMarkerAlt, 
  faPhone, 
  faEnvelope, 
} from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const initialState = {
  name: '',
  email: '',
  message: '',
};

export const Contact = (props) => {
  const [{ name, email, message }, setState] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };

  const clearState = () => setState({ ...initialState });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, message);
  };

  return (
    <div id='contact' style={{background:'#f6f6f6'}}>
      <div className='container'>
        <div className='row'>
          <div className='col-md-8'>
            <div className='section-title'>
              <h2>Get In Touch</h2>
              <p>
                Please fill out the form below to send us an email and we will
                get back to you as soon as possible.
              </p>
            </div>
            <form name='sentMessage' validate onSubmit={handleSubmit}>
              <div className='row'>
                  <div className='col-md-6'>
                    <div className='form-group'>
                      <input
                        type='text'
                        id='name'
                        name='name'
                        className='form-control'
                        placeholder='Name'
                        required
                        onChange={handleChange}
                      />
                      <p className='help-block text-danger'></p>
                    </div>
                  </div>
                  <div className='col-md-6'>
                    <div className='form-group'>
                      <input
                        type='email'
                        id='email'
                        name='email'
                        className='form-control'
                        placeholder='Email'
                        required
                        onChange={handleChange}
                      />
                      <p className='help-block text-danger'></p>
                    </div>
                  </div>
                </div>
                <div className='form-group'>
                  <textarea
                    name='message'
                    id='message'
                    className='form-control'
                    rows='4'
                    placeholder='Message'
                    required
                    onChange={handleChange}
                  ></textarea>
                  <p className='help-block text-danger'></p>
                </div>
                <div id='success'></div>
                <button type='submit' className='btn btn-custom btn-lg'>
                  Send Message
                </button>
            </form>
          </div>

          <div className='col-md-3 col-md-offset-1 contact-info'>
            <div className='contact-item'>
              <h3>Contact Info</h3>
              <p>
                <span>
                  <FontAwesomeIcon icon={faMapMarkerAlt} /> Address
                </span>
                {props.data ? props.data.address : 'loading'}
              </p>
            </div>
            <div className='contact-item'>
               <p>
                <span>
                  <FontAwesomeIcon icon={faPhone} /> Phone
                </span>{' '}
                {props.data ? props.data.phone : 'loading'}
              </p>
            </div>
            <div className='contact-item'>
              <p>
                <span>
                  <FontAwesomeIcon icon={faEnvelope} /> Email
                </span>{' '}
                {props.data ? props.data.email : 'loading'}
              </p>
            </div>
          </div>
        </div>
      <br/>
      <br/>
      <div className='row row-divider'>

      </div>
       <div className='row'>
          <div className='col-md-12'>
            <div className='social'>
              <ul>
                <li>
                  <a href={props.data ? props.data.facebook : ''}>
                    <FontAwesomeIcon icon={faFacebook}/>
                  </a>
                </li>
                <li>
                  <a href={props.data ? props.data.twitter : ''}>
                    <FontAwesomeIcon icon={faTwitter} />
                  </a>
                </li>
                <li>
                  <a href={props.data ? props.data.youtube : ''}>
                    <FontAwesomeIcon icon={faYoutube} />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>


      </div>
    </div>
  );
};

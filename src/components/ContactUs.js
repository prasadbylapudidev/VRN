import React, { useState } from 'react';
import '../assets/styles/ContactUs.css';
import '../FirebaseConfig.js'
import { Form, Button, Row, Col } from 'react-bootstrap';
import { getFirestore, addDoc, collection, getDocs } from "firebase/firestore"; 

export default function ContactUs() {


  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    queryType: 'construction', // Default value for the dropdown
  });


  const [formErrors, setFormErrors] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

    const db = getFirestore();

     const saveDataToFirestore = async (formData) => {
      const docRef = await addDoc(collection(db, "myCollection"), formData);
      alert("Your Query Submitted.");
    };

    

  const validateForm = () => {
    let valid = true;
    const newFormErrors = { ...formErrors };

    Object.entries(formData).forEach(([key, value]) => {
      if (value.trim() === '') {
        alert(`${key.charAt(0).toUpperCase() + key.slice(1)} is required`)
        valid = false;
      } else {
        newFormErrors[key] = '';
      }
    });

    setFormErrors(newFormErrors);
    return valid;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    setFormErrors({
      ...formErrors,
      [name]: '',
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      saveDataToFirestore(formData)
       setFormData({
      name: '',
      email: '',
      phone: '',
      message: '',
      queryType: 'events',
    });
    } else {
      console.log('Form validation failed');
    }
  };

  return (
    <div className="contact-container">
      <div className="map">
      
        <iframe
          title="Google Maps"
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d13249.247068040606!2d151.20960562674117!3d-33.8816236491114!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1spt-BR!2sbr!4v1468899355787"
          width="100%"
          height="650px"
          frameBorder="0"
          style={{ border: 0 }}
          allowFullScreen
        ></iframe>
      
      </div>
      <div className="contact-form">
        <h1 className="title">Contact Us</h1>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formName">
            <Form.Control
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleInputChange}
            />
            <Form.Text className="error">{formErrors.name}</Form.Text>
          </Form.Group>

          <Form.Group controlId="formEmail">
            <Form.Control
              type="email"
              name="email"
              placeholder="E-mail Address"
              value={formData.email}
              onChange={handleInputChange}
            />
            <Form.Text className="error">{formErrors.email}</Form.Text>
          </Form.Group>

          <Form.Group controlId="formPhone">
            <Form.Control
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleInputChange}
            />
            <Form.Text className="error">{formErrors.phone}</Form.Text>
          </Form.Group>

          <Form.Group controlId="formQueryType" 
          style={{ width: '60%',  margin: '2% 8%',
          }}>
            <Form.Label style={{fontSize:'20px'}}>Query Type:</Form.Label>
            <Form.Control
              as="select"
              name="queryType"
              value={formData.queryType}
              onChange={handleInputChange}
            >
              <option value="construction">Construction</option>
              <option value="events">Events</option>
              <option value="education">Education</option>
              <option value="computer_hardware">Computer Hardware</option>
            </Form.Control>
          </Form.Group>

          <Form.Group controlId="formMessage">
            <Form.Control
              as="textarea"
              name="message"
              rows="2"
              placeholder="Write your Query"
              value={formData.message}
              onChange={handleInputChange}
            />
            <Form.Text className="error">{formErrors.message}</Form.Text>
          </Form.Group>

          <Button type="submit" className="btn-send">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
}

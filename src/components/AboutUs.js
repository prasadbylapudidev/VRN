// AboutUs.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../assets/styles/AboutUs.css';

const AboutUs = () => (
  <Container className="section_all bg-light" id="about">
    <Row className="vertical_content_manage mt-5">
      <Col lg={6}>
        <div className="img_about mt-3">
          <img
            src="https://i.ibb.co/qpz1hvM/About-us.jpg"
            alt="About Us"
            className="img-fluid mx-auto d-block"
          />
        </div>
      </Col>
      <Col lg={6}>
        <div className="about_header_main mt-3">
          <div className="about_icon_box">
            <h2 className="text_custom font-weight-bold">Our Story</h2>
          </div>
          <h4 className="about_heading text-capitalize font-weight-bold mt-4">
            Crafting Memorable Experiences
          </h4>
          <p className="text-muted mt-3">
            At OurCompany, we are passionate about creating unforgettable
            moments. Our journey began with a simple idea: to provide people
            with experiences that inspire and connect. From our humble
            beginnings, we have grown into a team of dedicated individuals
            committed to excellence.
          </p>

          <p className="text-muted mt-3">
            Every project, every collaboration is an opportunity to make a
            positive impact. We believe in the power of creativity and
            innovation to transform the ordinary into the extraordinary. Join
            us on our quest to make a difference and build a legacy of
            innovation, passion, and authenticity.
          </p>
        </div>
      </Col>
    </Row>

    <div id="team">
      <div  className="row">
                <h2>Our Team</h2>
                  <div className="col-lg-3 col-md-4 col-sm-6">
                      <div className="team-thumb">
                          <img src="https://image.ibb.co/c8xcU6/team1.jpg" className="img-responsive" alt="Team" />
                          <div className="team-des">
                              <h3>Akshay Patil</h3>
                              <h4>Founder, CTO</h4>
                              
                          </div>
                      </div>
                  </div>
                  
                  <div className="col-lg-3 col-md-4 col-sm-6">
                      <div className="team-thumb">
                          <img src="https://image.ibb.co/c8xcU6/team1.jpg" className="img-responsive" alt="Team"/>
                          <div className="team-des">
                              <h3>Prasad Bylapudi</h3>
                              <h4>Co-Founder</h4>
                              
                          </div>
                      </div>
                  </div>
                  
                  <div className="col-lg-3 col-md-4 col-sm-6">
                      <div className="team-thumb">
                          <img src="https://image.ibb.co/c8xcU6/team1.jpg" className="img-responsive" alt="Team" />
                          <div className="team-des">
                              <h3>Mohamed Atef</h3>
                              <h4>Co-Founder</h4>
                              
                          </div>
                      </div>
                  </div>
                  
                  <div className="col-lg-3 col-md-4 col-sm-6">
                      <div className="team-thumb">
                          <img src="https://image.ibb.co/c8xcU6/team1.jpg" className="img-responsive" alt="Team" />
                          <div className="team-des">
                              <h3>Ahmed Mohamed</h3>
                              <h4>Co-Founder</h4>
                          </div>
                      </div>
                  </div>

      </div>
    </div>
  </Container>
  
);

export default AboutUs;

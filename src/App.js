import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import HeroSection from './components/HeroSection'; 
import WhyVRNSection from './components/WhyVRNSection';
import ServicesOverview from './components/ServicesOverview';
import AboutCompanyTeaser from './components/AboutCompanyTeaser';
import AboutUs from './components/AboutUs'; 
import TestimonialsSection from './components/TestimonialsSection';
import Footer from './components/Footer';
import ContactUs from './components/ContactUs';
import EventIndex from './components/services/event/EventIndex'
import ConstructionIndex from './components/services/construction/ConstructionIndex'
import ScrollToTopButton from './components/ScrollToTopButton';

import { ContactQueries } from './components/ContactQueries';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route 
            path="/" 
            element={
              <>
                <HeroSection />
                <AboutCompanyTeaser />
                <WhyVRNSection />
                <ServicesOverview />
                <TestimonialsSection />
                <Footer />
              </>
            } 
          />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/events" element={<EventIndex />} />
          <Route path="/construction" element={<ConstructionIndex />} />
          <Route path="/Queries" element={<ContactQueries/>} />
          
        </Routes>
        <ScrollToTopButton />
      </div>
    </Router>
  );
}

export default App;

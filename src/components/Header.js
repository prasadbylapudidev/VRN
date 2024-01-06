// Header.js
import React, { useState } from 'react';
import '../assets/styles/Header.css';
import logo from '../assets/images/logo.png';

const Header = () => {
    const [isNavVisible, setIsNavVisible] = useState(false);
    // Removed state for isServicesDropdownVisible since it's not needed for CSS-only hover interactions

    const toggleNav = () => {
        setIsNavVisible(!isNavVisible);
    };

    // Removed toggleServicesDropdown function since the dropdown is now purely CSS-driven

    return (
        <header className="header">
            <button className={`nav-toggle ${isNavVisible ? 'active' : ''}`} onClick={toggleNav} aria-label="Toggle navigation">
                <span></span>
                <span></span>
                <span></span>
            </button>
            <img src={logo} alt="VRN Group Logo" className="logo" />
            <nav className={`nav-links ${isNavVisible ? 'visible' : ''}`}>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li className="services-dropdown">
                        <a href="">Services</a>
                        <ul className="dropdown">
                            <li><a href="events">Event Management</a></li>
                            <li><a href="construction">Construction</a></li>
                            <li><a href="#computer-hardware">Computer Hardware</a></li>
                            <li><a href="#education">Education</a></li>
                        </ul>
                    </li>
                    <li><a href="about-us">About Us</a></li>
                    <li><a href="contact-us">Contact Us</a></li>
                </ul>
            </nav>
            <button className="cta-button">Get in Touch</button>
        </header>
    );
};

export default Header;

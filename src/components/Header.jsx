import React, { useState } from 'react';
import { Link } from 'react-scroll';
import '../css/header.css';
import logo from '../assets/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faDumbbell } from '@fortawesome/free-solid-svg-icons';

export default function Header() {

  // toggle menu function
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="nav-bar">
      {/* logo image */}
      <img className='logo-img' src={logo} alt="logo" />

      {/* toggle button for mobile view */}
      <div className="menu-toggle" onClick={toggleMenu}>
        <FontAwesomeIcon icon={faBars} />
      </div>

      {/* navigation links */}
      <ul className={isOpen ? "navbar-links open" : "navbar-links"}>
        <li><Link to="about" smooth={true} duration={1000}>About Us</Link></li>
        <li><Link to="services" smooth={true} duration={1000}>Services</Link></li>
        <li><Link to="packages" smooth={true} duration={1000}>Packages</Link></li>
        <li><Link to="products" smooth={true} duration={1000}>Products</Link></li>
        <li><Link to="contact" smooth={true} duration={1000}>Contact Us</Link></li>
      </ul>

      {/* sign in button */}
      <button className="login-button">
        SIGN IN <FontAwesomeIcon icon={faDumbbell} />
      </button>
    </div>
  );
}

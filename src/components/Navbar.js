import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../components/Images/ecommerce logo.jpg';
import '../components/styles/Navbar.css';

function Navbar() {
  const [showLinks, setShowLinks] = useState(false);

  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };

  return (
    <div className="navbar">
      <img src={logo} alt="Logo" className="logo" />
      <div className="icons">
        <i className="fas fa-user"></i>
        <i className="fas fa-shopping-cart"></i>
      </div>
      <button className="toggle-button" onClick={toggleLinks}>
        <i className={`fas ${showLinks ? 'fa-times' : 'fa-bars'}`}></i>
      </button>
      <ul className={showLinks ? 'nav-links active' : 'nav-links'}>
        <li>
          <NavLink to="/" exact activeClassName="active">Home</NavLink>
        </li>
        <li>
          <NavLink to="/shop" activeClassName="active">Shop</NavLink>
        </li>
        <li>
          <NavLink to="/about" activeClassName="active">About</NavLink>
        </li>
        <li>
          <NavLink to="/contact" activeClassName="active">Contact</NavLink>
        </li>
        <li>
          <NavLink to="/signup" activeClassName="active">SignUp</NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;

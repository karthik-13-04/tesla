import React from 'react';
import { FaUser, FaGlobe, FaHeadset } from 'react-icons/fa';
import './Navbar.css';
import TeslaLogo from '../image/tesla nav.svg'; // Replace with your actual SVG logo path

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-logo">
        <img src={TeslaLogo} alt="Tesla Logo" />
      </div>
      <div className="navbar-menu">
        <a href="#model3">Vehicles</a>
        <a href="#energy">Energy</a>
        <a href="#charging">Charging</a>
        <a href="#discover">Discover</a>
        <a href="#shop">Shop</a>
      </div>
      <div className="navbar-icons">
        <FaHeadset className="icon" />
        <FaGlobe className="icon" />
        <FaUser className="icon" />
      </div>
    </div>
  );
};

export default Navbar;

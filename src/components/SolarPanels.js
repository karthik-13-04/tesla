import React from 'react';
import './Section.css';
import accessoriesImage from '../image/Solar Panels.avif';
const SolarPanels = () => {
  return (
    <div className="section" style={{ backgroundImage: `url(${accessoriesImage})` }}>
      <div className="content">
        <h1>Solar Panels</h1>
        <h4>Schedule a Virtual Consultation</h4>
      </div>
      <div className="buttons">
        <button>Order Now</button>
        <button>Learn More</button>
      </div>
    </div>
  );
};

export default SolarPanels;

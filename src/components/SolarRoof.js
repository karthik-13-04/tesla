import React from 'react';
import './Section.css';
import accessoriesImage from '../image/Solar Roof.avif';
const SolarRoof = () => {
  return (
    <div className="section" style={{ backgroundImage: `url(${accessoriesImage})`  }}>
      <div className="content">
        <h1>Solar Roof</h1>
        <h4>Produce Clean Energy From Your Roof</h4>
      </div>
      <div className="buttons">
        <button>Order Now</button>
        <button>Learn More</button>
      </div>
    </div>
  );
};

export default SolarRoof;

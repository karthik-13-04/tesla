import React from 'react';
import './Section.css';
import accessoriesImage from '../image/Powerwall.avif';
const Powerwall = () => {
  return (
    <div className="section" style={{ backgroundImage: `url(${accessoriesImage})` }}>
      <div className="content">
        <h1>Powerwall</h1>
      </div>
      <div className="buttons">
        <button>Order Now</button>
        <button>Learn More</button>
      </div>
    </div>
  );
};

export default Powerwall;

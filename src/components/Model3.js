import React from 'react';
import './Section.css';
import modal3Image from '../image/teslapng.png'

const Model3 = () => {
  return (
    <div className="section" style={{ backgroundImage: `url(${modal3Image})` }}>
      <div className="content">
        <h1>Model 3</h1>
        <div className="description">
          <h4>$7,500 Federal Tax Credit Available</h4>
          <h4 className="light">From $29,990 After Est. Savings</h4>
        </div>
      </div>
      <div className="buttons">
        <button>Order Now</button>
        <button>Demo Drive</button>
      </div>
    </div>
  );
};

export default Model3;


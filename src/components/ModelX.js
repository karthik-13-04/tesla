import React from 'react';
import './Section.css';
import accessoriesImage from '../image/Model X.avif';
const ModelX = () => {
  return (
    <div className="section" style={{ backgroundImage: `url(${accessoriesImage})` }}>
      <div className="content">
        <h1>Model X</h1>
        <div className="description">
          <h4>From $63,990</h4>
          <h4 className="light">After Est. Savings</h4>
        </div>
      </div>
      <div className="buttons">
        <button>Order Now</button>
        <button>Demo Drive</button>
      </div>
    </div>
  );
};

export default ModelX;

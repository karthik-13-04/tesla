import React from 'react';
import './Section.css';
import accessoriesImage from '../image/Model S.avif';
const ModelS = () => {
  return (
    <div className="section" style={{ backgroundImage:`url(${accessoriesImage})` }}>
      <div className="content">
        <h1>Model S</h1>
        <div className="description">
          <h4>From $66,490</h4>
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

export default ModelS;

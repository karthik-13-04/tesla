import React from 'react';
import './Section.css';
import accessoriesImage from '../image/Accessories.avif';

const Accessories = () => {
  return (
    <div className="section" style={{ backgroundImage: `url(${accessoriesImage})` }}>
      <div className="content">
        <h1>Accessories</h1>
      </div>
      <div className="buttons">
        <button>Shop Now</button>
      </div>
    </div>
  );
};

export default Accessories;

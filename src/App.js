import React from 'react';
import Navbar from './components/Navbar';
import Model3 from './components/Model3';
import ModelX from './components/ModelX';
import ModelS from './components/ModelS';
import SolarPanels from './components/SolarPanels';
import SolarRoof from './components/SolarRoof';
import Powerwall from './components/Powerwall';
import Accessories from './components/Accessories';
import Footer from './components/Footer';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Model3 />
      <Powerwall />
      <Accessories />
      <ModelX />
      <ModelS />
      <SolarPanels />
      <SolarRoof />
      <Footer />
    </div>
  );
};

export default App;

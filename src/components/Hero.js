import React from 'react';
import '../css-styles/Hero.scss';
import ImageIllus from '../images/inventeur.png';
import StarAnimation from './Animation/StarAnimation';
import CloudAnimation from './Animation/CloudAnimation';
import SunAnimation from './Animation/SunAnimation';
import LeafAnimation from './Animation/LeafAnimation';
import MoonAnimation from './Animation/MoonAnimation';
import DigitalClock from './Animation/DigitalClock';
import { useColorContext } from '../components/ColorContext';
import PlaneMotion from './Animation/PlaneMotion';
import BoutonAmbiance from './BoutonAmbiance';
import '../css-styles/BoutonAmbiance.scss';

const Hero = () => {
  const { colorOptions, currentColorIndex, setCurrentColorIndex } = useColorContext();
  const currentColorOption = colorOptions[currentColorIndex];

  const handleButtonClick = () => {
    const newColorIndex = (currentColorIndex + 1) % colorOptions.length;
    setCurrentColorIndex(newColorIndex);
  };

  

  return (
    <section id="accueil" className="hero-wrapper" style={{ backgroundColor: currentColorOption.background }}>
      <div className="hero-title">
        <p className='hero-text' style={{ color: currentColorOption.text }}>
          Salut, moi c'est Bryan 
        </p>
        <div className='hero-all-title'>
          <div className='title-first'> 
            <h1 style={{ color: currentColorOption.title }}>Developer Web</h1>
            <p style={{ color: currentColorOption.text }}>&</p>
          </div>
          <h1 style={{ color: currentColorOption.title }}>Graphic Designer</h1>
        </div>
        <div>
        <BoutonAmbiance onClick={handleButtonClick} />
        </div>
        <DigitalClock colorOption={currentColorOption} />  
      </div>
      <div className='background-illustration'>
        <img src={ImageIllus} className='illustration' />
      </div>
      {currentColorOption.isNight && <StarAnimation />}
      {currentColorOption.isNight && <MoonAnimation />}
      {currentColorOption.isDay && <CloudAnimation />}
      {currentColorOption.isDay && <SunAnimation />}
      {currentColorOption.isDay && <PlaneMotion />}

    </section>
  );
}

export default Hero;
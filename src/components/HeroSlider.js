import React, { useState } from 'react';
import prevImage from '../images/prev.png';
import nextImage from '../images/next.png';
import '../css-styles/Slider.scss';

const HeroSlider = ({ pictures }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!pictures || pictures.length === 0) {
    return null;
  }

  const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % pictures.length);
  }

  const handlePrev = () => {
    setCurrentIndex((currentIndex - 1 + pictures.length) % pictures.length);
  }

  return (
    <div className="hero-slider">
      {pictures.length > 0 && (
        <div className="slider-image-container">
          <img className="slider-image" src={pictures[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
          <p className="compteur-frame">{currentIndex + 1}/{pictures.length}</p>
        </div>
      )}
      <button className="previous-slider" onClick={handlePrev}><img className="previous-img" src={prevImage} alt="Previous image" /></button>
      <button className="next-slider" onClick={handleNext}><img className="next-img" src={nextImage} alt="Next image" /></button>
    </div>
  );
}

export default HeroSlider;

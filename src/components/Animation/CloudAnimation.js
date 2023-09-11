import React from 'react';
import '../../css-styles/CloudAnimation.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloud } from '@fortawesome/free-solid-svg-icons';
import { faSun } from '@fortawesome/free-solid-svg-icons';

const CloudAnimation = () => {
  const randomPosition = () => {
    const x = Math.random() * 100;
    const y = Math.random() * 70;
    return { left: `${x}%`, top: `${y}%` };
  };

  const randomSize = () => {
    const size = Math.random() * 4 + 1; // Tailles aléatoires entre 1 et 3
    return { fontSize: `${size}em` };
  };

  const randomScaleX = () => {
    const scaleX = 1+ Math.random() * 1.4; // Valeur aléatoire entre 0 et 2
    return { transform: `scaleX(${scaleX})` };
  };

  const randomAnimationDelay = () => {
    return `${Math.random() * 5 + 1}s`;
  };

  return (
    <div className="cloud-container">
      <div className="cloud" style={{ ...randomPosition(), ...randomSize(), animationDelay: '0s' }}>
      <div className="cloud-icon-container" style={{ ...randomScaleX() }}>
          <FontAwesomeIcon icon={faCloud} className="cloud-icon" />
        </div>
      </div>
      <div className="cloud" style={{ ...randomPosition(), ...randomSize(), animationDelay: '0s' }}>
      <div className="cloud-icon-container" style={{ ...randomScaleX() }}>
          <FontAwesomeIcon icon={faCloud} className="cloud-icon" />
        </div>
      </div>
      <div className="cloud" style={{ ...randomPosition(), ...randomSize(),  animationDelay: '0s' }}>
      <div className="cloud-icon-container" >
          <FontAwesomeIcon icon={faCloud} className="cloud-icon" />
        </div>
      </div>
      <div className="cloud" style={{ ...randomPosition(), ...randomSize(),  animationDelay: '0s' }}>
      <div className="cloud-icon-container" style={{ ...randomScaleX() }}>
          <FontAwesomeIcon icon={faCloud} className="cloud-icon" />
        </div>
      </div>
    </div>

    
  );
};

export default CloudAnimation;


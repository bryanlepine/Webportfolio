import React from 'react';
import '../../css-styles/StarAnimation.scss'; // Assurez-vous d'avoir les styles CSS nécessaires
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const StarAnimation = () => {

    
        const randomPosition = () => {
          const x = Math.random() * 100; // Valeurs aléatoires entre 0 et 100
          const y = Math.random() * 100;
          return { left: `${x}%`, top: `${y}%` };
        };

    

        const randomAnimationDelay = () => {
            return `${Math.random() * 5 + 1}s`; // Délais aléatoires entre 1s et 6s
          };

  return (
    <div className="star-container">
      <div className="star" style={{ ...randomPosition(), animationDelay: randomAnimationDelay() }}><FontAwesomeIcon icon={faStar} className="star-icon"/></div>
      <div className="star" style={{ ...randomPosition(), animationDelay: randomAnimationDelay() }}><FontAwesomeIcon icon={faStar} className="star-icon"/></div>
      <div className="star" style={{ ...randomPosition(), animationDelay: randomAnimationDelay() }}><FontAwesomeIcon icon={faStar} className="star-icon"/></div>
      <div className="star" style={{ ...randomPosition(), animationDelay: randomAnimationDelay() }}><FontAwesomeIcon icon={faStar} className="star-icon"/></div>
      <div className="star" style={{ ...randomPosition(), animationDelay: randomAnimationDelay() }}><FontAwesomeIcon icon={faStar} className="star-icon"/></div>
      <div className="star" style={{ ...randomPosition(), animationDelay: randomAnimationDelay() }}><FontAwesomeIcon icon={faStar} className="star-icon"/></div>
      <div className="star" style={{ ...randomPosition(), animationDelay: randomAnimationDelay() }}><FontAwesomeIcon icon={faStar} className="star-icon"/></div>
      <div className="star" style={{ ...randomPosition(), animationDelay: randomAnimationDelay() }}><FontAwesomeIcon icon={faStar} className="star-icon"/></div>
      <div className="star" style={{ ...randomPosition(), animationDelay: randomAnimationDelay() }}><FontAwesomeIcon icon={faStar} className="star-icon"/></div>
      <div className="star" style={{ ...randomPosition(), animationDelay: randomAnimationDelay() }}><FontAwesomeIcon icon={faStar} className="star-icon"/></div>
      <div className="star" style={{ ...randomPosition(), animationDelay: randomAnimationDelay() }}><FontAwesomeIcon icon={faStar} className="star-icon"/></div>
      <div className="star" style={{ ...randomPosition(), animationDelay: randomAnimationDelay() }}><FontAwesomeIcon icon={faStar} className="star-icon"/></div>
      <div className="star" style={{ ...randomPosition(), animationDelay: randomAnimationDelay() }}><FontAwesomeIcon icon={faStar} className="star-icon"/></div>
      <div className="star" style={{ ...randomPosition(), animationDelay: randomAnimationDelay() }}><FontAwesomeIcon icon={faStar} className="star-icon"/></div>
      <div className="star" style={{ ...randomPosition(), animationDelay: randomAnimationDelay() }}><FontAwesomeIcon icon={faStar} className="star-icon"/></div>
      <div className="star" style={{ ...randomPosition(), animationDelay: randomAnimationDelay() }}><FontAwesomeIcon icon={faStar} className="star-icon"/></div>
      <div className="star" style={{ ...randomPosition(), animationDelay: randomAnimationDelay() }}><FontAwesomeIcon icon={faStar} className="star-icon"/></div>
      <div className="star" style={{ ...randomPosition(), animationDelay: randomAnimationDelay() }}><FontAwesomeIcon icon={faStar} className="star-icon"/></div>
      <div className="star" style={{ ...randomPosition(), animationDelay: randomAnimationDelay() }}><FontAwesomeIcon icon={faStar} className="star-icon"/></div>
      <div className="star" style={{ ...randomPosition(), animationDelay: randomAnimationDelay() }}><FontAwesomeIcon icon={faStar} className="star-icon"/></div>
      <div className="star" style={{ ...randomPosition(), animationDelay: randomAnimationDelay() }}><FontAwesomeIcon icon={faStar} className="star-icon"/></div>
      <div className="star" style={{ ...randomPosition(), animationDelay: randomAnimationDelay() }}><FontAwesomeIcon icon={faStar} className="star-icon"/></div>
      <div className="star" style={{ ...randomPosition(), animationDelay: randomAnimationDelay() }}><FontAwesomeIcon icon={faStar} className="star-icon"/></div>
      <div className="star" style={{ ...randomPosition(), animationDelay: randomAnimationDelay() }}><FontAwesomeIcon icon={faStar} className="star-icon"/></div>

      <div className="star star-falling" style={{... randomPosition(), animationDelay: randomAnimationDelay() }}>
        <FontAwesomeIcon icon={faStar} className="star-icon2" />
      </div>
      <div className="star star-falling" style={{ ... randomPosition(), animationDelay: randomAnimationDelay() }}>
        <FontAwesomeIcon icon={faStar} className="star-icon2" />
      </div>
      <div className="star star-falling" style={{... randomPosition(), animationDelay: randomAnimationDelay() }}>
        <FontAwesomeIcon icon={faStar} className="star-icon2" />
      </div>
      <div className="star star-falling" style={{ ... randomPosition(), animationDelay: randomAnimationDelay() }}>
        <FontAwesomeIcon icon={faStar} className="star-icon2" />
      </div>
      <div className="star star-falling" style={{... randomPosition(), animationDelay: randomAnimationDelay() }}>
        <FontAwesomeIcon icon={faStar} className="star-icon2" />
      </div>
    </div>
  );
};

export default StarAnimation;
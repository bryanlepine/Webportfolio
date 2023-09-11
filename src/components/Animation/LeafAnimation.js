import React from 'react';
import '../../css-styles/LeafAnimation.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLeaf } from '@fortawesome/free-solid-svg-icons';

const LeafAnimation = () => {

    const randomPosition = () => {
        const x = Math.random() * 100;
        const y = 40 + Math.random() * 70;
        return { left: `${x}%`, top: `${y}%` };
      };
      const randomControlPoints = () => {
        const cp1y = Math.random() * 10 - 5; // Valeurs aléatoires entre -5 et 5
        const cp2y = Math.random() * 10 - 5; // Valeurs aléatoires entre -5 et 5
        return `cubic-bezier(0.5, ${cp1y / 100}, 0.5, ${cp2y / 100})`;
    };

  return (
    <div className="leaf-animation">
    <div className="leaf" style={{ ...randomPosition(), animationTimingFunction: randomControlPoints() }}>
        <FontAwesomeIcon icon={faLeaf} />
    </div>
    <div className="leaf" style={{ ...randomPosition(), animationTimingFunction: randomControlPoints() }}>
        <FontAwesomeIcon icon={faLeaf} />
    </div>
    <div className="leaf" style={{ ...randomPosition(), animationTimingFunction: randomControlPoints() }}>
        <FontAwesomeIcon icon={faLeaf} />
    </div>
    <div className="leaf" style={{ ...randomPosition(), animationTimingFunction: randomControlPoints() }}>
        <FontAwesomeIcon icon={faLeaf} />
    </div>
    <div className="leaf" style={{ ...randomPosition(), animationTimingFunction: randomControlPoints() }}>
        <FontAwesomeIcon icon={faLeaf} />
    </div>
</div>
  );
};

export default LeafAnimation;
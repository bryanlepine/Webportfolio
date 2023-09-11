import React from 'react';
import '../css-styles/Cube.scss'; // Importez le fichier CSS

const Cube = () => {
  return (
    <div className="cube clicked">
      <div className="cube-inner">
        <div className="cube-face cube-front"></div>
        <div className="cube-face cube-back"></div>
        <div className="cube-face cube-right"></div>
        <div className="cube-face cube-left"></div>
        <div className="cube-face cube-top"></div>
        <div className="cube-face cube-bottom"></div>
      </div>
    </div>
  );
};

export default Cube;
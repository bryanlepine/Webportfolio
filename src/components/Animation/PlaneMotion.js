import React from 'react';
import '../../css-styles/PlaneAnimation.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlane } from '@fortawesome/free-solid-svg-icons';

const PlaneMotion = () => {

  return (
    <div className="plane-container">
      <div className="plane-flying">
        <FontAwesomeIcon icon={faPlane} className="plane-icon" />
        <div className="plane-trail"></div> {/* Traînée d'avion */}
      </div>
    </div>
  );
};

export default PlaneMotion;
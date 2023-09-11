import React from 'react';
import '../../css-styles/SunAnimation.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun } from '@fortawesome/free-solid-svg-icons';

const SunAnimation = () => {
 



  return ( 

        <div className="sun-container">
            <FontAwesomeIcon icon={faSun} className='sun-icon'/>
        </div>
        
    
  );
};

export default SunAnimation;
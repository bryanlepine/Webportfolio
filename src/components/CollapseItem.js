import React, { useState } from 'react';
import arrow from '../images/arrow.svg';

const CollapseItem = ({ title, isExpanded, toggleExpanded, children }) => {
  return (
    <div className='wrapper-description-button'>
      <button className='button-description-apropos' onClick={toggleExpanded}>
        <h3 className='description-title'>{title}</h3>
        <img src={arrow} alt="arrow" className={`arrow ${isExpanded ? 'rotate180' : 'rotateReverse'}`} />
      </button>
      <div className={`description-about ${isExpanded ? 'active' : ''}`}>
        {children}
      </div>
    </div>
  );
};

export default CollapseItem;
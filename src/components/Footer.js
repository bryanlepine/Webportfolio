import React from 'react';

import '../css-styles/Footer.scss';
import { useColorContext } from '../components/ColorContext';

const Footer = () => {

  const { colorOptions, currentColorIndex } = useColorContext(); 
  const currentColorOption = colorOptions[currentColorIndex];

  const footerStyle = {
    backgroundColor: currentColorOption.background, 
    color: currentColorOption.text,
  };

  const titleStyle = {
    color: currentColorOption.title, // Couleur du titre
  };

    return (

      <footer className="footer-reserved" style={footerStyle}>
            
            <h3 className="rights-reserved" style={titleStyle}> Site web développé par : Bryan Lépine </h3>
            <p style={footerStyle}>Illustrations conçus par IA</p>

          </footer>
        
      );
}

export default Footer;
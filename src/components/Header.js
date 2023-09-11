import React, { useState } from 'react';
import logo from '../images/BrYan_.png';
import { useLocation } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import '../css-styles/Header.scss';
import { useColorContext } from '../components/ColorContext';

const Header = () => {
  const location = useLocation();
  const { colorOptions, currentColorIndex } = useColorContext();
  const currentColorOption = colorOptions[currentColorIndex];
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="header">
      <p className='logo-name'>Br<span className='logo-part-name' style={{ color: currentColorOption.text }}>Yan_</span></p>

      {/* Navigation de bureau */}
      <nav className={`nav-bar ${isMobileMenuOpen ? 'hidden' : ''}`}>
      <li><a href="#accueil" style={{ color: currentColorOption.text }}><p className="nav-label">#1</p><p className='nav-label-text'>Accueil</p></a></li>
        <li><a href="#a-propos" style={{ color: currentColorOption.text }}><p className="nav-label">#2</p><p className='nav-label-text'>A propos</p></a></li>
        <li><a href="#competences" style={{ color: currentColorOption.text }}><p className="nav-label">#3</p><p className='nav-label-text'>Compétences</p></a></li>
        <li><a href="#realisations" style={{ color: currentColorOption.text }}><p className="nav-label">#4</p><p className='nav-label-text'>Réalisations</p></a></li>
        <li><a href="#contact" style={{ color: currentColorOption.text }}><p className="nav-label">#5</p><p className='nav-label-text'>Contact</p></a></li>
      </nav>


        <div className='mobile-nav-container'>
{/* Bouton d'icône de burger pour activer le menu mobile */}
      <div className="burger-button" onClick={toggleMobileMenu}>
        <div className={`burger-icon ${isMobileMenuOpen ? 'open' : ''}`}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </div>

      {/* Navigation mobile (menu burger) */}
      <nav className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
        <ul>
          <li><a href="#accueil" style={{ color: currentColorOption.text }}>Accueil</a></li>
          <li><a href="#a-propos" style={{ color: currentColorOption.text }}>A propos</a></li>
          <li><a href="#competences" style={{ color: currentColorOption.text }}>Compétences</a></li>
          <li><a href="#realisations" style={{ color: currentColorOption.text }}>Réalisations</a></li>
          <li><a href="#contact" style={{ color: currentColorOption.text }}>Contact</a></li>
        </ul>
      </nav>
        </div>
      
    </header>
  );
}

export default Header;


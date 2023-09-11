import React, { useState } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import AboutInfo from '../components/AboutInfo';
import '../css-styles/About.scss';


const Apropos = () => {
  return (
    <div className='about-wrapper'>
      <div className='about'>
        <Header />
        <Hero />
        <AboutInfo/>
      </div>
      <Footer />
    </div>
   
  );
}

export default Apropos;
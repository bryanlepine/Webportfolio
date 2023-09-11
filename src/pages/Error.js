import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../css-styles/Error.scss';
import { Link } from 'react-router-dom';

const Error = () => {

  return (
    <div className='Error'>
      <div className='ErrorWrapper'>
      <Header />
      <div className='wrapper-error-elements'>
        <h2>404</h2>
      <p>Oups! La page que vous demandez n'existe pas.</p>
      <Link to="/">Retourner sur la page d'accueil</Link>
      </div>
      
    </div>
    <Footer />
    </div>
    
  );
}

export default Error;
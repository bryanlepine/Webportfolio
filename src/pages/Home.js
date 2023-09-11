import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import Apropos from "../components/Apropos";
import Competences from "../components/Competences";

import '../css-styles/Home.scss';
import '../css-styles/Main.scss';
import '../css-styles/Responsive.scss';
import Realisations from "../components/Realisations";
import Contacts from "../components/Contacts";
import { ColorProvider } from '../components/ColorContext';


function Home() {


  return (
    
    <ColorProvider>
      <div className="Home">
        <div className="HomeWrapper">
          <Header />
          <Hero id='accueil'/>
          <Apropos id="a-propos"/>
          <Competences id="competences"/>
          <Realisations id="realisations" />
          <Contacts id="contact" />
        </div>
        <Footer />
      </div>
    </ColorProvider>
  
    
  );
}

export default Home;
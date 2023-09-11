import '../css-styles/Competences.scss';
import MapImageDev from '../images/carte-puce-electronique-gauche.png';
import MapImageGraph from '../images/carte-puce-electronique-droite.png';

import HtmlImage from '../images/html.png';
import CssImage from '../images/css.png';
import JsImage from '../images/js.png';
import NodeJsImage from '../images/nodejs.png';
import ReactImage from '../images/react.png';

import ilustratorImage from '../images/adobe-Illustrator-logo-5.png';
import premiereImage from '../images/premiere-adobe.png';
import photoshopImage from '../images/Adobe_Photoshop_CC_icon.png';
import indesignImage from '../images/Adobe_InDesign_logo_PNG1.png';
import aeffectImage from '../images/Adobe_After_Effects_CC_icon.png';

import { useColorContext } from '../components/ColorContext';


function Competences() {

  const { colorOptions, currentColorIndex } = useColorContext(); 
  const currentColorOption = colorOptions[currentColorIndex];

  return (
    <div id="competences" className='competences-container'>
      <h2 className="title-Contacts" style={{ color: currentColorOption.title }}>Compétences</h2>
      <div className="allmap-container">
      
        <div className='map-container-dev'>
           <h3>Développeur</h3>
           <div className='image-container'>
            <img className='map-image' src={MapImageDev} alt='carte-puces-electroniques' />
              <div className='map-container-button'>
                <button className='show-html-button'>
                  <img src={HtmlImage} alt='html' />
                </button>
            <button className='show-css-button'>
             <img src={CssImage} alt='html' />
            </button>
        <button className='show-js-button'>
          <img src={JsImage} alt='html' />
        </button>
        <button className='show-node-button'>
          <img src={NodeJsImage} alt='html' />
        </button>
        <button className='show-react-button'>
          <img src={ReactImage} alt='html' />
        </button>
           </div>
           </div>
        </div>

        <div className='map-container-dev'>
           <h3>Graphiste</h3>
           <div className='image-container'>
            <img className='map-image' src={MapImageGraph} alt='carte-puces-electroniques' />
              <div className='map-container-button'>
                <button className='show-html-button'>
                  <img src={ilustratorImage} alt='html' />
                </button>
            <button className='show-css-button'>
             <img src={indesignImage} alt='html' />
            </button>
        <button className='show-js-button'>
          <img src={photoshopImage} alt='html' />
        </button>
        <button className='show-node-button'>
          <img src={premiereImage} alt='html' />
        </button>
        <button className='show-react-button'>
          <img src={aeffectImage } alt='html' />
        </button>
           </div>
           </div>
        </div>
        </div>
    </div>
    
        
  );
}

export default Competences;
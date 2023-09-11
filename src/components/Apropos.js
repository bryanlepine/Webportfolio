import React from "react";
import '../css-styles/Apropos.scss';
import ProfilImage from '../images/profil photo yellow.png';
import { useColorContext } from '../components/ColorContext';


function Apropos() {

  const { colorOptions, currentColorIndex } = useColorContext(); 
  const currentColorOption = colorOptions[currentColorIndex];

  return (
    <section id="a-propos" className="container-apropos">
        <div >
            <h2 className="title-apropos" style={{ color: currentColorOption.title }}>À propos</h2>
        </div>
        <div className="bio-container">
<img className="profil-photo" src={ProfilImage} />

<div className="bio-text" >
  <form> 
    
      <div className="first-container">
        <div className="form-group">
          <label>Nom Prénom :</label>
          <input type="text" value="Lépine Bryan" readOnly onMouseDown={(e) => e.preventDefault()} />
        </div>

        <div className="form-group">
          <label>Expérience :</label>
          <input type="text" value="junior" readOnly onMouseDown={(e) => e.preventDefault()} />
        </div>
      </div>
      
      

         <div className="form-group">
          <label>Style :</label>
          <input
            type="text"
            value="Graphiste & Développeur"
            readOnly
            onMouseDown={(e) => e.preventDefault()}
          />
       
       
    </div>
    <div className="form-group">
      <label>Hard skills :</label>
      <input type="text" value="Conception Web, Front-end et Back-end" readOnly onMouseDown={(e) => e.preventDefault()} />
    </div>

    <div className="form-group">
      <label>Languages:</label>
      <input type="text" value="HTML, CSS, JavaScript, React" readOnly onMouseDown={(e) => e.preventDefault()} />
    </div>

    <div className="form-group">
      <label>soft skills :</label>
      <input type="text" value="Créativité, Innovation, Résolution de problèmes" readOnly onMouseDown={(e) => e.preventDefault()} />
    </div>

   
  </form>
</div>
        </div>
        
        </section>
        
  );
}

export default Apropos;
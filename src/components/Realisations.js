import React, { useState } from 'react';
import '../css-styles/Realisations.scss';
import ScreenImage from '../images/Screen-Pc.png';
import data from '../portfolio.json';
import BarCharge from './BarCharge';
import Modal from './Modal'; 
import { useColorContext } from '../components/ColorContext';

function Realisations() {

  //color options
  const { colorOptions, currentColorIndex } = useColorContext(); 
  const currentColorOption = colorOptions[currentColorIndex];

  const [selectedProjectIndex, setSelectedProjectIndex] = useState(null);
  const [isBarChargeVisible, setIsBarChargeVisible] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false); // état de la modal
  const [projectInModal, setProjectInModal] = useState(null); // état du projet à afficher dans la modal

  const projectTitles = data.map(item => item.title);
  const projectImages = data.map(item => item.imageUrl);
  const projectCoverImages = data.map(item => item.coverImageUrl);

  const [hoveredProjectIndex, setHoveredProjectIndex] = useState(null);

  const handleProjectClick = index => {
    setSelectedProjectIndex(index);
    setIsBarChargeVisible(false); // Cacher BarCharge lors du clic
    setProjectInModal(data[index]); // Définir projet à afficher dans la modal
    setIsModalOpen(true); // Ouvrir la modal
  };

  const handleProjectMouseEnter = index => {
    setHoveredProjectIndex(index);
  };

  const handleProjectMouseLeave = () => {
    setHoveredProjectIndex(null);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false); // Fermer la modal
  };

  return (
    <div id="realisations" className="container-realisation">
      <div>
        <h2 className="title-realisation" style={{ color: currentColorOption.title }}>Réalisations</h2>
      </div>
      <div className="all-real-container">
        <div className="screen-real-container">
          {isBarChargeVisible && <BarCharge />}
          <img className="screen-pc" src={ScreenImage} alt="Écran PC" />
          {selectedProjectIndex !== null && (
            <img
              className="view-real"
              src={`${process.env.PUBLIC_URL}${projectImages[selectedProjectIndex]}`}
              alt={`Projet ${projectTitles[selectedProjectIndex]}`}
            />
          )}
        </div>
        <div className="project-container">
          {projectTitles.map((title, index) => (
            <div
              key={index}
              className={`project-image-container ${
                hoveredProjectIndex === index ? 'hovered' : ''
              }`}
              onMouseEnter={() => handleProjectMouseEnter(index)}
              onMouseLeave={handleProjectMouseLeave}
              onClick={() => handleProjectClick(index)} 
            >
              <div className="project-image-overlay">
              <div className="project-text">
                  <h3>{title}</h3>
                  <button onClick={() => handleProjectClick(index)}>Voir plus</button>
                </div>
              </div>
              <img
                className="project-image"
                src={`${process.env.PUBLIC_URL}${projectCoverImages[index]}`}
                alt={`Projet ${title}`}
              />
            </div>
          ))}
        </div>
      </div>
      {/* Afficher la modal */}
      <Modal isOpen={isModalOpen} onClose={handleCloseModal} project={projectInModal} />
    </div>
  );
}

export default Realisations;
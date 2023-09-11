import React from 'react';
import '../css-styles/Modal.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons'; 

function Modal({ isOpen, onClose, project }) {
  // Vérifiez si la modal est ouverte
  if (!isOpen) {
    return null;
  }

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-button" onClick={onClose}> 
          <FontAwesomeIcon icon={faTimes} />
        </button>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className="techno-container">
          {project.techno.map((tech, index) => (
            <span key={index} className="techno-item">
              {tech}
            </span>
          ))}
        </div>
        <a href={project.link} target="_blank" rel="noopener noreferrer">Voir le projet</a>
      </div>
    </div>
  );
}

export default Modal;
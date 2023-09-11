import React, { useState, useEffect } from 'react';
import '../css-styles/BarCharge.scss'; // Importez le fichier CSS

function BarCharge() {
  const [progress, setProgress] = useState(0);
  const [loadingComplete, setLoadingComplete] = useState(false);

  

  useEffect(() => {
    const timer = setInterval(() => {
      if (progress < 100) {
        setProgress(progress + 1);
      } else {
        clearInterval(timer);
        setLoadingComplete(true); // Définir l'état de chargement complet à true
      }
    }, 20);

    return () => {
      clearInterval(timer);
    };
  }, [progress]);

  const barreStyle = {
    width: `${progress}%`,
    backgroundColor: 'blue', // Couleur de la barre de chargement
  };

  return (
    <div className="bar-progress-charge-container">
          <div className="progress-text">{`${progress}%`}</div>
          <div className="bar-charge-container">
            <div className="bar-charge" style={barreStyle}></div>
          </div>
    </div>
  );
}

export default BarCharge;
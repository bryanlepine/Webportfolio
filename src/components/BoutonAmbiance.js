import React, { useEffect, useState } from 'react';

const BoutonAmbiance = ({ onClick }) => {
  const [randomColor, setRandomColor] = useState('#000');

  // Tableau de couleurs disponibles
  const colors = ['#4F95DA', '#FF5733', '#34D399', '#9F37AA'];

  // Fonction pour générer une couleur aléatoire parmi celles disponibles
  const getRandomColor = () => {
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  };

  const animateButton = (e) => {
    // Générer une nouvelle couleur aléatoire lorsque le bouton est cliqué
    const newColor = getRandomColor();
    setRandomColor(newColor);

    if (onClick) {
      onClick();
    }
  };

  useEffect(() => {
    // Générer une couleur aléatoire lors du chargement initial
    setRandomColor(getRandomColor());

    // Déclencher l'animation "scale" toutes les 5 secondes
    const interval = setInterval(() => {
      // Ajoutez une classe "scale" pour activer l'animation
      document.querySelector('.button-ambiance').classList.add('scale');

      // Supprimez la classe "scale" après un certain délai (par exemple, 0,5 seconde)
      setTimeout(() => {
        document.querySelector('.button-ambiance').classList.remove('scale');
      }, 500);
    }, 5000);

    // Nettoyez l'intervalle lorsque le composant est démonté
    return () => clearInterval(interval);
  }, []);

  return (
    <button
      className='button-ambiance'
      onClick={animateButton}
      style={{ backgroundColor: randomColor }}
    >
      <span>Ambiance</span>
    </button>
  );
};

export default BoutonAmbiance;
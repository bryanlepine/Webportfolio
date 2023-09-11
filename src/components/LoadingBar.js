import React, { useState, useEffect, useRef } from 'react';
import '../css-styles/LoadingBar.scss';

function LoadingBar() {
  const [loadingComplete, setLoadingComplete] = useState(false);
  const [progress, setProgress] = useState(0); // État pour suivre la progression
  const loadingBarRef = useRef(null);

  useEffect(() => {
    const loadingBarAnimation = setInterval(() => {
      if (progress < 100) {
        setProgress(progress + 1); // Augmenter la progression en pourcentage
      } else {
        clearInterval(loadingBarAnimation);
        setLoadingComplete(true);
      }
    }, 20);

    return () => clearInterval(loadingBarAnimation);
  }, [progress]);

  return (
    <div className="loading-container" ref={loadingBarRef}>
      <div className={`loading-bar ${loadingComplete ? 'complete' : ''}`} style={{ width: `${progress}%` }}></div>
      {loadingComplete ? (
        <button>Choisissez un projet</button>
      ) : (
        <p>Loading: {progress}%</p> // Afficher le pourcentage de chargement
      )}
    </div>
  );
}

export default LoadingBar;
import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

const WaveAnimation = () => {
  const canvasRef = useRef();

  useEffect(() => {
    // Créer la scène
    const scene = new THREE.Scene();
    scene.background = null; // Fond transparent

    // Créer la caméra
    const camera = new THREE.PerspectiveCamera(
      50,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 5;
    camera.position.y = 3;

    // Créer le rendu
    const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current, alpha: true }); // Utiliser alpha:true pour le fond transparent
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0); // Définir la couleur d'arrière-plan et la transparence

    // Créer un groupe pour les particules
    const particleGroup = new THREE.Group();
    scene.add(particleGroup);

    // Créer le matériel des particules (bleu)
    const particleMaterial = new THREE.PointsMaterial({
        color:  0xff0000 , // Changez la couleur en rouge si le cube est cliqué, sinon en bleu
        size: 0.03,
    });

    // Créer la géométrie des particules
    const particleGeometry = new THREE.BufferGeometry();

    const particleCount = 10000;
    const positions = [];
    const initialPositions = []; // Tableau pour stocker les positions initiales

    for (let i = 0; i < particleCount; i++) {
      const x = (Math.random() - 0.5) * 20;
      const y = (Math.random() - 0.5) * 1;
      const z = (Math.random() - 0.5) * 10;

      positions.push(x, y, z);
      initialPositions.push(x, y, z); // Stocker les positions initiales
    }

    particleGeometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
    particleGeometry.setAttribute('initialPosition', new THREE.Float32BufferAttribute(initialPositions, 3)); // Créer l'attribut pour les positions initiales

    // Créer les particules
    const particles = new THREE.Points(particleGeometry, particleMaterial);
    particleGroup.add(particles);

    // Animation loop
    const animate = () => {
      const time = performance.now() * 0.0015;

      const positions = particleGeometry.attributes.position.array;
      const initialPositions = particleGeometry.attributes.initialPosition.array; // Utiliser les positions initiales

      for (let i = 0; i < positions.length; i += 3) {
        const x = initialPositions[i]; // Utiliser la position initiale en x
        const y = initialPositions[i + 1]; // Utiliser la position initiale en y
        const z = positions[i + 2];

        // Utiliser une fonction sinus pour faire monter et descendre la vague sur les axes x et y
        positions[i] = x + Math.sin(y + time) * 0.2; // Modifiez les valeurs ici pour ajuster l'effet de la vague
        positions[i + 1] = y + Math.sin(x + time) * 0.4; // Modifiez les valeurs ici pour ajuster l'effet de la vague
        positions[i + 2] = z;
      }

      particleGeometry.attributes.position.needsUpdate = true;

      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };

    animate();
  }, []);

  return <canvas ref={canvasRef} />;
};

export default WaveAnimation;
import React, { useState, useEffect } from 'react';
import '../../css-styles/DigitalClock.scss'

const DigitalClock = ({ colorOption }) => {

  const [heure, setHeure] = useState('');
  const [date, setDate] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      const maintenant = new Date();

      const optionsHeure = { hour: '2-digit', minute: '2-digit', second: '2-digit' };
      const heureFormattee = maintenant.toLocaleTimeString('fr-FR', optionsHeure);

      const optionsDate = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
      const dateFormattee = maintenant.toLocaleDateString('fr-FR', optionsDate);

      setHeure(heureFormattee);
      setDate(dateFormattee);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className='horloge-container'>
      <div>
      <p className='horloge-texte' style={{ color: colorOption.title }}>{heure}</p>
      </div>
      <div>
        <p style={{ color: colorOption.title }}>{date}</p>
      </div>
    </div>
  );
};

export default DigitalClock;
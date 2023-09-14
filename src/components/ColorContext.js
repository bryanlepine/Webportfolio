import React, { createContext, useContext, useState } from 'react';

const ColorContext = createContext();

export const useColorContext = () => useContext(ColorContext);

export const ColorProvider = ({ children }) => {
  const colorOptions = [
    { title: '#FF5733', text: '#1F618D', background: '#FFDAB9', isDay: true, isNight: false },
    { title: '#638eb8', text: '#ECF0F1', background: '#2C3E50', isDay: false, isNight: true },
    { title: '#F1948A', text: '#884EA0', background: '#F9E79F', isDay: true, isNight: false },
  ];

  const [currentColorIndex, setCurrentColorIndex] = useState(0);

  return (
    <ColorContext.Provider value={{ colorOptions, currentColorIndex, setCurrentColorIndex }}>
      {children}
    </ColorContext.Provider>
  );
};
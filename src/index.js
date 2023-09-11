import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes, Navigate} from 'react-router-dom';
import './css-styles/index.css';
import Home from './pages/Home'
import Error from './pages/Error';
import Apropos from './components/Apropos';
import Competences from './components/Competences';
import Realisations from './components/Realisations';
import Contacts from './components/Contacts';


createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
      <Route path="/webportfolio" element={<Home />} />
      <Route path="/webportfolio/a-propos" element={<Apropos />} />
      <Route path="/webportfolio/competences" element={<Competences />} />
      <Route path="/webportfolio/realisations" element={<Realisations />} />
      <Route path="/webportfolio/contact" element={<Contacts />} />
      </Routes>
    </Router>
  </React.StrictMode>
);

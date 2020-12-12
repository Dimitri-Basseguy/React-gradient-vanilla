// == Import npm
import React from 'react';
import { useSelector } from 'react-redux';

// == Composant
const NbColors = () => {
  // utilisatio, du hook useSelector de react-redux pour sélectionner une infos dans le state
  const nbColors = useSelector((state) => state.nbColors);
  return (
    <div id="nbColors">
      {nbColors} couleur(s) générée(s)
    </div>
  );
};

// == Export
export default NbColors;

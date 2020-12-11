// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import

// == Composant
const NbColors = ({ nbColors }) => (
  <div id="nbColors">
    {nbColors} couleur(s) générée(s)
  </div>
);

// PropType
NbColors.propTypes = {
  nbColors: PropTypes.number.isRequired,
};

// == Export
export default NbColors;

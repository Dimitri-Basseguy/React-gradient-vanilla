// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Composant
const NbColors = ({ nbColors }) => {

  return (
    <div id="nbColors">
      {nbColors} couleur(s) générée(s)
    </div>
  );
};

NbColors.propTypes = {
  nbColors: PropTypes.number.isRequired,
};

// == Export
export default NbColors;

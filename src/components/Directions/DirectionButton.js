// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Composant
const Directions = ({ randomInt, label, updateDirection }) => (
  <button
    className="btn"
    type="button"
    id="toLeft"
    onClick={updateDirection}
  >
    <span className="btn__content">{label}</span>
    <span className="btn__glitch" />
    <span className="btn__label">r{randomInt}</span>
  </button>
);

Directions.propTypes = {
  label: PropTypes.string.isRequired,
  // attend un argument qui correspond à la direction
  updateDirection: PropTypes.func.isRequired,
  randomInt: PropTypes.string.isRequired,
};

// == Export
export default Directions;

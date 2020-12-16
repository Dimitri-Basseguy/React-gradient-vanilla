// == Import npm
import PropTypes from 'prop-types';
import React from 'react';
import { useDispatch } from 'react-redux';
import {
  changeDirection,
} from 'src/actions/gradient';
// == Import

// == Composant
const Directions = ({ direction, label }) => {
  const dispatch = useDispatch();

  return (
    <button
      className="btn"
      type="button"
      id="toLeft"
      onClick={() => {
        dispatch(changeDirection(direction));
      }}
    >
      <span className="btn__content">{label}</span>
      <span className="btn__glitch" />
      <span className="btn__label">r69</span>
    </button >
  );
};

Directions.propTypes = {
  direction: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

// == Export
export default Directions;

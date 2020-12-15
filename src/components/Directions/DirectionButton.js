// == Import npm
import PropTypes from "prop-types";
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
      className="button"
      type="button"
      id="toLeft"
      onClick={() => {
        dispatch(changeDirection(direction));
      }}
    >
      {label}
    </button>
  );
};

Directions.propTypes = {
  direction: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

// == Export
export default Directions;

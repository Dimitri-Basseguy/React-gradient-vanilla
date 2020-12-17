// == Import npm
import PropTypes from 'prop-types';
import React from 'react';
// == Import

// == Composant
const Controls = ({ randomColorsFirst, randomColorsLast }) => (
  <div className="parentControl">
    <div className="div1">
      <button
        className="btn"
        id="randFirst"
        type="button"
        onClick={randomColorsFirst}
      >
        <span className="btn__content">Random First</span>
        <span className="btn__glitch" />
        <span className="btn__label">r69</span>
      </button>
    </div>
    <div className="div2">
      <button
        className="btn"
        id="randAll"
        type="button"
        onClick={() => {
          randomColorsFirst();
          randomColorsLast();
        }}
      >
        <span className="btn__content">Random All</span>
        <span className="btn__glitch" />
        <span className="btn__label">r69</span>

      </button>
    </div>
    <div className="div3">
      <button
        className="btn"
        id="randLast"
        type="button"
        onClick={randomColorsLast}
      >
        <span className="btn__content">Random Last</span>
        <span className="btn__glitch" />
        <span className="btn__label">r69</span>
      </button>
    </div>
  </div>
);

Controls.propTypes = {
  randomColorsFirst: PropTypes.func.isRequired,
  randomColorsLast: PropTypes.func.isRequired,
};

// == Export
export default Controls;

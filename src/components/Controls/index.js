// == Import npm
import React from 'react';
import { useDispatch } from 'react-redux';
import {
  randomFirstColor,
  randomLastColor,
} from 'src/actions/gradient';
// == Import

// == Composant
const Controls = () => {
  // useDispatch : hook permettant de recupérer un référence vers la fonction
  // store.dispatch
  const dispatch = useDispatch();

  return (
    <div className="parentControl">
      <div className="div1">
        <button
          className="btn"
          id="randFirst"
          type="button"
          onClick={() => {
            dispatch(randomFirstColor());
          }}
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
            dispatch(randomFirstColor());
            dispatch(randomLastColor());
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
          onClick={() => {
            dispatch(randomLastColor());
          }}
        >
          <span className="btn__content">Random Last</span>
          <span className="btn__glitch" />
          <span className="btn__label">r69</span>
        </button>
      </div>
    </div>
  );
};

// == Export
export default Controls;

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
    <div className="buttons group">
      <button
        className="button"
        id="randFirst"
        type="button"
        onClick={() => {
          dispatch(randomFirstColor());
        }}
      >
        Random First
      </button>
      <button
        className="button"
        id="randAll"
        type="button"
        onClick={() => {
          dispatch(randomFirstColor());
          dispatch(randomLastColor());
        }}
      >
        Random All
      </button>
      <button
        className="button"
        id="randLast"
        type="button"
        onClick={() => {
          dispatch(randomLastColor());
        }}
      >
        Random Last
      </button>
    </div>
  );
};

// == Export
export default Controls;

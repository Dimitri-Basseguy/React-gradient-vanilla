// == Import npm
import React from 'react';

// == Import

// == Composant
const Controls = () => (
  <div className="buttons group">
    <button
      className="button"
      id="randFirst"
      type="button"
    >
      Random First
    </button>
    <button
      className="button"
      id="randAll"
      type="button"
    >
      Random All
    </button>
    <button
      className="button"
      id="randLast"
      type="button"
    >
      Random Last
    </button>
  </div>
);

// == Export
export default Controls;

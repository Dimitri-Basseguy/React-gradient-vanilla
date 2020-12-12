// == Import npm
import React from 'react';
import { useDispatch } from 'react-redux';
import {
  randomFirstColor,
  randomLastColor,
} from 'src/actions/gradient';
// == Import

// == Composant
const Directions = () => (
  <div className="buttons group">
    <button className="button" type="button" id="toLeft">to left</button>
    <button className="button" type="button" id="45">45°</button>
    <button className="button" type="button" id="135">135°</button>
    <button className="button" type="button" id="225">225°</button>
    <button className="button" type="button" id="315">315°</button>
    <button className="button" type="button" id="toRight">to right</button>
  </div>
);

// == Export
export default Directions;

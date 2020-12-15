// == Import npm
import React from 'react';
import { useDispatch } from 'react-redux';
import {
  changeDirection,
} from 'src/actions/gradient';
import DirectionButton from './DirectionButton';
// == Import

// == Composant
const Directions = () => {
  const dispatch = useDispatch();
  return (
    <div className="buttons group">
      <DirectionButton label="To Left" direction="270deg" />
      <DirectionButton label="45°" direction="45deg" />
      <DirectionButton label="135°" direction="135deg" />
      <DirectionButton label="225°" direction="225deg" />
      <DirectionButton label="315°" direction="315deg" />
      <DirectionButton label="To Right" direction="90deg" />
    </div>
  );
};

// == Export
export default Directions;

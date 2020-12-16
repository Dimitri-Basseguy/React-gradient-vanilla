// == Import npm
import React from 'react';
import DirectionButton from './DirectionButton';
// == Import

// == Composant
const Directions = () => {
  const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  };

  return (
    <div className="parent">
      <div className="div1"><DirectionButton label="315°" direction="315deg" /></div>
      <div className="div2"><DirectionButton label="Up" direction="0deg" /></div>
      <div className="div3"><DirectionButton label="45°" direction="45deg" /></div>
      <div className="div4"><DirectionButton label="To Left" direction="90deg" /></div>
      <div className="div5">
        <DirectionButton label="Random" direction={`${getRandomInt(0, 360)}deg`} />
      </div>
      <div className="div6"><DirectionButton label="To Right" direction="90deg" /></div>
      <div className="div7"><DirectionButton label="225°" direction="225deg" /></div>
      <div className="div8"><DirectionButton label="Down" direction="180deg" /></div>
      <div className="div9"><DirectionButton label="135°" direction="135deg" /></div>
    </div>
  );
};

// == Export
export default Directions;

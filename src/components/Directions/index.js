// == Import npm
import React from 'react';

// == Import
import DirectionButton from 'src/containers/Directions/DirectionButton';

// == Composant
const Directions = () => {
  const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  };

  return (
    <div className="parent">
      <div className="div1"><DirectionButton randomInt={getRandomInt(0, 100)} label="315°" direction="315deg" /></div>
      <div className="div2"><DirectionButton randomInt={getRandomInt(0, 100)} label="Up" direction="0deg" /></div>
      <div className="div3"><DirectionButton randomInt={getRandomInt(0, 100)} label="45°" direction="45deg" /></div>
      <div className="div4"><DirectionButton randomInt={getRandomInt(0, 100)} label="To Left" direction="270deg" /></div>
      <div className="div5">
        <DirectionButton randomInt={getRandomInt(0, 100)} label="Random" direction={`${getRandomInt(0, 360)}deg`} />
      </div>
      <div className="div6"><DirectionButton randomInt={getRandomInt(0, 100)} label="To Right" direction="90deg" /></div>
      <div className="div7"><DirectionButton randomInt={getRandomInt(0, 100)} label="225°" direction="225deg" /></div>
      <div className="div8"><DirectionButton randomInt={getRandomInt(0, 100)} label="Down" direction="180deg" /></div>
      <div className="div9"><DirectionButton randomInt={getRandomInt(0, 100)} label="135°" direction="135deg" /></div>
    </div>
  );
};

// == Export
export default Directions;

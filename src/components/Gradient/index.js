/* eslint-disable no-console */
// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

/*
function renderGradient() {
  const { direction, firstColor, lastColor } = store.getState();

  document.getElementById('gradient').style.background = `
    linear-gradient(${direction},${firstColor},${lastColor})
  `;
}

function renderColors() {
  const { direction, firstColor, lastColor } = store.getState();

  const firstSpan = generateSpanColor(firstColor);
  const lastSpan = generateSpanColor(lastColor);

  const result = direction === '90deg'
    ? `${firstSpan} → ${lastSpan}`
    : `${lastSpan} ← ${firstSpan}`;
*/

// on peut fournir du style inline à un composant en fournissant
// un objet qui indique le css à aplliquer
// la syntaxe est différente du CSS
// exemple : textAlign: 'center'

// == Composant
const Gradient = ({ firstColor, lastColor, direction }) => {
  const gradient = `linear-gradient(${direction},${firstColor},${lastColor})`;
  console.log(gradient);
  // const element = document.getElementById('gradient').style.background;
  // const givenCode = document.getElementById('cssStyle').innerText(`background: ${element};`);
  // console.log(element);
  return (
    <>
      <div id="colors">
        <span style={{ color: firstColor }}>{firstColor}</span>
        <span style={{ transform: `rotate( calc(${direction} - 90deg)` }}>→</span>
        <span style={{ color: lastColor }}>{lastColor}</span>
      </div>
      <div id="gradient" style={{ background: gradient }} />
    </>
  );
};

Gradient.propTypes = {
  direction: PropTypes.string.isRequired,
  firstColor: PropTypes.string.isRequired,
  lastColor: PropTypes.string.isRequired,
};

// == Export
export default Gradient;

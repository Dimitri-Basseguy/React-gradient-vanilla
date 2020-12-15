// == Import npm
import React from 'react';
import { useSelector } from 'react-redux';

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
const Gradient = () => {
  const firstColor = useSelector((state) => state.firstColor);
  const lastColor = useSelector((state) => state.lastColor);
  const direction = useSelector((state) => state.direction);
  const gradient = `linear-gradient(${direction},${firstColor},${lastColor})`;
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

// == Export
export default Gradient;

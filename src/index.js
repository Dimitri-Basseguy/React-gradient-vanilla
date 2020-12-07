// == Imports
import store from 'src/store';

import { randomHexColor, generateSpanColor } from './utils';

// == Rendu dans le DOM
function renderNbColors() {
  const { nbColors } = store.getState();

  document.getElementById('nbColors').innerHTML = `
    ${nbColors} couleur(s) générée(s)
  `;
}

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

  document.getElementById('colors').innerHTML = result;
}

// == Initialisation
renderNbColors();
renderGradient();
renderColors();

// Abonement aux changements : chaque fois que quelque chose change dans le state du store,
// on appelle la callback => mise à jour de l'interface
store.subscribe(renderNbColors);
store.subscribe(renderGradient);
store.subscribe(renderColors);

// == Controls
document.getElementById('randAll')
  .addEventListener('click', () => {
    // debug
    // data
    store.dispatch({
      type: 'RANDOM_FIRST_COLOR',
      color: randomHexColor(),
    });

    store.dispatch({
      type: 'RANDOM_LAST_COLOR',
      color: randomHexColor(),
    });
    // ui
    // useless depuis l'abonement au changement ligne 42
    // renderNbColors();
    // renderGradient();
    // renderColors();
  });

document.getElementById('randFirst')
  .addEventListener('click', () => {
    store.dispatch({
      type: 'RANDOM_FIRST_COLOR',
      color: randomHexColor(),
    });
  });

document.getElementById('randLast')
  .addEventListener('click', () => {
    store.dispatch({
      type: 'RANDOM_LAST_COLOR',
      color: randomHexColor(),
    });
  });

document.getElementById('toLeft')
  .addEventListener('click', () => {
    // il faut envoyer l'action au store
    store.dispatch({ type: 'DIRECTION_TO_LEFT' });
  });

document.getElementById('toRight')
  .addEventListener('click', () => {
    store.dispatch({ type: 'DIRECTION_TO_RIGHT' });
  });

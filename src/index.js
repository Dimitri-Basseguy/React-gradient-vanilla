import React from 'react';
import { render } from 'react-dom';
// react-redux : livrairie qui fait lien entre Redux et React
// Provider : composant qui permet d'accéder au store partout dans notre app
import { Provider } from 'react-redux';

import App from 'src/components/App';

import store from 'src/store';

render(
  // JSX à rendre
  <Provider store={store}>
    <App />
  </Provider>,
  // emplacement du rendu dans le DOM
  document.getElementById('root'),
);

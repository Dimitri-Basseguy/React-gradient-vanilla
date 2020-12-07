import { createStore } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';

import reducer from './reducer';

// Store contient notre state, le gère et les protège
// (ne pas risquer de modifier directement les données)
// enhancer est normalement le troisème paramètre de createStore
const store = createStore(reducer, devToolsEnhancer());

export default store;

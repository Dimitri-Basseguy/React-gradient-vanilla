import { createStore } from 'redux';

import reducer from './reducer';

// Store contient notre state, le gère et les protège
// (ne pas risquer de modifier directement les données)
const store = createStore(reducer);

export default store;

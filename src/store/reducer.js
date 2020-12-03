const initialState = {
  firstColor: '#e367a4',
  lastColor: '#48b1f3',
  direction: '90deg',
  nbColors: 0,
};

// reducer : "entonnoir" qui retourne un nouvel état à partir de l'état actuel
// et d'une action appliquée sur le state
// reducer : fonction qui prend en paramètre :
// - l'état actuel
// - l'action à apliquer
// et qui retourne un nouvel état

function reducer(state = initialState, action = {}) {
  // retourne le nouvel état
  return state;
}

export default reducer;

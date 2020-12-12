import {
  RANDOM_FIRST_COLOR,
  RANDOM_LAST_COLOR,
  CHANGE_DIRECTION,
} from 'src/actions/gradient';

const initialState = {
  firstColor: '#e367a4',
  lastColor: '#48b1f3',
  direction: '90deg',
  nbColors: 0,
  nbChanges: 0,
};

// reducer : "entonnoir" qui retourne un nouvel état à partir de l'état actuel
// et d'une action appliquée sur le state
// reducer : fonction qui prend en paramètre :
// - l'état actuel
// - l'action à apliquer
// et qui retourne un nouvel état

function reducer(state = initialState, action = {}) {
  switch (action.type) {
    // je traduis DIRECTION_TO_LEFT
    case CHANGE_DIRECTION:
      // je retourne le nouvel état qui utilise cette action
      // on deverse le state en premier (l'ordre est important)
      // on change direction
      // firstColor: '#e367a4',
      // lastColor: '#48b1f3',
      // direction: '90deg',
      // nbColors: 0,
      // direction: action.direction, ici on ajoute une direction (la dernière est prise en compte)
      return {
        ...state,
        direction: action.direction,
        nbChanges: state.nbChanges + 1,
      };

    case RANDOM_FIRST_COLOR:
      return {
        ...state,
        firstColor: action.color,
        nbColors: state.nbColors + 1,
      };

    case RANDOM_LAST_COLOR:
      return {
        ...state,
        lastColor: action.color,
        nbColors: state.nbColors + 1,
      };

    default: return state;
  }
}

export default reducer;

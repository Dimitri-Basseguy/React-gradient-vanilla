import { randomHexColor, generateSpanColor } from '../utils';

// action types
export const DIRECTION_TO_LEFT = 'DIRECTION_TO_LEFT';
export const DIRECTION_TO_RIGHT = 'DIRECTION_TO_RIGHT';
export const RANDOM_LAST_COLOR = 'RANDOM_LAST_COLOR';
export const RANDOM_FIRST_COLOR = 'RANDOM_FIRST_COLOR';

// === action creators
// fonction qui retourne l'action d'un type donné, avec la payload
export const randomFirstColor = () => ({
  type: RANDOM_FIRST_COLOR,
  color: randomHexColor(),
});

export const randomLastColor = () => ({
  type: RANDOM_LAST_COLOR,
  color: randomHexColor(),
});

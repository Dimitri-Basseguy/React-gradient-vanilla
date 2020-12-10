import { randomHexColor } from '../utils';

// action types
export const RANDOM_LAST_COLOR = 'RANDOM_LAST_COLOR';
export const RANDOM_FIRST_COLOR = 'RANDOM_FIRST_COLOR';
export const CHANGE_DIRECTION = 'CHANGE_DIRECTION';

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

export const changeDirection = (newDirection) => ({
  type: CHANGE_DIRECTION,
  direction: newDirection,
});

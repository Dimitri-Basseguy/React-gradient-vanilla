import { randomHexColor } from '../utils';

// action types
export const DIRECTION_TO_LEFT = 'DIRECTION_TO_LEFT';
export const DIRECTION_TO_RIGHT = 'DIRECTION_TO_RIGHT';
export const DIRECTION_TO_45 = 'DIRECTION_TO_45';
export const DIRECTION_TO_135 = 'DIRECTION_TO_135';
export const DIRECTION_TO_225 = 'DIRECTION_TO_225';
export const DIRECTION_TO_315 = 'DIRECTION_TO_315';
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

export const directionToLeft = () => ({
  type: DIRECTION_TO_LEFT,
});

export const directionToRight = () => ({
  type: DIRECTION_TO_RIGHT,
});

export const directionTo45 = () => ({
  type: DIRECTION_TO_45,
});

export const directionTo135 = () => ({
  type: DIRECTION_TO_135,
});

export const directionTo225 = () => ({
  type: DIRECTION_TO_225,
});

export const directionTo315 = () => ({
  type: DIRECTION_TO_315,
});

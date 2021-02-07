import { userActionTypes } from './user.types';

export const setCurrentUser = user => ({
  type: userActionTypes.SET_CURRENT_USER, //same type what user reducer is expecting in switch case
  payload: user,
});

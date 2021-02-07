export const setCurrentUser = user => ({
  type: 'SET_CURRENT_USER', //same type what user reducer is expecting in switch case
  payload: user,
});

/**
 * This is a reducer, a pure function with (state, action) => state signature.
 * It describes how an action transforms the state into the next state.
 * you write a special function called a reducer to decide how every 
 * action transforms the entire application's state
 */
export const filter = (state = '', action) => {
  switch (action.type) {
    case 'VISIBILITY_FILTER':
      return action.text;
    default:
      return state;
  }
};
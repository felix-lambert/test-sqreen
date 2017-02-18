import {filter} from './filterStore.js';
/*
  As your app grows, instead of adding stores, 
  you split the root reducer into smaller reducers 
  independently operating on the different parts 
  of the state tree. This is exactly like how there 
  is just one root component in a React app, but it 
  is composed out of many small components
 */
/*
  export const tankerApp = combineReducers({
      filter
  });
*/
/*
  But because it is a small app, we only have one reducer
*/
export const tankerApp = filter;
/*
  Redux is a predictable state container for JavaScript apps
  The whole state of your app is stored in an object tree 
  inside a single store
 */
import { createStore } from 'redux'
import {tankerApp} from './combineReducersStore'

/*
  Create a Redux store holding the state of your app.
  Its API is { subscribe, dispatch, getState }.
  This store binds together the three principles of Redux. 
  It holds the current application's state object. It 
  lets you dispatch actions. When you create it, you need 
  to specify the reducer that tells how state is updated 
  with actions
 */
export const store = createStore(tankerApp);

/*
  The createStore function from redux is:
  const createStore = (reducer) => {
    let state;
    let listeners = [];
    
    const getState = () => state;
    
    const dispatch = (action) => {
      state = reducer(state, action);
      listeners.forEach(listener => listener());
    };
    
    const subscribe = (listener) => {
      listeners.push(listener);
      return () => {
        listeners = listeners.filter(l => l !== listener);
      };
    };
    
    dispatch({});
    
    return { getState, dispatch, subscribe };
  };

*/
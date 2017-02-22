/* React well understood the fact that the DOM is slow, and so needs to limit the interaction
   with it. It uses a virtual DOM. A Virtual DOM is a representation of the DOM in JavaScript. 
   Instead of generating the DOM itself as with a templating language, ie instead of dialoging 
   with the browser APIs to build the DOM, we only generate a tree of JavaScript objects in 
   memory.
*/
import React from 'react'

/*
  The react-dom package provides DOM-specific methods that can 
  be used at the top level of your app and as an escape hatch 
  to get outside of the React model if you need to
 */
import ReactDOM from 'react-dom'

import { store } from './store/'

/* 
  You may wonder why we split up the files at all — why 
  not keep everything in index.js? The reason is because 
  we need to import the components into our test, and if 
  we import them from the index.js file, ReactDOM.render() 
  will execute. This causes us to be dependent on the 
  existence of a DOM, even though most of our tests 
  won't need it (because they're using shallow rendering).
 */
import FilterableUserTable from './component/FilterableUserTableComponent';

export const USERS = [
  {id:1, name: 'Jennifer Tanker', email: 'qa_jennifer@tanker.io'},
  {id:2, name: 'Micher Tanker', email: 'qa_michel@tanker.io'},
  {id:3, name: 'Germaine Tanker', email: 'qa_germaine@tanker.io'},
  {id:4, 'name': 'Sebastien Tanker', 'email': 'qa_sebastien@tanker.io'},
  {id:5, 'name': 'QuentinAdmin', 'email': 'admin_quentin@tanker.io'},
  {id:6, 'name': 'DimitriAdmin Merejkowsky', 'email': 'admin_dimitri@tanker.io'},
  {id:7, 'name': '74bl€ Flp๔๕๛€Çç', 'email': 'demo_alois@tanker.io'},
  {id:8, 'name': 'DimitriAdmin Merejkowsky', 'email': 'admin_dimitri@tanker.io'},
  {id:9, 'name': 'TheoAdmin Delrieu', 'email': 'admin_theo@tanker.io'}
];

const render = () => {
  /* 
    With our knowledge so far, the only way to update the UI 
    is to create a new element, and pass it to ReactDOM.render()
    In practice, most React apps only call ReactDOM.render() once
   */
  ReactDOM.render(
    <FilterableUserTable
      /* 
        It retrieves the current state of the Redux store. 
        If we were on this, we're going to see '' because this 
        is the initial state of our application.
        The render function is called any time this store 
        state changes, so I can safely pass the current state 
        of this store as a prop to my root component.
       */
      filter={store.getState()}
      users={USERS}
    />,
    /*
      It renders it into the div I created inside the HTML. 
      It's div with the id called root
     */
    document.getElementById('root')
  );
};

/*
  You can use subscribe() to update the UI in response to state changes.
 */
store.subscribe(render);
render();
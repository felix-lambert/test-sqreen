/* 
  React well understood the fact that the DOM is slow, and so needs to limit the interaction
  with it. It uses a virtual DOM. A Virtual DOM is a representation of the DOM in JavaScript. 
  Instead of generating the DOM itself as with a templating language, ie instead of dialoging 
  with the browser APIs to build the DOM, we only generate a tree of JavaScript objects in 
  memory.
*/
import React from 'react'
import { store } from '../store/'
import FaSearch from 'react-icons/lib/fa/search'
import UserRow from './UserRowComponent'
var selectElements = ["type_a", "type_b"];

var SelectElement = React.createClass({
  render: function() {
    return (
      <option value={this.props.type}>{this.props.type}</option>
      );
  }
});

export default class UserTable extends React.Component {
  render() {
    var rows = [];
    function isArray(obj){
      return !!obj && obj.constructor === Array;
    }
    if (isArray(this.props.users)) {
      this.props.users.forEach(function(user) {
        if (typeof user === 'object') {
          if (user.name.indexOf(this.props.filterText) === -1 && 
            user.email.indexOf(this.props.filterText) === -1) {
            return;
          }
          rows.push(<UserRow user={user} key={user.id} />);
        } else {
          return;
        }
      }.bind(this));
    }

    return (
      <table className='table table-striped'>
        <thead>
          <tr>
            <th>MEMBERS IN MY TEAM</th>
            <th className='text-center'>
            <FaSearch />
            <input className='search'
              placeholder='Search...'
              ref={node => {
                this.input = node;
              }}
              /*
                  I'm able to read the value of 
                  the input inside my event handler. 
                  I'm reading this this.input.value.
              */
              onChange={() => {
                /*
                  The only way to mutate the internal state is 
                  to dispatch an action.
                  The actions can be serialized, logged or stored 
                  and later replayed.
                  An action is a plain JavaScript object describing 
                  the change. Just like the state is the minimal 
                  representation of the data in your app, the action 
                  is the minimal representation of the change to that 
                  data.
                 */
                store.dispatch({
                  type: 'VISIBILITY_FILTER',
                  text: this.input ? this.input.value : ''
                });
              }}
         /></th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );
  }
}
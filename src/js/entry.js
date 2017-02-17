import './styles.scss'
import FaSearch from 'react-icons/lib/fa/search'
import FaUserAdd from 'react-icons/lib/ti/user-add'

/* React well understood the fact that the DOM is slow, and so needs to limit the interaction
   with it. It uses a virtual DOM. A Virtual DOM is a representation of the DOM in JavaScript. 
   Instead of generating the DOM itself as with a templating language, ie instead of dialoging 
   with the browser APIs to build the DOM, we only generate a tree of JavaScript objects in 
   memory.
*/
import React from 'react'


import ReactDOM from 'react-dom'
import { combineReducers, createStore } from 'redux'

const filter = (state = [], action) => {
  switch (action.type) {
    case 'VISIBILITY_FILTER':
      return action.text;
    default:
      return state;
  }
};

const todoApp = combineReducers({
  filter
});

const store = createStore(todoApp);


class ProductTable extends React.Component {
  render() {
    var rows = [];
    this.props.users.forEach(function(user) {
      if (user.name.indexOf(this.props.filterText) === -1 && 
        user.email.indexOf(this.props.filterText) === -1) {
        return;
      }
      rows.push(<ProductRow user={user} key={user.id} />);
    }.bind(this));
    return (
      <div className='container'>
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
                onChange={() => {
                  store.dispatch({
                    type: 'VISIBILITY_FILTER',
                    text: this.input.value
                  });
                }}
           /></th>
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </table>
      </div>
    );
  }
}

class ProductRow extends React.Component {
  render() {
    var name = this.props.user.name;
    var email = this.props.user.email;
      <span>
        {name}
      </span>;
    return (
      <tr>
        <td>
        <div className="row">
          <div className="col-md-2">
          <div className="testimonial-desc">
            <h1>
            <img src="https://placeholdit.imgix.net/~text?txtsize=9&txt=100%C3%97100&w=100&h=100" alt="" /> 
            </h1>
          </div>
          </div>
          <div className="col-md-6 well-blue-p">
          <p>{name}
          <br/>
            <small className='logo'>{email}</small>
          </p>
            
          </div>
          </div>
        </td>
        <td className='text-center logo'><h1><FaUserAdd /></h1>Click here</td>
      </tr>
    );
  }
}

class SearchBar extends React.Component {
  render() {
    const state = store.getState();
    return (
      <div>
        <br/>
        
         <br/>
        <ProductTable 
          users={this.props.users}
          filterText={state.filter}
        />

      </div>
    );
  }
}


const USERS = [
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
  ReactDOM.render(
    <SearchBar
      filter={store.getState().filter}
      users={USERS}
    />,
    document.getElementById('root')
  );
};

store.subscribe(render);
render();
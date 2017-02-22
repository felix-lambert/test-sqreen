import React from 'react'
import UserTable from './UserTableComponent'
import '../../sass/styles.scss'

/*
  I'm declaring my own FilterableUserTable component that extends the react-based 
  Component. This component is only going to have a render function and 
  is going to return a div. Inside the div, I'm going to place a UserTable component.
*/
export default class FilterableUserTable extends React.Component {
  render() {
    return (
      <div className="container">
        <br/>
        {/*<input placeholder="Please enter a git url"></input>
        <button placeholder="Please enter a git url">Validate</button>*/}
        <UserTable 
          users={this.props.users}
          filterText={this.props.filter}
        />

      </div>
    );
  }
}
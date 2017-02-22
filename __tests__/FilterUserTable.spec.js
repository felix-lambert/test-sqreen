/*
  React is necessary because we're using JSX 
  (which will be compiled to a call to 
  React.createElement). 
 */
import React from 'react'

/*
  The shallow method from enzyme will allow us to "shallowly" 
  render a component. This type of rendering is used to isolate one component for testing 
  and ensure child components do not affect assertions. You can think of 
  it as rendering "just" the component you want it to.
  Enzyme gives us several ways to render components for testing: 
  using shallow, mount, and static
  Enzyme is "a JavaScript Testing utility for React that makes 
  it easier to assert, manipulate, and traverse your React Components' 
  output.
 */
import { mount, shallow } from 'enzyme'

/* 
  Chai is the assertion library. It supplies the expect 
  and assert calls we'll use in the tests to verify 
  everything is working correctly.
 */
import {expect, assert} from 'chai'
import UserRow from '../src/js/component/UserRowComponent'
import UserTable from '../src/js/component/UserTableComponent'
import FilterableUserTable from '../src/js/component/FilterableUserTableComponent'
import { store } from '../src/js/store/'
import USERS from '../src/json/users.json'

describe('<FilterableUserTable/>', function () {

  it('should render with container', function() {
    //setup: create test data
    const todo = { text: 'Embrace the Ecosystem', checked: true };
    

    //exercise: render the data into a component
    const item = shallow(<FilterableUserTable
      filter={store.getState()}
      users={USERS}
    />);
    
    //verify: rendered DOM values are what we expect
    assert(item.hasClass('container'));

  });

  it('should render with container', function() {
    //setup: create test data
    const todo = { text: 'Embrace the Ecosystem', checked: true };
    

    //exercise: render the data into a component
    const item = shallow(<FilterableUserTable
      filter={store.getState()}
      users={USERS}
    />);
    
    //verify: rendered DOM values are what we expect
    assert(item.hasClass('container'));

  });

  it('should be able to set state', function () {
    /* 
      Notice that the shallow 
      rendering isn't just one level deep. 
      It will actually render all of the built in 
      components (div, span, etc.)
     */
    const wrapper = shallow(<FilterableUserTable
      filter={store.getState()}
      users={USERS}
    />);
    wrapper.setState({ email: 'hello@ifelse.io' });
    expect(wrapper.state('email')).to.equal('hello@ifelse.io');
  });

  it('should render <UserTable>', function () {
    const wrapper = shallow(<FilterableUserTable
      filter={store.getState()}
      users={USERS}
    />);
    expect(wrapper.containsAllMatchingElements([
      <UserTable />
    ])).to.equal(true);
  });

/*  it('should find an <input />', function () {
    const wrapper = shallow(<FilterableUserTable
      filter={store.getState()}
      users={USERS}
    />);

    expect(wrapper.containsAllMatchingElements([
      <input />
    ])).to.equal(true);
  });*/

/*  it('should find a <button />', function () {
    const wrapper = shallow(<FilterableUserTable
      filter={store.getState()}
      users={USERS}
    />);

    expect(wrapper.containsAllMatchingElements([
      <button placeholder="Please enter a git url">Validate</button>
    ])).to.equal(true);*/
/*  });
*/
});
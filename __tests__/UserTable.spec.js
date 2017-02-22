import React from 'react'
import {expect, assert} from 'chai'
import {shallow } from 'enzyme'
import UserTable from '../src/js/component/UserTableComponent'
import USERS from '../src/json/users.json'
import FaSearch from 'react-icons/lib/fa/search'

describe('<UserTable />', function () {

  it('should modify input (<input>)', function () {
    const wrapper = shallow(<UserTable 
          users={USERS}
          filterText={'ben'}
        />);
    expect(wrapper.find('input')).to.have.length(1);
  });

  it('should be able to set state', function () {
    const wrapper = shallow(<UserTable 
      users={USERS}
      filterText={'ben'}
    />);
    wrapper.setState({ email: 'hello@ifelse.io' });
    expect(wrapper.state('email')).to.equal('hello@ifelse.io');
  });

  it('should render some items because good user props', () => {
    const items = ['Sam Adams', 'Resin', 'Octoberfest'];
    const wrapper = shallow(<UserTable users={items} filterText={'ben'}/>);
    expect(wrapper.find('div')).to.have.length(0);
  });

  it('should render <FaSearch />', function () {
    const wrapper = shallow(<UserTable 
      users={USERS}
      filterText={'ben'}
    />);
    expect(wrapper.containsAllMatchingElements([
      <FaSearch />
    ])).to.equal(true);
  });
});
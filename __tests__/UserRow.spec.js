import React from 'react'
import {expect} from 'chai'
import { shallow } from 'enzyme'
import FaUserAdd from 'react-icons/lib/ti/user-add'
import UserRow from '../src/js/component/UserRowComponent'

describe('<UserRow />', function () {
  const user = {
    name: "fred",
    email: "salut"
  };

  it('should have a row (<tr>)', function () {

    const wrapper = shallow(<UserRow user={user} key="1" />);
    expect(wrapper.find('tr')).to.have.length(1);
  });

  it('should have no row (<tr>)', function () {
    const wrapper = shallow(<UserRow />);
    expect(wrapper.find('tr')).to.have.length(0);
  });

  it('should have no row (<tr>) for undefined', () => {
    const wrapper = shallow(<UserRow user={undefined}/>);
    expect(wrapper.find('tr')).to.have.length(0);
  });

  it('should have no row (<tr>) for undefined', () => {
    const wrapper = shallow(<UserRow user={undefined} key="2"/>);
    expect(wrapper.find('tr')).to.have.length(0);
  });

  it('should not render some items because wrong name', () => {
    const items = ['Sam Adams', 'Resin', 'Octoberfest'];
    const wrapper = shallow(<UserRow items={items}/>);
    expect(wrapper.find('tr')).to.have.length(0);
  });

  it('should not render some items because wrong name', () => {
    const items = ['Sam Adams', 'Resin', 'Octoberfest'];
    const wrapper = shallow(<UserRow items={items} key="3"/>);
    expect(wrapper.find('tr')).to.have.length(0);
  });

  it('should render some items because good user props', () => {
    const items = ['Sam Adams', 'Resin', 'Octoberfest'];
    const wrapper = shallow(<UserRow user={items} key="3"/>);
    expect(wrapper.find('tr')).to.have.length(0);
  });

  it('should have no row (<tr>) for undefined and wrong name', () => {
    const wrapper = shallow(<UserRow items={undefined}/>);
    expect(wrapper.find('tr')).to.have.length(0);
  });

  it('should have no row (<tr>) for undefined and wrong name', () => {
    const wrapper = shallow(<UserRow items={undefined}/>);
    expect(wrapper.find('tr')).to.have.length(0);
  });

  it('should be able to set state', function () {
    const wrapper = shallow(<UserRow user="fred" key="1" />);
    wrapper.setState({ email: 'hello@ifelse.io' });
    expect(wrapper.state('email')).to.equal('hello@ifelse.io');
  });

  it('should render <FaUserAdd />', function () {
    const wrapper = shallow(<UserRow user={user} key="1" />);
    expect(wrapper.containsAllMatchingElements([
      <FaUserAdd />
    ])).to.equal(true);
  });

});
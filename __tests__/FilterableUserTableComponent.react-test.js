// Link.react-test.js
import React from 'react';
jest.unmock('../src/sass/styles.scss');
import FilterableUserTable from '../src/js/component/FilterableUserTableComponent';
import renderer from 'react-test-renderer';
import { store } from '../src/js/store/'

import USERS from '../src/json/users.json';

test('Filter gets state', () => {
  const component = renderer.create(
    <FilterableUserTable
      filter={store.getState()}
      users={USERS}
    />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
import React from 'react'
import {
  expect
} from 'chai'

import * as actions from '../src/js/store/filterStore'

describe('Filter store', function() {
  it('Should return null', function() {
    const text = 'Finish docs'
    const expectedAction = {
      type: 'ADD_TODO',
      text: text
    }
    const res = actions.filter(text);
    expect(res).to.be.equal('')
  });

  it('Should return null', function() {
    const text = 'Finish docs'
    const expectedAction = {
      type: 'VISIBILITY_FILTER',
      text: text
    }
    const res = actions.filter('', expectedAction);
    expect(res).to.be.equal(text)
  });

});
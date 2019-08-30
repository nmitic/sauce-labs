import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Filter from './Filter';

describe('Filter', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<Filter />);
    expect(wrapper).to.have.lengthOf(1);
  });
});

// Missing test cases

// 1. it('shows and hide filers')
// 2. it('submit form and make a call on submit callback')
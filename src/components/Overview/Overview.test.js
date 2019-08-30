import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Overview from './Overview';

describe('Overview', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<Overview />);
    expect(wrapper).to.have.lengthOf(1);
  });
});

// Missing test cases

// 1. it('shows spinner when loading')
// 2. it('shows devices when not loading')
// 3. it('shows avialability when not loading')
// 4. it('calls setSideBar when clicking')

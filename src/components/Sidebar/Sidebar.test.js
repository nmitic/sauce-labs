import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Sidebar from './Sidebar';

describe('Sidebar', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<Sidebar />);
    expect(wrapper).to.have.lengthOf(1);
  });
});

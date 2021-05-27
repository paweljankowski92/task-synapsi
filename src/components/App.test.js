import React from 'react'
import { shallow } from 'enzyme'
import App from './App'
import { expect } from 'chai'
import sinon from 'sinon'

describe('Component App', () => {
  it('should render Password', () => {
    const wrapper = shallow(<App />)
    expect(wrapper.find('Password'));
  });
  it('should render header', () => {
    const wrapper = shallow(<App />)
    expect(wrapper.find('header'));
  });
});

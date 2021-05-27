import React from 'react'
import { shallow } from 'enzyme'
import Password from './Password'
import { expect } from 'chai'
import sinon from 'sinon'

describe('Component Password', () => {
  it('should render Textarea', () => {
    const wrapper = shallow(<Password />)
    expect(wrapper.find('Textarea'));
  });
  it('should render Authorization', () => {
    const wrapper = shallow(<Password />)
    expect(wrapper.find('h1').first().text()).to.contain('Authorization');
  });
  it('should render div which contains input', () => {
    const wrapper = shallow(<Password />)
    const input = wrapper.find('input')
    expect(wrapper.find('div')).to.contain(input);
  });

});

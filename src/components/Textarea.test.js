import React from 'react'
import { shallow } from 'enzyme'
import Textarea from './TextArea'
import { expect } from 'chai'
import sinon from 'sinon'

describe('Component Textarea', () => {
  it('should render button', () => {
    const wrapper = shallow(<Textarea />)
    expect(wrapper.find('button'));
  });
});

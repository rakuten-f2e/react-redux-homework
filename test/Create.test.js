import React from 'react';
import {shallow} from 'enzyme';
import Create from '../src/client/Create';

describe('<Create />', () => {
  const wrapper = shallow(<Create n/>);
  describe('WHEN users connect to the website', () => {
    it('should display button', () => {
      expect(wrapper.find('button')).toHaveLength(1);
    });
  });

  describe('WHEN button is clicked', () => {
    it('should change state value', () => {
      expect(wrapper.state('isClicked')).toBe(false);
      wrapper.find('button').simulate('click');
      expect(wrapper.state('isClicked')).toBe(true);
    });
  });
});

import React from 'react';
import { shallow } from 'enzyme';
import Home from '../../src/client/components/home';

describe('<Home />', () => {
  const wrapper = shallow(<Home />);
  describe('When the website is displayed', () => {
    it('should have a title', () => {
      expect(wrapper.find('h1')).toBe('React-Redux Homework');
    });
  });
});

import React from 'react';
import {shallow} from 'enzyme';
import Home from '../src/client/Home';

describe('<Home />', () => {
  describe('WHEN users connect to Home', () => {
    it('should display', () => {
      const welcome = shallow(<Home />);
      expect(welcome.find('h1').text()).toEqual('React-Redux Homework');
    });
  });
});

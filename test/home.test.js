import React from 'react';
import {shallow} from 'enzyme';
import Home from '../src/client/Home';

describe('<Home />', () => {
  describe('When users connect to the website', () => {
    it('Home should display', () => {
      const welcome = shallow(<Home />);
      expect(welcome.find('h1').text()).toEqual('React-Redux Homework');
    });
  });
});

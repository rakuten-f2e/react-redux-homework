import React from 'react';
import {shallow} from 'enzyme';
import {event} from './mockData';
import Home from '../src/client/Home';

describe('<Home />', () => {
  describe('WHEN users connect to Home', () => {
    it('should display', () => {
      const welcome = shallow(<Home />);
      expect(welcome.find('h1').text()).toEqual('React-Redux Homework');
    });
  });

  describe('WHEN created data is submitted', () => {
    it('should set new state', () => {
      const wrapper = shallow(<Home />);
      expect(wrapper.state('data')).toHaveLength(3);
      wrapper.instance().receiveCreatedData(event);
      expect(wrapper.state('data')).toHaveLength(4);
    });
  });
});

import React from 'react';
import {shallow} from 'enzyme';
import {event, bySeq, byOwner, byNone} from './mockData';
import Home from '../src/client/Home';

describe('<Home />', () => {
  describe('WHEN users connect to Home', () => {
    it('should display', () => {
      const welcome = shallow(<Home />);
      expect(welcome.find('h1').text()).toEqual('React-Redux Homework');
    });
  });

  const wrapper = shallow(<Home />);
  describe('WHEN created data is submitted', () => {
    it('should set new state', () => {      
      expect(wrapper.state('data')).toHaveLength(3);
      wrapper.instance().receiveCreatedData(event);
      expect(wrapper.state('data')).toHaveLength(4);
    });
  });

  describe('WHEN search target is bySeq', () => {
    it('should set new state', () => {
      wrapper.instance().receiveSearchData(bySeq);
      expect(wrapper.state('data')).toHaveLength(1);
    });
  });

  describe('WHEN search target is byOwner', () => {
    it('should set new state', () => {
      wrapper.instance().receiveSearchData(byOwner);
      expect(wrapper.state('data')).toHaveLength(1);
    });
  });

  describe('WHEN search target is not select', () => {
    it('should not do anything', () => {
      wrapper.instance().receiveSearchData(byNone);
      expect(wrapper.state('data')).toHaveLength(1);
    });
  });
});

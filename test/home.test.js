import React from 'react';
import {shallow} from 'enzyme';
import {createEvent, bySeq, byOwner, byNone, mockData} from './mockData';
import Home from '../src/client/Home';

describe('<Home />', () => {
  describe('WHEN users connect to Home', () => {
    it('should display', () => {
      const welcome = shallow(<Home />);
      expect(welcome.find('h1').text()).toEqual('React-Redux Homework');
    });
  });

  const wrapper = shallow(<Home />);
  const originLength = mockData.length;
  wrapper.setState({data: mockData, root: mockData});

  describe('WHEN created data is submitted', () => {
    it('should set new state', () => {      
      expect(wrapper.state('data')).toHaveLength(originLength);
      wrapper.instance().receiveCreatedData(createEvent);
      expect(wrapper.state('data')).toHaveLength(originLength+1);
    });
  });

  describe('WHEN search data is submitted', () => {
    describe('AND search target is bySeq', () => {
      it('should set new state', () => {
        wrapper.instance().receiveSearchData(bySeq);
        expect(wrapper.state('data')).toHaveLength(1);
      });
    });
  
    describe('AND search target is byOwner', () => {
      it('should set new state', () => {
        wrapper.instance().receiveSearchData(byOwner);
        expect(wrapper.state('data')).toHaveLength(0);
      });
    });
  
    describe('AND search target is not select', () => {
      it('should not do anything', () => {
        wrapper.instance().receiveSearchData(byNone);
        expect(wrapper.state('data')).toHaveLength(0);
      });
    });
  });

  describe('WHEN Delete button is clicked', () => {
    it('should delete target row by index', () => {
      const mockIndex = {index: 1};
      wrapper.instance().receiveDeleteTarget(mockIndex);
      expect(wrapper.state('data')).toHaveLength(originLength);
    });
  });
});

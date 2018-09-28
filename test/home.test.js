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

  describe('WHEN no button is clicked', () => {
    wrapper.setState({isCreate: false});
    it('should not set new state', () => {
      const mockEvent = {
        target: {
          value: 'false',
          name: ''
        }
      };
      wrapper.instance().onClicked(mockEvent);
      expect(wrapper.state('isCreate')).toEqual(false);
    });
  });

  describe('WHEN create button is clicked', () => {
    wrapper.setState({isCreate: false});
    it('should set new state', () => {
      const mockEvent = {
        target: {
          value: 'false',
          name: 'create'
        }
      };
      wrapper.instance().onClicked(mockEvent);
      expect(wrapper.state('isCreate')).toEqual(true);
    });
  });

  describe('WHEN read button is clicked', () => {
    wrapper.setState({isRead: true});
    it('should set new state', () => {
      const mockEvent = {
        target: {
          value: 'true',
          name: 'read'
        }
      };
      wrapper.instance().onClicked(mockEvent);
      expect(wrapper.state('isRead')).toEqual(false);
    });
  });

  describe('WHEN created data is submitted', () => {
    it('should set new state', () => {      
      expect(wrapper.state('data')).toHaveLength(originLength);
      wrapper.instance().receiveCreatedData(createEvent);
      expect(wrapper.state('data')).toHaveLength(originLength+1);
    });

    describe('AND seq is duplicate', () => {
      it('should have alert', () => {
        const duplicateData = createEvent;
        wrapper.instance().receiveCreatedData(duplicateData);
        expect(wrapper.state('warning')).toBeTruthy();
      });
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

    describe('AND search input is empty', () => {
      it('should have entire table data', () => {
        const emptySearch = {
          target: {
            key: {value: 'seq'},
            search: {value: ''}
          }
        };
        wrapper.instance().receiveSearchData(emptySearch);
        expect(wrapper.state('data')).toHaveLength(originLength+1);
      });
    });
  });

  describe('WHEN Delete button is clicked', () => {
    it('should delete target row by index', () => {
      const mockIndex = {seq: 3};
      wrapper.instance().receiveDeleteTarget(mockIndex);
      expect(wrapper.state('data')).toHaveLength(originLength);
    });
  });

  describe('WHEN Update button is clicked', () => {
    it('should display Update form', () => {
      const mockTarget = {
        isClicked: true,
        index:1,
        seq: 3,
        status: 'Open',
        category: 'cat5',
        title: 'title500',
        owner: 'Sean',
        priority: 'P4'
      };
      expect(wrapper.find('.home__update').prop('style')).toHaveProperty('display', 'none');
      wrapper.instance().receiveUpdateTarget(mockTarget);
      expect(wrapper.find('.home__update').prop('style')).toHaveProperty('display', 'block');
    });
  });

  describe('WHEN Update data is submitted', () => {
    it('should change data of the target row', () => {
      const mockUpdate = {
        target: {
          seq: {value: 212313412},
          status: {value: 'Open'},
          category: {value: 'cat133'},
          title: {value: 'title30'},
          owner: {value: 'Nash'},
          priority: {value: 'P5'}
        }
      };
      expect(wrapper.find('.home__update').prop('style')).toHaveProperty('display', 'block');
      wrapper.instance().receiveUpdateData(mockUpdate);
      expect(wrapper.find('.home__update').prop('style')).toHaveProperty('display', 'none');
    });

    describe('AND seq is duplicate', () => {
      it('should have alert', () => {
        const duplicateData = createEvent;
        wrapper.instance().receiveUpdateData(duplicateData);
        expect(wrapper.state('warning')).toBeTruthy();
      });
    });
  });
});

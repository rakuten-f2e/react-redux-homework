import React from 'react';
import {shallow} from 'enzyme';
import { mockTarget, mockCreate, bySeq, byOwner, byNone, mockData } from '../data/mockData';
import Home from '../../src/client/site/home';

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

  describe('WHEN receive Create data', () => {
    describe('AND create data is submitted', () => {
      it('should set new state', () => {      
        expect(wrapper.state('data')).toHaveLength(originLength);
        wrapper.instance().receiveCreatedData(mockCreate);
        expect(wrapper.state('data')).toHaveLength(originLength+1);
      });
    });

    describe('AND create seq is duplicate', () => {
      it('should not do anything', () => {
        wrapper.instance().receiveCreatedData(mockCreate);
        expect(wrapper.state('data')).toHaveLength(originLength+1);
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
          key: 'seq',
          search: ''
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
      expect(wrapper.find('.home__update').prop('style')).toHaveProperty('display', 'none');
      wrapper.instance().receiveUpdateTarget(mockTarget);
      expect(wrapper.find('.home__update').prop('style')).toHaveProperty('display', 'block');
      expect(wrapper.state('update') !== 'undefined').toBeTruthy();
    });
  });

  describe('WHEN Update data is submitted', () => {
    it('should change data of the target row', () => {
      const update = {
        seq: 2
      };
      wrapper.setState({update: update});
      wrapper.instance().receiveUpdateData(mockCreate);
      const duplicateData = {
        seq: 314
      };
      wrapper.setState({update: duplicateData});
      wrapper.instance().receiveUpdateData(mockCreate);
      expect(wrapper.state('warning')).toBe('Seq cannot be duplicated');
    });
  });
});

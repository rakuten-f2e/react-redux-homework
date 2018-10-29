import React from 'react';
import { shallow } from 'enzyme';
import configureMockStore from 'redux-mock-store';
import { mockData, mockCreateAction } from '../data/mockData';
import CreateBtnContainer, { mapDispatchToProps } from '../../src/client/containers/createBtnContainer';

const mockStore = configureMockStore();

describe('./createBtnContainer', () => {
  let store;
  let wrapper;
  beforeEach(() => {
    const initialState = {
      table: mockData,
      filterText: 'dfasf',
    };
    store = mockStore(initialState);
    wrapper = shallow(<CreateBtnContainer store={store} />);
  });

  describe('When create button is clicked', () => {
    it('should add new id while creating new row', () => {
      expect(wrapper.prop('id')).toBe(mockData[mockData.length - 1].seq + 1);
    });

    it('should call createRow function after onClick event', () => {
      const dispatch = jest.fn();
      mapDispatchToProps(dispatch).onClick(mockCreateAction);
      expect(dispatch).toHaveBeenCalled();
    });

    describe('When table has no element', () => {
      it('should create an element start from seq is 1', () => {
        const emptyState = {
          table: [],
          filterText: 'dfadsf',
        };
        store = mockStore(emptyState);
        wrapper = shallow(<CreateBtnContainer store={store} />);
        expect(wrapper.prop('id')).toBe(1);
      });
    });
  });
});

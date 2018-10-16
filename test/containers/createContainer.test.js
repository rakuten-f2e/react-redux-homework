import React from 'react';
import { shallow } from 'enzyme';
import configureMockStore from 'redux-mock-store';
import { mockData, mockCreateAction } from '../data/mockData';
import CreateContainer, { mapDispatchToProps } from '../../src/client/containers/createContainer';

const mockStore = configureMockStore();

describe('./createContainer', () => {
  let store;
  let wrapper;
  beforeEach(() => {
    const initialState = {
      table: mockData,
      readFilter: 'dfasf',
    };
    store = mockStore(initialState);
    wrapper = shallow(<CreateContainer store={store} />);
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
  });
});

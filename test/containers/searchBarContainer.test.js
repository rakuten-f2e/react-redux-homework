import React from 'react';
import { shallow } from 'enzyme';
import configureMockStore from 'redux-mock-store';
import SearchBarContainer, { mapDispatchToProps } from '../../src/client/containers/searchBarContainer';

const mockStore = configureMockStore();

describe('./searchBarContainer', () => {
  let store;
  let wrapper;
  beforeEach(() => {
    const initialState = {
      readFilter: 'dfasf',
    };
    store = mockStore(initialState);
    wrapper = shallow(<SearchBarContainer store={store} />);
  });

  describe('When text is entered', () => {
    it('should add new id while creating new row', () => {
      expect(wrapper.prop('filterText')).toBe('dfasf');
    });

    it('should call createRow function after onClick event', () => {
      const dispatch = jest.fn();
      mapDispatchToProps(dispatch).onChange();
      expect(dispatch).toHaveBeenCalled();
    });
  });
});

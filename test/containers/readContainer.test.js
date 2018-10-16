import React from 'react';
import { shallow } from 'enzyme';
import configureMockStore from 'redux-mock-store';
import ReadContainer, { mapDispatchToProps } from '../../src/client/containers/readContainer';

const mockStore = configureMockStore();

describe('./createRow', () => {
  let store;
  let wrapper;
  beforeEach(() => {
    const initialState = {
      readFilter: 'dfasf',
    };
    store = mockStore(initialState);
    wrapper = shallow(<ReadContainer store={store} />);
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

import React from 'react';
import {shallow} from 'enzyme';
import Create from '../../src/client/action/create';

describe('<Create />', () => {
  const mockFunc = jest.fn();
  const wrapper = shallow(<Create onCreate={mockFunc} />);

  describe('WHEN users connect to the website', () => {
    it('should display button', () => {
      expect(wrapper.find('button')).toHaveLength(1);
    });
  });

  describe('WHEN button is clicked', () => {
    it('should change state value', () => {
      wrapper.find('button').simulate('click');
      expect(mockFunc).toHaveBeenCalled();
    });
  });
});

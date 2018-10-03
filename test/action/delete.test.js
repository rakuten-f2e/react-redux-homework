import React from 'react';
import {shallow} from 'enzyme';
import Delete from '../../src/client/action/delete';

describe('<Delete />', () => {
  const mockFunc = jest.fn();
  const wrapper = shallow(<Delete onDelete={mockFunc} />);
  describe('WHEN table is created', () => {
    it('should have Delete button', () => {
      expect(wrapper.find('button')).toHaveLength(1);
    });
  });

  describe('WHEN Delete button is clicked', () => {
    it('should call handleClick', () => {
      wrapper.find('button').simulate('click', { preventDefault() {}});
      expect(mockFunc).toHaveBeenCalled();
    });
  });
});
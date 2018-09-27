import React from 'react';
import Delete from '../src/client/Delete';
import {shallow} from 'enzyme';

describe('<Delete />', () => {
  const mockFunc = jest.fn();
  const wrapper = shallow(<Delete onClick={mockFunc}/>);
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
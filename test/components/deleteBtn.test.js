import React from 'react';
import { shallow } from 'enzyme';
import DeleteBtn from '../../src/client/components/deleteBtn';

describe('<DeleteBtn />', () => {
  const mockFunc = jest.fn();
  const wrapper = shallow(<DeleteBtn target={{}} onClick={mockFunc} />);
  describe('When table is created', () => {
    it('should have Delete button', () => {
      expect(wrapper.find('button')).toHaveLength(1);
    });
  });

  describe('And users click the button', () => {
    it('should call onClick function', () => {
      wrapper.find('button').simulate('click', new Event('click'));
      expect(mockFunc).toHaveBeenCalled();
    });
  });
});

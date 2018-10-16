import React from 'react';
import { shallow } from 'enzyme';
import Delete from '../../src/client/components/delete';

describe('<Delete />', () => {
  const mockFunc = jest.fn();
  const wrapper = shallow(<Delete target={{}} onClick={mockFunc} />);
  describe('WHEN table is created', () => {
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

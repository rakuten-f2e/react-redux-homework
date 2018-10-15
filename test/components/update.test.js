import React from 'react';
import { shallow } from 'enzyme';
import Update from '../../src/client/components/update';

describe('<Update />', () => {
  const mockFunc = jest.fn();
  const wrapper = shallow(<Update onUpdate={mockFunc} target={3} />);
  describe('WHEN table is created', () => {
    it('should have Update button', () => {
      expect(wrapper.find('button')).toHaveLength(1);
    });
  });

  describe('WHEN Update button is clicked', () => {
    it('should call handleClick', () => {
      wrapper.find('button').simulate('click', new Event('click'));
      expect(mockFunc).toHaveBeenCalled();
    });
  });
});

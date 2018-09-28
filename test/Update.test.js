import React from 'react';
import Update from '../src/client/Update';
import {shallow} from 'enzyme';

describe('<Update />', () => {
  const mockFunc = jest.fn();
  const wrapper = shallow(<Update onUpdate={mockFunc}/>);
  describe('WHEN table is created', () => {
    it('should have Update button', () => {
      expect(wrapper.find('button')).toHaveLength(1);
    });
  });

  describe('WHEN Update button is clicked', () => {
    it('should call handleClick', () => {
      wrapper.find('button').simulate('click', { preventDefault() {}});
      expect(mockFunc).toHaveBeenCalled();
    });
  });
});
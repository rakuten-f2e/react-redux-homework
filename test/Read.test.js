import React from 'react';
import {shallow} from 'enzyme';
import Read from '../src/client/action/read';

describe('<Read />', () => {
  const mockFunc = jest.fn();
  const wrapper = shallow(<Read onRead={mockFunc} />);

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
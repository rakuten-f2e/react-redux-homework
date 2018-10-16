import React from 'react';
import { shallow } from 'enzyme';
import Create from '../../src/client/components/create';

describe('<Create />', () => {
  const mockFunc = jest.fn();
  const wrapper = shallow(<Create id={3} onClick={mockFunc} />);

  describe('WHEN users connect to the website', () => {
    it('should display button', () => {
      expect(wrapper.find('button')).toHaveLength(1);
    });

    describe('And users click the button', () => {
      it('should call onClick function', () => {
        wrapper.find('button').simulate('click', new Event('click'));
        expect(mockFunc).toHaveBeenCalled();
      });
    });
  });
});

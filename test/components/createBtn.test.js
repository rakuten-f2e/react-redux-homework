import React from 'react';
import { shallow } from 'enzyme';
import CreateBtn from '../../src/client/components/createBtn';

describe('<CreateBtn />', () => {
  const mockFunc = jest.fn();
  const wrapper = shallow(<CreateBtn id={3} onClick={mockFunc} />);

  describe('When users connect to the website', () => {
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

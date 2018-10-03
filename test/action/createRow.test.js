import React from 'react';
import {shallow} from 'enzyme';
import CreateRow from '../../src/client/action/createRow';

describe('<CreateRow />', () => {
  const mockFunc = jest.fn();
  const wrapper = shallow(<CreateRow onSubmit={mockFunc} />);
  describe('WHEN users connect to the website', () => {
    it('should have inputs', () => {
      expect(wrapper.find('input')).toHaveLength(7);
    });
  });

  describe('GIVEN CreateRow style', () => {
    describe('WHEN create button is clicked', () => {
      it('should change style', () => {
        expect(wrapper.find('.create__row').prop('style')).toHaveProperty('display', 'none');
        wrapper.setProps({isClicked: true});
        expect(wrapper.find('.create__row').prop('style')).toHaveProperty('display', 'block');
      });
    });
  });

  describe('WHEN submit is clicked', () => {
    it('should call handleSubmit', () => {
      wrapper.find('form').simulate('submit', { preventDefault() {}});
      expect(mockFunc).toHaveBeenCalled();
    });
  });
});
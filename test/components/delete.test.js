import React from 'react';
import { shallow } from 'enzyme';
import Delete from '../../src/client/components/delete';

describe('<Delete />', () => {
  const wrapper = shallow(<Delete target={{}} />);
  describe('WHEN table is created', () => {
    it('should have Delete button', () => {
      expect(wrapper.find('button')).toHaveLength(1);
    });
  });
});

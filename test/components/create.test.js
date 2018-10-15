import React from 'react';
import { shallow } from 'enzyme';
import Create from '../../src/client/components/create';

describe('<Create />', () => {
  const wrapper = shallow(<Create />);

  describe('WHEN users connect to the website', () => {
    it('should display button', () => {
      expect(wrapper.find('button')).toHaveLength(1);
    });
  });
});

import React from 'react';
import { shallow } from 'enzyme';
import Read from '../../src/client/components/read';

describe('<Read />', () => {
  const wrapper = shallow(<Read />);

  describe('WHEN users connect to the website', () => {
    it('should display button', () => {
      expect(wrapper.find('button')).toHaveLength(1);
    });
  });
});

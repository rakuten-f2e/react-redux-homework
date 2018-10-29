import React from 'react';
import { shallow } from 'enzyme';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { mockData } from '../data/mockData';
import FetchBtn from '../../src/client/components/fetchBtn';

describe('<FetchBtn />', () => {
  const mockFunc = jest.fn();
  const spy = jest.spyOn(FetchBtn.prototype, 'handleClick');
  const wrapper = shallow(<FetchBtn onClick={mockFunc} />);
  describe('When connect to the website', () => {
    it('should have Fetch button', () => {
      expect(wrapper.find('button')).toHaveLength(1);
    });
  });

  describe('And users click the button', () => {
    it('should call onClick function', () => {
      const mock = new MockAdapter(axios);
      mock.onGet('/api/tabledatas').reply(200, mockData);
      wrapper.find('button').simulate('click', new Event('click'));
      expect(spy).toHaveBeenCalled();
    });
  });
});

import React from 'react';
import {shallow, mount} from 'enzyme';
import Footer from '../src/client/Footer';

describe('<Footer />', () => {
  jest.useFakeTimers();
  const wrapper = shallow(<Footer />);

  describe('When users connect to the website', () => {
    it('Footer should display', () => {
      expect(wrapper.find('p')).toHaveLength(3);
      expect(wrapper.find('a').text()).toEqual('ss77995ss@gmail.com');
    
      const timer = wrapper.find('p').at(2);
      const now = new Date();
      expect(timer.text()).toEqual(now.toLocaleTimeString());
    });
  });
  
  describe('Ｗhen component did mount', () => {
    it('the clock should be ticking', () => {
      expect(setInterval).toBeCalled();
      expect(clearInterval).not.toBeCalled();
    });
  });

  describe('When component has unmounted', () => {
    it('the clock should be cleared', () => {
      wrapper.unmount();
      expect(setInterval).toBeCalled();
      expect(clearInterval).toBeCalled();
    })
  });

  describe('When clock is ticking', () => {
    it('State should be changed', () => {
      const mountWrapper = mount(<Footer />);
      const spy = jest.spyOn(Footer.prototype, 'tick');
      mountWrapper.instance().tick();
      expect(spy).toHaveBeenCalled();
    });
  });
});
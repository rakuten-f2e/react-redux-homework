import React from 'react';
import { shallow } from 'enzyme';
import Footer from '../../src/client/components/footer';

describe('<Footer />', () => {
  jest.useFakeTimers();
  const wrapper = shallow(<Footer />);

  describe('WHEN Footer is created', () => {
    it('should display', () => {
      expect(wrapper.find('p')).toHaveLength(3);
      expect(wrapper.find('a').text()).toEqual('ss77995ss@gmail.com');
    });
    describe('AND the third "p" tag', () => {
      it('should match state', () => {
        const now = new Date();
        wrapper.setState({ date: now });
        expect(wrapper.find('p').at(2).text()).toEqual(now.toLocaleTimeString());
      });
    });
  });

  describe('WHEN clock is created', () => {
    describe('AND compoent did mount', () => {
      it('should call setInterval & not call clearInterval', () => {
        expect(setInterval).toBeCalled();
        expect(clearInterval).not.toBeCalled();
      });
    });
  });

  describe('WHEN clock is ticking AND component has unmounted', () => {
    describe('AND component has unmounted', () => {
      it('should call clearInterval', () => {
        wrapper.unmount();
        expect(clearInterval).toBeCalled();
      });
    });
  });

  describe('WHEN clock is ticking', () => {
    describe('AND state is set', () => {
      it('should be changed', () => {
        const tickWrapper = shallow(<Footer />);
        const spy = jest.spyOn(Footer.prototype, 'tick');
        tickWrapper.instance().tick();
        expect(spy).toHaveBeenCalled();
      });
    });
  });
});

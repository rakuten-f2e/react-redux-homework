import React from 'react';
import {shallow, configure} from 'enzyme';
import Footer from '../src/client/Footer';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

jest.useFakeTimers();

describe('When open the website', () => {
  const wrapper = shallow(<Footer />);
  it('should display', () => {
    
    expect(wrapper.find('p')).toHaveLength(3);
    expect(wrapper.find('a').text()).toEqual('ss77995ss@gmail.com');
  
    const timer = wrapper.find('p').at(2);
    const now = new Date();
    expect(timer.text()).toEqual(now.toLocaleTimeString());
  });
});

describe('When clock ticking', () => {

  it('should display', () => {
    const wrapper = shallow(<Footer />);

    expect(setInterval).toBeCalled();
    expect(clearInterval).not.toBeCalled();

    wrapper.unmount();
    expect(setInterval).toBeCalled();
    expect(clearInterval).toBeCalled();
  });
});
import React from 'react';
import {shallow, mount, configure} from 'enzyme';
import Footer from '../src/client/Footer';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

jest.useFakeTimers();

describe('<Footer />', () => {
  it('Check name and e-mail', () => {
    const content = shallow(<Footer />);
    expect(content.find('p')).toHaveLength(3);
    expect(content.find('a').text()).toEqual('ss77995ss@gmail.com');
  });

  it('Check clock display', () => {
    
    const clock = mount(<Footer />);
    const timer = clock.find('p').at(2);
    const now = new Date();
    expect(timer.text()).toEqual(now.toLocaleTimeString());
  });

  it('Check lifecycle', () => {
    const wrapper = shallow(<Footer />);
    expect(setInterval).toBeCalled();
    expect(clearInterval.length).toBe(0);

    wrapper.unmount();
    expect(setInterval).toBeCalled();
    expect(clearInterval).toBeCalled();
  });
});
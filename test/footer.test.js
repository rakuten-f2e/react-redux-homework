import React from 'react';
import {shallow, mount, configure} from 'enzyme';
import Footer from '../src/client/footer';
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
    expect(timer.text()).toEqual(now.getHours()+":"+now.getMinutes()+":"+now.getSeconds());
  });

  it('Check lifecycle', () => {
    const wrapper = shallow(<Footer />);
    wrapper.instance().componentDidMount();
  });
});
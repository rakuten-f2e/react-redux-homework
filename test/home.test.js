import React from 'react';
import {shallow, configure} from 'enzyme';
import Home from '../src/client/Home';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

describe('When scenario', () => {
  test('Home should display', () => {
    // verify your component here
    const welcome = shallow(<Home />);
    expect(welcome.find('h1').text()).toEqual('React-Redux Homework');
  });
});

import React from 'react';
import {shallow} from 'enzyme';
import TableRow from '../src/client/TableRow';
import {odd, even} from './mockData';

describe('WHEN odd Row is created', () => {
  const updatedStyle = {
    seq: 3,
    color: 'red'
  };
  const wrapper = shallow(<TableRow 
    key={odd.seq}
    index={odd.index}
    seq={odd.seq}
    status={odd.status}
    category={odd.category}
    title={odd.title}
    owner={odd.owner}
    priority={odd.priority}
    updatedStyle={updatedStyle}
  />);
  
  it('should have seven cells', () => {
    expect(wrapper.find('td')).toHaveLength(7);
  });

  it('should have className "table__row table__row--odd"', () => {
    expect(wrapper.find('tr').hasClass('table__row table__row--odd')).toBeTruthy();
  });
});

describe('WHEN even Row is created', () => {
  const updatedStyle = {
    seq: 3,
    color: 'red'
  };
  const wrapper = shallow(<TableRow 
    key={even.seq}
    index={even.index}
    seq={even.seq}
    status={even.status}
    category={even.category}
    title={even.title}
    owner={even.owner}
    priority={even.priority}
    updatedStyle={updatedStyle}
  />);

  it('should have seven cells', () => {
    expect(wrapper.find('td')).toHaveLength(7);
  });

  it('should have className "table__row table__row--even"', () => {
    expect(wrapper.find('tr').hasClass('table__row table__row--even')).toBeTruthy();
  });
});
import React from 'react';
import {shallow} from 'enzyme';
import TableRow from '../src/client/TableRow';
import {mockData} from './mockData';

describe('When table is created', () => {
  const wrapper = shallow(<TableRow 
    key={mockData.seq}
    seq={mockData.seq} 
    status={mockData.status}
    category={mockData.category}
    title={mockData.title}
    owner={mockData.owner}
    priority={mockData.priority}
  />);
  it('TableRow should have six cells', () => {
    expect(wrapper.find('td').length).toBe(6);
  });

  it('TableRow should have different className', () => {
    if(wrapper.find('td').first() % 2 === 0){
      expect(wrapper.find('tr').hasClass('table__row table__row--even')).toBe(true);
    }
    else if(wrapper.find('td').first() % 2 === 1){
      expect(wrapper.find('tr').hasClass('table__row table__row--odd')).toBe(true);
    }
  });
})
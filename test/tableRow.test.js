import React from 'react';
import {shallow} from 'enzyme';
import TableRow from '../src/client/TableRow';

const fakeData = {
  seq: 3,
  status: "Open",
  category: "cat5",
  title: "title500",
  owner: "Sean",
  priority: "P4"
}

describe('When table is created', () => {
  const wrapper = shallow(<TableRow 
    key={fakeData.seq}
    seq={fakeData.seq} 
    status={fakeData.status}
    category={fakeData.category}
    title={fakeData.title}
    owner={fakeData.owner}
    priority={fakeData.priority}
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
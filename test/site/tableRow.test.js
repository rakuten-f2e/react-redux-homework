import React from 'react';
import {shallow} from 'enzyme';
import TableRow from '../../src/client/site/tableRow';
import {odd, even} from '../data/mockData';

describe('WHEN odd Row is created', () => {
  const updatedStyle = {
    seq: 3,
    color: 'red'
  };
  const mockDelete = jest.fn();
  const mockUpdate = jest.fn();
  const wrapper = shallow(<TableRow 
    key={odd.seq}
    index={odd.index}
    row={odd}
    updatedStyle={updatedStyle}
    onDelete={mockDelete}
    onUpdate={mockUpdate}
  />);
  
  it('should have seven cells', () => {
    expect(wrapper.find('td')).toHaveLength(7);
  });

  it('should have className "table__row table__row--odd"', () => {
    expect(wrapper.find('tr').hasClass('table__row table__row--odd')).toBeTruthy();
  });
});

describe('wehn even Row is created', () => {
  const updatedStyle = {
    seq: 3,
    color: 'red'
  };
  const mockDelete = jest.fn();
  const mockUpdate = jest.fn();
  const wrapper = shallow(<TableRow 
    key={even.seq}
    index={even.index}
    row={even}
    updatedStyle={updatedStyle}
    onDelete={mockDelete}
    onUpdate={mockUpdate}
  />);

  it('should have seven cells', () => {
    expect(wrapper.find('td')).toHaveLength(7);
  });

  it('should have className "table__row table__row--even"', () => {
    expect(wrapper.find('tr').hasClass('table__row table__row--even')).toBeTruthy();
  });

  describe('WHEN Row is updated', () => {
    const newStyle = {
      seq: 314,
      color: 'light-red'
    };
    wrapper.setProps({updatedStyle: newStyle});
    it('should change color', () => {
      expect(wrapper.find('tr').prop('style')).toHaveProperty('backgroundColor', 'light-red');
    });
  });
});


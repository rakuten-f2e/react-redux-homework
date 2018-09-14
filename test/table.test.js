import React from 'react';
import {shallow, mount, configure} from 'enzyme';
import Table from '../src/client/Table';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('<Table />', () => {
  const wrapper = mount(<Table />);
  it('Check table header', () => {
    
    const header = wrapper.find('tr.Table-header');
    expect(header.length).toEqual(1);

    const headerColumns = header.find('th').map(col => col.text());
    expect(headerColumns.length).toEqual(6);
    expect(headerColumns[0]).toEqual('seq');
    expect(headerColumns[1].length).toEqual(6);
    expect(headerColumns[headerColumns.length-1]).toEqual('Priority');

  });
  it('Check table items', () => {
    const oddRow = wrapper.find('tr.Row-odd');
    const oddColumns = oddRow.find('td').map(col => col.text());
    expect(oddColumns[0] % 2).toEqual(1);

    const evenRow = wrapper.find('tr.Row-even');
    const evenColumns = evenRow.find('td').map(col => col.text());
    expect(evenColumns[0] % 2).toEqual(0);
    expect(evenRow.get(0).props.style).toHaveProperty('backgroundColor','lightgrey');
  });
});
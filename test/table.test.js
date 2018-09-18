import React from 'react';
import {mount, configure} from 'enzyme';
import Table from '../src/client/Table';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('When scenario', () => {
  const wrapper = mount(<Table />);
  test('Table should display', () => {
    
    const header = wrapper.find('tr.table__header');
    expect(header.length).toEqual(1);

    const headerColumns = header.find('th').map(col => col.text());
    expect(headerColumns.length).toEqual(6);
    expect(headerColumns[0]).toEqual('seq');
    expect(headerColumns[1].length).toEqual(6);
    expect(headerColumns[headerColumns.length-1]).toEqual('Priority');

  });
});

describe('When table display', () => {
  it('should have different class name', () => {
    const wrapper = mount(<Table />);
    const oddRow = wrapper.find('[className="table__row table__row--odd"]');
    const oddColumns = oddRow.find('td').map(col => col.text());
    expect(oddColumns[0] % 2).toEqual(1);

    const evenRow = wrapper.find('[className="table__row table__row--even"]');
    const evenColumns = evenRow.find('td').map(col => col.text());
    expect(evenColumns[0] % 2).toEqual(0);
  });
})
import React from 'react';
import {shallow} from 'enzyme';
import Table from '../src/client/Table';
import {mockData} from './mockData';

describe('<Table />', () => {
  describe('When users connect to the website', () => {
    it('table header should display', () => {
      const wrapper = shallow(<Table tableData={mockData}/>);
      const header = wrapper.find('thead');
      expect(header).toHaveLength(1);
  
      const headerColumns = header.find('th').map(col => col.text());
      expect(headerColumns).toHaveLength(6);
      expect(headerColumns[0]).toEqual('seq');
      expect(headerColumns[1]).toHaveLength(6);
      expect(headerColumns[headerColumns.length-1]).toEqual('Priority');
    });
  });
});
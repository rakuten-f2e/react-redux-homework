import React from 'react';
import { shallow } from 'enzyme';
import Table from '../../src/client/components/table';
import { mockData } from '../data/mockData';

describe('<Table />', () => {
  describe('When users connect to the website', () => {
    it('should display', () => {
      const wrapper = shallow(<Table
        tableData={mockData}
        filterText="fasasfsa"
      />);
      const header = wrapper.find('thead');
      expect(header).toHaveLength(1);

      const headerColumns = header.find('th').map(col => col.text());
      expect(headerColumns).toHaveLength(7);
      expect(headerColumns[0]).toEqual('seq');
      expect(headerColumns[1]).toHaveLength(6);
      expect(headerColumns[headerColumns.length - 1]).toEqual('Action');
    });
  });
  describe('When filterText find matches', () => {
    it('should display', () => {
      const wrapper = shallow(<Table
        tableData={mockData}
        filterText="Sean"
      />);
      const header = wrapper.find('thead');
      expect(header).toHaveLength(1);

      const headerColumns = header.find('th').map(col => col.text());
      expect(headerColumns).toHaveLength(7);
      expect(headerColumns[0]).toEqual('seq');
      expect(headerColumns[1]).toHaveLength(6);
      expect(headerColumns[headerColumns.length - 1]).toEqual('Action');
    });
  });
});

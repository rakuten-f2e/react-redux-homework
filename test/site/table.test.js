import React from 'react';
import { shallow } from 'enzyme';
import Table from '../../src/client/site/table';
import { mockData } from '../data/mockData';

describe('<Table />', () => {
  describe('When users connect to the website', () => {
    it('table header should display', () => {
      const mockFunc = jest.fn();
      const wrapper = shallow(<Table
        tableData={mockData}
        receiveDeleteTarget={mockFunc}
        receiveUpdateTarget={mockFunc}
        updatedStyle={{
          seq: 123,
          color: 'red',
        }}
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

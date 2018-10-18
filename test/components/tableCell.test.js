import React from 'react';
import { shallow } from 'enzyme';
import TableCell from '../../src/client/components/tableCell';

describe('<TableCell />', () => {
  const mockFunc = jest.fn();
  const mockCellData = {
    id: 6,
    name: 'category',
    value: 'cat342',
  };
  const wrapper = shallow(<TableCell cellData={mockCellData} onChange={mockFunc} />);

  describe('When table is created', () => {
    it('should display', () => {
      expect(wrapper.find('input')).toHaveLength(1);
    });
  });

  describe('When the data of cell is changed', () => {
    it('should call onChange function', () => {
      const mockEvent = new Event('change');
      const customTarget = {
        id: '3',
        name: 'category',
        value: 'cat3424',
      };
      Object.defineProperty(mockEvent, 'target', { writable: false, value: customTarget });

      wrapper.find('input').simulate('change', mockEvent);
      expect(mockFunc).toHaveBeenCalled();
    });
  });
});

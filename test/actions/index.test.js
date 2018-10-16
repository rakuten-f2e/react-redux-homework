import { mockCreateAction } from '../data/mockData';
import * as actions from '../../src/client/actions/index';

describe('./actions', () => {
  describe('When createRow action is called', () => {
    it('should create an action to create new row', () => {
      const mockData = mockCreateAction;
      const expectedAction = {
        type: 'CREATE_ROW',
        obj: mockData,
      };
      expect(actions.createRow(mockData)).toEqual(expectedAction);
    });
  });
  describe('When readFilter action is called', () => {
    it('should create an action to read throw the table', () => {
      const mockData = 'afasfdssda';
      const expectedAction = {
        type: 'READ_FILTER',
        text: mockData,
      };
      expect(actions.readFilter(mockData)).toEqual(expectedAction);
    });
  });
  describe('When deleteRow action is called', () => {
    it('should create an action to delete a row', () => {
      const mockData = mockCreateAction;
      const expectedAction = {
        type: 'DELETE_ROW',
        obj: mockData,
      };
      expect(actions.deleteRow(mockData)).toEqual(expectedAction);
    });
  });
  describe('When updateCell action is called', () => {
    it('should create an action to change data of a cell', () => {
      const mockData = mockCreateAction;
      const expectedAction = {
        type: 'UPDATE_CELL',
        obj: mockData,
      };
      expect(actions.updateCell(mockData)).toEqual(expectedAction);
    });
  });
});

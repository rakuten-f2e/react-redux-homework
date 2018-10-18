import { mockCreateAction } from '../data/mockData';
import {
  ROW_CREATER,
  ROW_DELETER,
  CELL_UPDATER,
  FILTER_TEXT,
} from '../constants/actionTypes';
import * as actions from '../../src/client/actions/index';

describe('./actions', () => {
  describe('When rowCreater action is called', () => {
    it('should create an action to create new row', () => {
      const mockData = mockCreateAction;
      const expectedAction = {
        type: ROW_CREATER,
        obj: mockData,
      };
      expect(actions.rowCreater(mockData)).toEqual(expectedAction);
    });
  });
  describe('When filterText action is called', () => {
    it('should create an action to read throw the table', () => {
      const mockData = 'afasfdssda';
      const expectedAction = {
        type: FILTER_TEXT,
        text: mockData,
      };
      expect(actions.filterText(mockData)).toEqual(expectedAction);
    });
  });
  describe('When rowDeleter action is called', () => {
    it('should create an action to delete a row', () => {
      const mockData = mockCreateAction;
      const expectedAction = {
        type: ROW_DELETER,
        obj: mockData,
      };
      expect(actions.rowDeleter(mockData)).toEqual(expectedAction);
    });
  });
  describe('When cellUpdater action is called', () => {
    it('should create an action to change data of a cell', () => {
      const mockData = mockCreateAction;
      const expectedAction = {
        type: CELL_UPDATER,
        obj: mockData,
      };
      expect(actions.cellUpdater(mockData)).toEqual(expectedAction);
    });
  });
});

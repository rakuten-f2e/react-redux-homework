import {
  ROW_CREATER,
  ROW_DELETER,
  CELL_UPDATER,
  FILTER_TEXT,
} from '../constants/actionTypes';

export const rowCreater = ({
  seq, status, category, title, owner, priority,
}) => (
  {
    type: ROW_CREATER,
    obj: {
      seq,
      status,
      category,
      title,
      owner,
      priority,
    },
  });

export const filterText = text => ({
  type: FILTER_TEXT,
  text,
});

export const rowDeleter = row => ({
  type: ROW_DELETER,
  obj: row,
});

export const cellUpdater = row => ({
  type: CELL_UPDATER,
  obj: row,
});

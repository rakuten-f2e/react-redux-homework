import {
  ROW_CREATER,
  ROW_DELETER,
  CELL_UPDATER,
  FILTER_TEXT,
  FETCH_DATA,
} from '../constants/actionTypes';

export const rowCreater = ({
  _id, seq, status, category, title, owner, priority,
}) => (
  {
    type: ROW_CREATER,
    data: {
      _id,
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
  data: row,
});

export const cellUpdater = row => ({
  type: CELL_UPDATER,
  data: row,
});

export const fetchData = data => ({
  type: FETCH_DATA,
  data,
});

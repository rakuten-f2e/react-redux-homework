import {
  ROW_CREATER,
  ROW_DELETER,
  CELL_UPDATER,
  FETCH_DATA,
} from '../constants/actionTypes';

const table = (state = [], { type, data }) => {
  switch (type) {
  case ROW_CREATER:
    return state.concat([data]);
  case ROW_DELETER:
    state.splice(state.indexOf(data), 1);
    return [
      ...state,
    ];
  case CELL_UPDATER: {
    const { id, name, value } = data;
    return state.map((row) => {
      if (row.seq.toString() === id) {
        return {
          ...row,
          [name]: value,
        };
      }
      return row;
    });
  }
  case FETCH_DATA:
    return [
      ...data,
    ];
  default:
    return state;
  }
};

export default table;

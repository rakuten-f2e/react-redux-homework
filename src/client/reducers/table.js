import { ROW_CREATER, ROW_DELETER, CELL_UPDATER } from '../constants/actionTypes';

const table = (state = [], { type, obj }) => {
  switch (type) {
  case ROW_CREATER:
    return state.concat([obj]);
  case ROW_DELETER:
    state.splice(state.indexOf(obj), 1);
    return [
      ...state,
    ];
  case CELL_UPDATER: {
    const { id, name, value } = obj;
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
  default:
    return state;
  }
};

export default table;

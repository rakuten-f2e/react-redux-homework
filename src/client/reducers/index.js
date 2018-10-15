import { combineReducers } from 'redux';
import table from './table';
import readFilter from './readFilter';

const tableReducer = combineReducers({
  table,
  readFilter,
});

export default tableReducer;

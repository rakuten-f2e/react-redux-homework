import { TEXT_FILTER } from '../constants/actionTypes';

const filterText = (state = '', action) => {
  switch (action.type) {
  case TEXT_FILTER:
    return action.text;
  default:
    return state;
  }
};

export default filterText;

import { FILTER_TEXT } from '../constants/actionTypes';

const filterText = (state = '', action) => {
  switch (action.type) {
  case FILTER_TEXT:
    return action.text;
  default:
    return state;
  }
};

export default filterText;

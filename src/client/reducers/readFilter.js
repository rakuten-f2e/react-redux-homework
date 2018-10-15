const readFilter = (state = '', action) => {
  switch (action.type) {
  case 'READ_FILTER':
    return action.text;
  default:
    return state;
  }
};

export default readFilter;

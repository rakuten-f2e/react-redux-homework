const table = (state = [], { type, obj }) => {
  switch (type) {
  case 'CREATE_ROW':
    return state.concat([obj]);
  case 'DELETE_ROW':
    state.splice(state.indexOf(obj), 1);
    return [
      ...state,
    ];
  case 'UPDATE_CELL':
    return state.map((row, index, arr) => {
      if (arr[index].seq.toString() === obj.id) {
        const newObj = {};
        newObj[obj.name] = obj.value;
        return Object.assign({}, row, newObj);
      }
      return row;
    });
  default:
    return state;
  }
};

export default table;

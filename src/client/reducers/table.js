const table = (state = [], action) => {
  switch (action.type) {
  case 'CREATE_ROW':
    return state.concat([action.obj]);
  case 'DELETE_ROW':
    state.splice(state.indexOf(action.obj), 1);
    return [
      ...state,
    ];
  case 'UPDATE_CELL':
    return state.map((todo, index, arr) => {
      if (arr[index].seq.toString() === action.obj.id) {
        const obj = {};
        obj[action.obj.name] = action.obj.value;
        return Object.assign({}, todo, obj);
      }
      return todo;
    });
  default:
    return state;
  }
};

export default table;

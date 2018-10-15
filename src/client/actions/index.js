export const createRow = row => ({
  type: 'CREATE_ROW',
  obj: {
    seq: row.seq,
    category: row.category,
    title: row.title,
    owner: row.owner,
    priority: row.priority,
  },
});

export const readFilter = text => ({
  type: 'READ_FILTER',
  text,
});

export const deleteRow = row => ({
  type: 'DELETE_ROW',
  obj: row,
});

export const updateCell = row => ({
  type: 'UPDATE_CELL',
  obj: row,
});

import React from 'react';
import PropTypes from 'prop-types';
import { rowPropType } from '../types/shape';
import TableRow from './tableRow';

const Table = ({ tableData, filterText }) => {
  const tableRow = tableData.map((item, index) => {
    if (item.owner.toLowerCase().indexOf(filterText.toLowerCase()) !== -1) {
      return (
        <TableRow
          key={item.seq}
          index={index + 1}
          row={item}
        />
      );
    }

    return null;
  });

  return (
    <div className="table">
      <table align="center" rules="all" className="table__main">
        <thead className="table__header">
          <tr>
            <th>seq</th>
            <th>Status</th>
            <th>Category</th>
            <th>Title</th>
            <th>Owner</th>
            <th>Priority</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {tableRow}
        </tbody>
      </table>
    </div>
  );
};

Table.propTypes = {
  tableData: PropTypes.arrayOf(rowPropType).isRequired,
  filterText: PropTypes.string.isRequired,
};

export default Table;

import React from 'react';
import PropTypes from 'prop-types';
import { rowPropType, updatePropType } from '../data/shape';
import TableRow from './tableRow';

function Table (props){
  const { tableData, receiveDeleteTarget, receiveUpdateTarget, updatedStyle } = props;
  let tableRow = tableData.map((item, index) => {
    return(
      <TableRow
        key={item.seq}
        index={index+1}
        row={item}
        onDelete={receiveDeleteTarget}
        onUpdate={receiveUpdateTarget}
        updatedStyle={updatedStyle}
      />
    );
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
}

Table.propTypes = {
  tableData: PropTypes.arrayOf(rowPropType),
  receiveDeleteTarget: PropTypes.func,
  receiveUpdateTarget: PropTypes.func,
  updatedStyle: updatePropType
};

Table.defaultProps = {
  tableData: [],
  receiveDeleteTarget: () => {},
  receiveUpdateTarget: () => {},
  updatedStyle: {}
};

export default Table;
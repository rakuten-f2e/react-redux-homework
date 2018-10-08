import React from 'react';
import PropTypes from 'prop-types';
import { rowPropType, updatePropType } from '../types/shape';
import Delete from '../action/delete';
import Update from '../action/update';

const TableRow = (props) => {
  const {
    index,
    row,
    updatedStyle,
    onDelete,
    onUpdate,
  } = props;
  const {
    seq,
    status,
    category,
    title,
    owner,
    priority,
  } = row;
  const isEven = (index % 2 === 0);
  const className = isEven ? 'table__row table__row--even' : 'table__row table__row--odd';
  const rowStyle = {
    backgroundColor: updatedStyle.seq === seq ? updatedStyle.color : '',
  };

  return (
    <tr className={className} style={rowStyle}>
      <td>{seq}</td>
      <td>{status}</td>
      <td>{category}</td>
      <td>{title}</td>
      <td>{owner}</td>
      <td>{priority}</td>
      <td>
        <Delete target={seq} onDelete={onDelete} />
        <Update target={seq} onUpdate={onUpdate} />
      </td>
    </tr>
  );
};

TableRow.propTypes = {
  index: PropTypes.number,
  row: rowPropType.isRequired,
  onDelete: PropTypes.func.isRequired,
  onUpdate: PropTypes.func.isRequired,
  updatedStyle: updatePropType,
};

TableRow.defaultProps = {
  index: 0,
  updatedStyle: {},
};

export default TableRow;

import React from 'react';
import PropTypes from 'prop-types';
import DeleteContainer from '../containers/deleteContainer';
import TableCellContainer from '../containers/tableCellContainer';
import { rowPropType } from '../types/shape';

const TableRow = (props) => {
  const {
    index,
    row,
  } = props;
  const {
    seq,
    status,
    category,
    title,
    owner,
    priority,
  } = row;
  const name = [
    'status',
    'category',
    'title',
    'owner',
    'priority',
  ];
  const editableCol = [
    status,
    category,
    title,
    owner,
    priority,
  ];

  const isEven = (index % 2 === 0);
  const className = isEven ? 'table__row table__row--even' : 'table__row table__row--odd';
  const editableCell = editableCol.map((item, itemIndex) => {
    const cellData = {
      id: seq,
      name: name[itemIndex],
      value: item,
    };
    return (
      <TableCellContainer
        key={cellData.name + seq}
        cellData={cellData}
      />);
  });

  return (
    <tr className={className}>
      <td>{seq}</td>
      {editableCell}
      <td>
        <DeleteContainer target={row} />
      </td>
    </tr>
  );
};

TableRow.propTypes = {
  index: PropTypes.number,
  row: rowPropType.isRequired,
};

TableRow.defaultProps = {
  index: 0,
};

export default TableRow;

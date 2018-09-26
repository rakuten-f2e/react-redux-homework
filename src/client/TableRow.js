import React from 'react';
import PropTypes from 'prop-types';
import Delete from './Delete';

class TableRow extends React.Component{
  render(){
    const isEven = (this.props.index % 2 === 0);
    const className = isEven ? 'table__row table__row--even' : 'table__row table__row--odd';
    const rowData = {
      index: this.props.index,
      seq: this.props.seq,
      status: this.props.status,
      category: this.props.category,
      title: this.props.title,
      owner: this.props.owner,
      priority: this.props.priority
    };

    return (
      <tr className={className}>
        <td>{this.props.seq}</td>
        <td>{this.props.status}</td>
        <td>{this.props.category}</td>
        <td>{this.props.title}</td>
        <td>{this.props.owner}</td>
        <td>{this.props.priority}</td>
        <td><Delete rowData={rowData} onClick={this.props.onClick}/></td>
      </tr>
    );
  }
}

TableRow.propTypes = {
  index: PropTypes.number,
  seq: PropTypes.number,
  status: PropTypes.string,
  category: PropTypes.string,
  title: PropTypes.string,
  owner: PropTypes.string,
  priority: PropTypes.string,
  onClick: PropTypes.func
};

export default TableRow;
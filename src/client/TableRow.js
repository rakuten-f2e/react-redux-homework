import React from 'react';
import PropTypes from 'prop-types';
import Delete from './Delete';
import Update from './Update';

class TableRow extends React.Component{
  render(){
    const isEven = (this.props.index % 2 === 0);
    const className = isEven ? 'table__row table__row--even' : 'table__row table__row--odd';
    const rowStyle = (this.props.updatedStyle.seq === this.props.seq) ? this.props.updatedStyle.color : '';
    const target = {
      seq: this.props.seq
    };

    return (
      <tr className={className} style={{backgroundColor: rowStyle}}>
        <td>{this.props.seq}</td>
        <td>{this.props.status}</td>
        <td>{this.props.category}</td>
        <td>{this.props.title}</td>
        <td>{this.props.owner}</td>
        <td>{this.props.priority}</td>
        <td>
          <Delete target={target} onDelete={this.props.onDelete}/>
          <Update target={target} onUpdate={this.props.onUpdate}/>
        </td>
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
  onDelete: PropTypes.func,
  onUpdate: PropTypes.func,
  updatedStyle: PropTypes.object
};

export default TableRow;
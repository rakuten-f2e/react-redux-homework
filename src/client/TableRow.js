import React from 'react';

class TableRow extends React.Component{
  render(){
    
    const isEven = (this.props.seq % 2 === 0) ? true : false;
    const className = isEven ? 'table__row table__row--even' : 'table__row table__row--odd';
    return (
      <tr className={className}>
        <td>{this.props.seq}</td>
        <td>{this.props.status}</td>
        <td>{this.props.category}</td>
        <td>{this.props.title}</td>
        <td>{this.props.owner}</td>
        <td>{this.props.priority}</td>
      </tr>
    );
  };
}

export default TableRow;
import React from 'react';
import PropTypes from 'prop-types';
import TableRow from './TableRow';

class Table extends React.Component{
  render(){
    const tableData = this.props.tableData;
    let tableRow = [];

    tableRow = tableData.map((item, index) => {
      return(
        <TableRow
          key={index+1}
          index={index+1}
          seq={item.seq} 
          status={item.status}
          category={item.category}
          title={item.title}
          owner={item.owner}
          priority={item.priority}
          onClick={this.props.receiveDeleteTarget}
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
}

Table.propTypes = {
  tableData: PropTypes.array.isRequired,
  receiveDeleteTarget: PropTypes.func
};

export default Table;
import React from 'react';
import TableRow from './TableRow';
class Table extends React.Component{
  render(){
    const tableData = this.props.tableData;
    const tableRow = tableData.map(item => {
      return(
        <TableRow
        key={item.seq}
        seq={item.seq} 
        status={item.status}
        category={item.category}
        title={item.title}
        owner={item.owner}
        priority={item.priority}
        />
      );
    }
    );
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

export default Table;
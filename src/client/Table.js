import React from 'react';
import data from './data.json';

function TableItem(props){
  const isEven = (props.seq % 2 === 0) ? true : false;
  const className = isEven ? 'table__row table__row--even' : 'table__row table__row--odd';

  return(
    <tr className={className}>
        <td>{props.seq}</td>
        <td>{props.status}</td>
        <td>{props.category}</td>
        <td>{props.title}</td>
        <td>{props.owner}</td>
        <td>{props.priority}</td>
      </tr>
  )
}

function ShowTable(props){
  const tableData = props.tableData;
  const tableItems = tableData.map((item) => 
    <TableItem key={item.seq}
                seq={item.seq} 
                status={item.status}
                category={item.category}
                title={item.title}
                owner={item.owner}
                priority={item.priority} />
    );
  return (
    <div className="table">
      <table align="center" rules="all" className="table__main">
        <tbody className="table__body">
          <tr className="table__header">
            <th>seq</th>
            <th>Status</th>
            <th>Category</th>
            <th>Title</th>
            <th>Owner</th>
            <th>Priority</th>
          </tr>
          {tableItems}
        </tbody>
      </table>
    </div>
  )
}
class Table extends React.Component{

  render(){
    return (
      <ShowTable tableData={data}/> 
    );
  }
}

export default Table;
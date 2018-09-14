import React from 'react';
import data from './data.json';

function TableItem(props){

  if(props.seq % 2){
    return (
        <tr className="Row-odd">
            <td>{props.seq}</td>
            <td>{props.Status}</td>
            <td>{props.Category}</td>
            <td>{props.Title}</td>
            <td>{props.Owner}</td>
            <td>{props.Priority}</td>
        </tr>
    );
  }
  else{
    return (
      <tr className="Row-even" style={{backgroundColor: 'lightgrey'}}>
          <td>{props.seq}</td>
          <td>{props.Status}</td>
          <td>{props.Category}</td>
          <td>{props.Title}</td>
          <td>{props.Owner}</td>
          <td>{props.Priority}</td>
      </tr>
    );
  }
}
function ShowTable(props){
    const tableData = props.tableData;
    const tableItems = tableData.map((item) => 
        <TableItem key={item.seq}
                  seq={item.seq} 
                  Status={item.Status}
                  Category={item.Category}
                  Title={item.Title}
                  Owner={item.Owner}
                  Priority={item.Priority} />
    );
    return (
        <div className="Table-container">
            <table align="center" rules="all" className="Table">
                <tbody>
                    <tr className="Table-header">
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
const tableData = data;
class Table extends React.Component{

    render(){
        return (
            <div className="Home-table"> 
              <ShowTable tableData={tableData}/>
            </div>  
        );
    }
}

export default Table;
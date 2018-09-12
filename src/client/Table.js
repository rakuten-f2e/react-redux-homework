import React from 'react';
import data from './data.json';

function TableItem(props){
    return (
        <tr>
            <td>{props.seq}</td>
            <td>{props.Status}</td>
            <td>{props.Category}</td>
            <td>{props.Title}</td>
            <td>{props.Owner}</td>
            <td>{props.Priority}</td>
        </tr>
    );
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
                    <tr>
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
    constructor(props){
        super(props);
        this.state = {date: new Date(), id: 7699, name: 'Sean'};
    }
    componentDidMount(){
        this.timeID = setInterval(() => this.tick(), 1000);
    }
    componentWillUnmount(){
        clearInterval(this.timeID);
    }
    tick(){
        this.setState({
            date: new Date()
        });
    }

    render(){
        return (
            <div> 
                <div>
                    {this.state.date.toLocaleTimeString()}
                </div>
                <div>
                    <ShowTable tableData={tableData}/>
                </div>
            </div>  
        );
    }
}

export default Table;
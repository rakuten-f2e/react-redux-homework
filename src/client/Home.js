import React from 'react';
import './home.css';
import data from './data.json';
import Create from './Create';
import Read from './Read';
import Table from './Table';
import Footer from './Footer';

class Home extends React.Component {
  constructor(props){
    super(props);
    this.state = {data: data, root: data};
    this.receiveCreatedData = this.receiveCreatedData.bind(this);
    this.receiveSearchData = this.receiveSearchData.bind(this);
  }

  receiveCreatedData(e){
    let tableData = this.state.root;
    const newData = {
      seq: parseInt(e.target.seq.value, 10),
      status: e.target.status.value,
      category: e.target.category.value,
      title: e.target.title.value,
      owner: e.target.owner.value,
      priority: e.target.priority.value
    };
    tableData.push(newData);
    this.setState({data: tableData, root: this.state.root});
  }

  receiveSearchData(e){
    let tableData = this.state.root;
    if(e.target.key.value === 'seq'){
      const queryData = tableData.filter(data => data.seq === parseInt(e.target.search.value, 10));
      this.setState({data: queryData, root: this.state.root});
    }
    else if(e.target.key.value === 'owner'){
      const queryData = tableData.filter(data => data.owner === e.target.search.value);
      this.setState({data: queryData, root: this.state.root});
    }
  }

  render() {
    return (
      <div className="home">
        <div className="home__container">
          <h1>React-Redux Homework</h1>
          <div className="toolbar">
            <Create receiveCreatedData={this.receiveCreatedData}/>
            <Read receiveSearchData={this.receiveSearchData}/>
          </div>
          <Table tableData={this.state.data}/>
          <Footer />
        </div>
      </div>
    );
  }
}

export default Home;

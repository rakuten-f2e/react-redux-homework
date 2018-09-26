import React from 'react';
import './home.css';
import data from './data.json';
import Create from './Create';
import Table from './Table';
import Footer from './Footer';

class Home extends React.Component {
  constructor(props){
    super(props);
    this.state = {data: data};
    this.receiveCreatedData = this.receiveCreatedData.bind(this);
  }

  receiveCreatedData(e){
    let tableData = this.state.data;
    const newData = {
      seq: parseInt(e.target.seq.value, 10),
      status: e.target.status.value,
      category: e.target.category.value,
      title: e.target.title.value,
      owner: e.target.owner.value,
      priority: e.target.priority.value
    };
    tableData.push(newData);
    this.setState({data: tableData});
  }

  render() {
    return (
      <div className="home">
        <div className="home__container">
          <h1>React-Redux Homework</h1>
          <Create receiveCreatedData={this.receiveCreatedData}/>
          <Table tableData={this.state.data}/>
          <Footer />
        </div>
      </div>
    );
  }
}

export default Home;

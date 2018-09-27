import React from 'react';
import './home.css';
import data from './data.json';
import Create from './Create';
import CreateRow from './CreateRow';
import Read from './Read';
import Table from './Table';
import Footer from './Footer';

class Home extends React.Component {
  constructor(props){
    super(props);
    this.state = {data: data, root: data, update: {}, warning: false, display: 'none'};
    this.receiveCreatedData = this.receiveCreatedData.bind(this);
    this.receiveSearchData = this.receiveSearchData.bind(this);
    this.receiveDeleteTarget = this.receiveDeleteTarget.bind(this);
    this.receiveUpdateTarget = this.receiveUpdateTarget.bind(this);
    this.receiveUpdateData = this.receiveUpdateData.bind(this);
  }

  receiveCreatedData(e){
    let tableData = this.state.root;
    const isSeqDuplicate = tableData.map(data => data.seq).indexOf(parseInt(e.target.seq.value, 10));
    
    if(isSeqDuplicate === -1){
      const newData = {
        seq: parseInt(e.target.seq.value, 10),
        status: e.target.status.value,
        category: e.target.category.value,
        title: e.target.title.value,
        owner: e.target.owner.value,
        priority: e.target.priority.value
      };
      
      tableData.push(newData);
      this.setState({data: tableData, root: this.state.root, warning: false});
    }
    else{
      this.setState({data: tableData, root: this.state.root, warning: true});
    }
  }

  receiveSearchData(e){
    let tableData = this.state.root;

    if(e.target.key.value === 'seq'){
      const queryData = tableData.filter(data => data.seq === parseInt(e.target.search.value, 10));
      this.setState({data: queryData, root: this.state.root, warning: false});
    }
    else if(e.target.key.value === 'owner'){
      const queryData = tableData.filter(data => data.owner === e.target.search.value);
      this.setState({data: queryData, root: this.state.root, warning: false});
    }
  }

  receiveDeleteTarget(e){
    let tableData = this.state.root;
    const index = tableData.map(data => data.seq).indexOf(e.seq);

    tableData.splice(index, 1);
    this.setState({data: tableData, root: this.state.root, warning: false});
  }

  receiveUpdateTarget(e){
    e.isClicked = true;
    this.setState({update: e, display: 'block'});
  }

  receiveUpdateData(e){
    let tableData = this.state.root;
    const index = tableData.map(data => data.seq).indexOf(this.state.update.seq);
    const isSeqDuplicate = tableData.map(data => data.seq).indexOf(parseInt(e.target.seq.value, 10));

    if(isSeqDuplicate === -1 || parseInt(e.target.seq.value, 10) === tableData[index].seq){
      tableData[index] = {
        seq: parseInt(e.target.seq.value, 10),
        status: e.target.status.value,
        category: e.target.category.value,
        title: e.target.title.value,
        owner: e.target.owner.value,
        priority: e.target.priority.value
      };
      this.setState({data: tableData, root: this.state.root, warning: false, display: 'none'});
    }
    else{
      this.setState({data: tableData, root: this.state.root, warning: true});
    }
  }

  render() {
    return (
      <div className="home">
        <div className="home__container">
          <h1>React-Redux Homework</h1>
          <div className="home__toolbar">
            <Create receiveCreatedData={this.receiveCreatedData}/>
            <Read receiveSearchData={this.receiveSearchData}/>
          </div>
          <Table 
            tableData={this.state.data} 
            receiveDeleteTarget={this.receiveDeleteTarget}
            receiveUpdateTarget={this.receiveUpdateTarget}
          />
          <div className="home__update" style={{display: this.state.display}}>
            <CreateRow 
              isClicked={this.state.update.isClicked}
              onSubmit={this.receiveUpdateData}
            />
          </div>
          <Footer />
        </div>
      </div>
    );
  }
}

export default Home;

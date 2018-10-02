import React from 'react';
import '../assets/home.css';
import data from '../data/data.json';
import Create from '../action/create';
import CreateRow from '../action/createRow';
import Read from '../action/read';
import Table from './table';
import Footer from './footer';

class Home extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      data: data, 
      root: data, 
      update: {},
      display: 'none',
      isCreate: false,
      isRead: false
    };

    this.onClicked = this.onClicked.bind(this);
    this.receiveCreatedData = this.receiveCreatedData.bind(this);
    this.receiveSearchData = this.receiveSearchData.bind(this);
    this.receiveDeleteTarget = this.receiveDeleteTarget.bind(this);
    this.receiveUpdateTarget = this.receiveUpdateTarget.bind(this);
    this.receiveUpdateData = this.receiveUpdateData.bind(this);
  }

  onClicked(e){
    const toBool = (e.target.value === 'false');
    switch(e.target.name){
    case 'create':
      this.setState({isCreate: toBool});
      break;
    case 'read':
      this.setState({isRead: toBool});
      break;
    default:
      break;
    }
  }

  receiveCreatedData(e){
    const { root } = this.state;
    let tableData = root;
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
      this.setState({data: tableData});
    }
    // else{
    //   this.setState({data: tableData});
    // }
  }

  receiveSearchData(e){
    const { root } = this.state;
    let tableData = root;

    if(e.target.search.value === ''){
      this.setState({data: tableData});
    }
    else if(e.target.key.value === 'seq'){
      const queryData = tableData.filter(data => data.seq === parseInt(e.target.search.value, 10));
      this.setState({data: queryData});
    }
    else if(e.target.key.value === 'owner'){
      const queryData = tableData.filter(data => data.owner.toLowerCase().indexOf(e.target.search.value.toLowerCase()) > -1);
      this.setState({data: queryData});
    }
  }

  receiveDeleteTarget(e){
    const { root } = this.state;
    let tableData = root;
    const index = tableData.map(data => data.seq).indexOf(e.seq);

    tableData.splice(index, 1);
    this.setState({data: tableData});
  }

  receiveUpdateTarget(e){
    e.isClicked = true;
    this.setState({update: e, display: 'block'});
  }

  receiveUpdateData(e){
    const { root, update } = this.state;
    let tableData = root;
    const index = tableData.map(data => data.seq).indexOf(update.seq);
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
      const updatedRowData = {
        seq: parseInt(e.target.seq.value, 10),
        color: 'lightblue'
      };
      this.setState({data: tableData, display: 'none', update: updatedRowData});
    }
    // else{
    //   this.setState({data: tableData});
    // }
  }

  render() {
    const { data, update, display, isCreate, isRead } = this.state;
    return (
      <div className="home">
        <div className="home__container">
          <h1>React-Redux Homework</h1>
          <div className="home__toolbar">
            <Create receiveCreatedData={this.receiveCreatedData} onCreate={this.onClicked} isClicked={isCreate} />
            <Read receiveSearchData={this.receiveSearchData} onRead={this.onClicked} isClicked={isRead} />
          </div>
          <Table 
            tableData={data} 
            receiveDeleteTarget={this.receiveDeleteTarget}
            receiveUpdateTarget={this.receiveUpdateTarget}
            updatedStyle={update}
          />
          <div className="home__update" style={{display: display}}>
            <CreateRow 
              isClicked={update.isClicked}
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

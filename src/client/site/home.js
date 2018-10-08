import React from 'react';
import '../assets/home.css';
import fakeData from '../data/data.json';
import Create from '../action/create';
import CreateRow from '../action/createRow';
import Read from '../action/read';
import Table from './table';
import Footer from './footer';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: fakeData,
      root: fakeData,
      update: {},
      display: 'none',
      isCreate: false,
      isRead: false,
      warning: '',
    };

    this.onClicked = this.onClicked.bind(this);
    this.receiveCreatedData = this.receiveCreatedData.bind(this);
    this.receiveSearchData = this.receiveSearchData.bind(this);
    this.receiveDeleteTarget = this.receiveDeleteTarget.bind(this);
    this.receiveUpdateTarget = this.receiveUpdateTarget.bind(this);
    this.receiveUpdateData = this.receiveUpdateData.bind(this);
  }

  onClicked(e) {
    const toBool = (e.target.value === 'false');
    switch (e.target.name) {
    case 'create':
      this.setState({ isCreate: toBool });
      break;
    case 'read':
      this.setState({ isRead: toBool });
      break;
    default:
      break;
    }
  }

  receiveCreatedData(formData) {
    const { root } = this.state;
    const tableData = root;
    const isSeqDuplicate = tableData.map(row => row.seq).indexOf(parseInt(formData.seq, 10));
    if (isSeqDuplicate === -1) {
      const newData = {
        seq: parseInt(formData.seq, 10),
        status: formData.status,
        category: formData.category,
        title: formData.title,
        owner: formData.owner,
        priority: formData.priority,
      };
      tableData.push(newData);
      this.setState({ data: tableData, warning: '' });
    } else {
      this.setState({ warning: 'Seq cannot be duplicated' });
    }
  }

  receiveSearchData(searchData) {
    const { root } = this.state;
    const tableData = root;

    if (searchData.search === '') {
      this.setState({ data: tableData });
    } else if (searchData.key === 'seq') {
      const queryData = tableData.filter(row => row.seq === parseInt(searchData.search, 10));
      this.setState({ data: queryData });
    } else if (searchData.key === 'owner') {
      const queryData = tableData.filter(row => row.owner
        .toLowerCase()
        .indexOf(searchData.search.toLowerCase()) > -1);
      this.setState({ data: queryData });
    }
  }

  receiveDeleteTarget(target) {
    const { root } = this.state;
    const tableData = root;
    const index = tableData.map(row => row.seq).indexOf(target);

    tableData.splice(index, 1);
    this.setState({ data: tableData });
  }

  receiveUpdateTarget(e) {
    this.setState({ update: e, display: 'block' });
  }

  receiveUpdateData(formData) {
    const { root, update } = this.state;
    const tableData = root;
    const index = tableData.map(row => row.seq).indexOf(update.seq);
    const isSeqDuplicate = tableData.map(row => row.seq).indexOf(parseInt(formData.seq, 10));

    if (isSeqDuplicate === -1 || parseInt(formData.seq, 10) === tableData[index].seq) {
      tableData[index] = {
        seq: parseInt(formData.seq, 10),
        status: formData.status,
        category: formData.category,
        title: formData.title,
        owner: formData.owner,
        priority: formData.priority,
      };
      const updatedRowData = {
        seq: parseInt(formData.seq, 10),
        color: 'lightblue',
      };
      this.setState({
        data: tableData,
        display: 'none',
        update: updatedRowData,
        warning: '',
      });
    } else {
      this.setState({ warning: 'Seq cannot be duplicated' });
    }
  }

  render() {
    const {
      data,
      update,
      display,
      isCreate,
      isRead,
      warning,
    } = this.state;
    return (
      <div className="home">
        <div className="home__container">
          <h1>React-Redux Homework</h1>
          <p style={{ color: 'red' }}>{warning}</p>
          <div className="home__toolbar">
            <Create
              receiveCreatedData={this.receiveCreatedData}
              onCreate={this.onClicked}
              isClicked={isCreate}
            />
            <Read
              receiveSearchData={this.receiveSearchData}
              onRead={this.onClicked}
              isClicked={isRead}
            />
          </div>
          <Table
            tableData={data}
            receiveDeleteTarget={this.receiveDeleteTarget}
            receiveUpdateTarget={this.receiveUpdateTarget}
            updatedStyle={update}
          />
          <div className="home__update" style={{ display }}>
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

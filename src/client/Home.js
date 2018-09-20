import React from 'react';
import './home.css';
import data from './data.json';
import Table from './Table';
import Footer from './Footer';


class Home extends React.Component {
  render() {
    return (
      <div className="home">
        <div className="home__container">
          <h1>React-Redux Homework</h1>
          <Table tableData={data}/>
          <Footer />
        </div>
      </div>
    );
  }
}

export default Home;

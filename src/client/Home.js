import React from 'react';
import logo from './react.svg';
import './home.css';
import Table from './Table';
import Footer from './Footer';


class Home extends React.Component {
  render() {
    return (
      <div className="Home">
        <div className="Home-header">
          <img src={logo} className="Home-logo" alt="logo" />
          <h2>Welcome to Razzle</h2>
        </div>
        <Table />
        <Footer />
      </div>
    );
  }
}

export default Home;

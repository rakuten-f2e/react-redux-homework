import React from 'react';
import '../assets/home.css';
import SearchBarContainer from '../containers/searchBarContainer';
import CreateBtnContainer from '../containers/createBtnContainer';
import TableContainer from '../containers/tableContainer';
import Footer from './footer';

const Home = () => (
  <div className="home">
    <h1>React-Redux Homework</h1>
    <SearchBarContainer />
    <CreateBtnContainer />
    <TableContainer />
    <Footer />
  </div>
);

export default Home;

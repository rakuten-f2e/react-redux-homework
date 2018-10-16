import React from 'react';
import '../assets/home.css';
import ReadContainer from '../containers/readContainer';
import CreateContainer from '../containers/createContainer';
import TableContainer from '../containers/tableContainer';
import Footer from './footer';

const Home = () => (
  <div className="home">
    <h1>React-Redux Homework</h1>
    <ReadContainer />
    <CreateContainer />
    <TableContainer />
    <Footer />
  </div>
);

export default Home;

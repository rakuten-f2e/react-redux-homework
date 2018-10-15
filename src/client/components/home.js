import React from 'react';
import '../assets/home.css';
import Filter from '../containers/filter';
import CreateRow from '../containers/createRow';
import VisibleTable from '../containers/visibleTable';
import Footer from './footer';

const Home = () => (
  <div className="home">
    <h1>React-Redux Homework</h1>
    <Filter />
    <CreateRow />
    <VisibleTable />
    <Footer />
  </div>
);

export default Home;

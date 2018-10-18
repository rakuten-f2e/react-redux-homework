import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import tableReducer from './reducers';
import fakeData from './data/data';
import App from './app';

const initialState = {
  table: fakeData,
  readFilter: '',
};
const store = createStore(tableReducer, initialState);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);

if (module.hot) {
  module.hot.accept();
}

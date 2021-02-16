import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import App from './App';
import { Provider } from 'react-redux';
import { reducer } from './reducers';
import 'bulma/css/bulma.css';
import './styles.scss';

const store = createStore(reducer);
// console.log("store:", store.getState())

const rootElement = document.getElementById('root');
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);

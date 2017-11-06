import React from 'react';
import { render } from 'react-dom'
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Main from './containers/main';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);
console.log('hello');
render(
  <Provider store={Store} >
    <Main/>
  </Provider>,
  document.getElementById('app')
);

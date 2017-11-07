import React from 'react';
import { render } from 'react-dom'
import { Provider } from 'react-redux';
import promise from 'redux-promise';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Store from './store';

import Main from './containers/main';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);
render(
  <Provider store={Store} >
    <Main/>
  </Provider>,
  document.getElementById('app')
);

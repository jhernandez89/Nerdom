import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import {routerReducer, routerMiddleware} from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';

const history = createHistory();
const middleware = routerMiddleware(history);
const store = createStore(combineReducers(
  {
    routing: routerReducer
  }
  ),
  compose(
    applyMiddleware(middleware)
  )
);
export { store, history };


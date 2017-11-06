import {createStore, combineReducers} from 'redux';
import selectedVideo from './reducers/video';
import {routerReducer} from 'react-router-redux'
const store = createStore(combineReducers(
  {video: selectedVideo, routing: routerReducer}
  ));
export default store;
import { FETCH_POSTS } from '../actions/index';

const mainData = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_POSTS:
    return {
      ...state,
      mainData: action.request
    }
  }
}
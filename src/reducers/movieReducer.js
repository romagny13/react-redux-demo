import * as types from '../actions/actionTypes';

export default function courseReducer(state = [], action) {

  // return new state updated (immutable) 
  switch (action.type) {
    case types.SEARCH_MOVIES_SUCCESS:
      return action.movies;
    default:
      return state;
  }
}

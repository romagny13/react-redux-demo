import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

// reducers
import movies from '../reducers/movieReducer';

export default createStore(
    combineReducers({ movies }),
    {},
    applyMiddleware(thunk)
);
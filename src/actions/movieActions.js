import * as types from './actionTypes';
import { movieAPI } from '../api/MovieAPI';

export function searchMoviesSuccess(movies) {
    return { type: types.SEARCH_MOVIES_SUCCESS, movies };
}

export function searchMovies(search) {
    /*  const movies = [
          { title: 'Movie 1' },
          { title: 'Movie 2' }
      ];
      return { type: types.SEARCH_MOVIES_SUCCESS, movies };*/

    // Async
    return (dispatch) => {
        return movieAPI.searchMovies(search).then((movies) => {
            dispatch(searchMoviesSuccess(movies));
        });
    };
}

import React, { PropTypes } from 'react';
import Movie from './Movie';

const MovieList = ({movies}) => {
    return (
        <div>
            {
                movies.map((movie, i) => {
                    return (
                        <Movie movie={movie} key={i} />
                    );
                })
            }
        </div>
    );
};

MovieList.propTypes = {
    movies: PropTypes.array.isRequired
};

export default MovieList;
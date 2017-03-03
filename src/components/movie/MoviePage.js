import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// components
import SearchForm from './SearchForm';
import MovieList from './MovieList';

// actions
import * as movieActions from '../../actions/movieActions';

class MoviePage extends React.Component {
    render() {
        return (
            <div>
                <h1 className="text-center">Search For A Movie</h1>
                <SearchForm actions={this.props.actions} />
                <br />
                <MovieList movies={this.props.movies} />
            </div>
        );
    }
}

MoviePage.propTypes = {
    actions:PropTypes.object.isRequired,
    movies: PropTypes.array.isRequired
};

const mapStateToProps = (state) => {
    return {
        movies: state.movies,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(movieActions, dispatch)
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(MoviePage);
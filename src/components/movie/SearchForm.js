import React, { PropTypes } from 'react';

import { searchMovies } from '../../actions/movieActions';

class SearchForm extends React.Component {
    constructor(props) {
        super(props);

        // initial state
        this.state = {
            search: ''
        };

        this.onSearchChange = this.onSearchChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onSearchChange(event) {
        const search = event.target.value;
        this.setState({ search });
    }

    onSubmit(event) {
        event.preventDefault();
        this.props.actions.searchMovies(this.state.search);
    }

    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <div className="input-group">
                    <input type="text" value={this.state.search} onChange={this.onSearchChange} className="form-control" placeholder="Enter a movie title ..." />
                    <span className="input-group-btn">
                        <button value="Submit" className="btn btn-default" type="button">Search Movies</button>
                    </span>
                </div>
            </form>
        );
    }
}

SearchForm.propTypes = {
    actions:PropTypes.object.isRequired
};


export default SearchForm;
import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

// components
import Header from '../components/common/Header';

class App extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <div className="container">
                    {this.props.children}
                </div>
            </div>
        );
    }
}

App.propTypes = {
    children: PropTypes.object.isRequired
};

export default App;
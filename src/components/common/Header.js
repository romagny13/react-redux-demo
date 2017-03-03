import React from 'react';
import { Link, IndexLink } from 'react-router';

const Header = () => {
    return (
        <nav className="navbar navbar-default">
            <div className="container">
                <div className="navbar-header">
                    <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false"
                        aria-controls="navbar">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar" />
                        <span className="icon-bar" />
                        <span className="icon-bar" />
                    </button>
                    <a className="navbar-brand em-text" href="#">React Redux</a>
                </div>
                <div id="navbar" className="collapse navbar-collapse">
                    <ul className="nav navbar-nav">
                        <li><IndexLink to="/" activeClassName="active">Home</IndexLink></li>
                        <li><Link to="/movie" activeClassName="active">Movie</Link></li>
                        <li><Link to="/about" activeClassName="active">About</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};
export default Header;
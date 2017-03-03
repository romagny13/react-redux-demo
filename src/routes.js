import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import HomePage from './components/home/HomePage';
import MoviePage from './components/movie/MoviePage';
import AboutPage from './components/about/AboutPage';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={HomePage} />
        <Route path="movie" component={MoviePage} />
        <Route path="about" component={AboutPage} />
    </Route>
);

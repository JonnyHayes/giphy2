import React from 'react';
import SearchForm from '../search-form/search-form.container';
import SearchResults from '../search-results/search-results.container';
import Navigation from '../navigation/navigation.container';
export default ({ children }) => (
    <div>
        <Navigation />
        { children }
    </div>
);
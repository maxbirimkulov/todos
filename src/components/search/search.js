import React from 'react';
import './search.css'

const Search = ({setSearchInput}) => {
    return (
        <input className='search-input' type="text" placeholder='search todo'
               onChange={(e) => setSearchInput(e.target.value)}/>
    );
};

export default Search;
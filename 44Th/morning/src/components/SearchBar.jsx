import React from 'react'
import Dropdown from './Dropdown';

function SearchBar({
    searchValue,
    handleInputChange,
    handleSearchClick,
    handleKeyPress })
    {
    return (
        <div className='searchBar-container' onKeyUp={handleKeyPress}>
            <input className='searchBar-input' value={searchValue} onChange={handleInputChange} />
            <Dropdown>
                <p>Item 1</p>
                <p>Item 2</p>
                <p>Item 3</p>
            </Dropdown>
            <button className='searchBar-button' onClick={handleSearchClick}>Search</button>
        </div>
    );
}

export default SearchBar
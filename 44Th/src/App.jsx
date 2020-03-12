import React, { useState, useEffect } from 'react';
import './App.css';
import SearchBar from './components/SearchBar'
import SearchResults from './components/SearchResults'

const url = 'https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&origin=*&srsearch=';
const pageOffsetPrefix = '&sroffset=';

const App = () => {
  const [ searchValue, setSearchValue ] = useState('');
  const [ currentOffset, setCurrentOffset ] = useState(0);
  const [ searchResults, setSearchResults ] = useState([]);

  const handleInputChange = (e) => {
    setSearchValue(e.target.value)
  };

  const handleSearchClick = () => {
    if (currentOffset !== 0) {
      setCurrentOffset(0);
    }
    else {
      getSearchResults();
    }
  };

  const handleKeyPress = (e) => {
    if (currentOffset !== 0) {
      if(e.key === 'Enter') setCurrentOffset(0);
    }
    else {
      if(e.key === 'Enter') getSearchResults();
    }
  };

  const getSearchResults = async () => {
    if(searchValue) {
      const pageUrl = `${url}${searchValue}${pageOffsetPrefix}${currentOffset}`;
      const response = await fetch(pageUrl);
      const data = await response.json();
      setSearchResults(data.query.search);
    }
  };

  const handleNextPageClick = () => {
    setCurrentOffset(currentOffset + 10);
  };

  useEffect(() => {
    getSearchResults();
  }, [currentOffset]);

  return (
    <div className="App">
      <SearchBar
        searchValue={searchValue}
        handleInputChange={handleInputChange}
        handleSearchClick={handleSearchClick}
        handleKeyPress={handleKeyPress}
      />
      <SearchResults searchResults={searchResults} handleNextPageClick={handleNextPageClick} page={Math.ceil(currentOffset / 10) + 1} />
  </div>
  );
};

export default App;

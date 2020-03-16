import React from 'react'

const SearchResults = ({ searchResults, handleNextPageClick, page }) => {
    if (searchResults.length > 0) {
        const links = searchResults.map((result, index) => {
            return (
                <>
                    <div key={`link${index}`}>
                        <a href={`https://en.wikipedia.org/wiki/${result.title}`} target='_blank' rel="noopener noreferrer">{result.title}</a>
                        <br />
                    </div>
                </>
            );
        });
        return (
            <>
                <br />
                <div className='searchResults-container'>
                    {
                        links
                    }
                </div>
                <br />
                Page {page} <button onClick={handleNextPageClick}>Next Page</button>
            </>
        );
    }
    else {
        return (
            <></>
        );
    }  
}

export default SearchResults
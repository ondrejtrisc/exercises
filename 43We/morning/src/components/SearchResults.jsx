import React, { Component } from 'react'

class SearchResults extends Component {
    render() {

        const { results } = this.props;

        console.log('results', results);
        let links = [];
        if (results) {
            links = results.map((result, index) => {
                return (
                    <>
                        <a key={`result-link-${index}`} href={`https://en.wikipedia.org/wiki/${result.title}`} target="_blank" rel="noopener noreferrer">{result.title}</a>
                        <br />
                    </>
                );
            });
        }
        return (
            <div className='searchResults-container'>
               {links}
            </div>
        )
    }
}

export default SearchResults
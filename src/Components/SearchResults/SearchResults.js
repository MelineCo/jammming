import React from 'react';
import Tracklist from '../Tracklist/Tracklist';

function SearchResults( {searchResults} ) {
  return (
    <div>
      <Tracklist searchResults={searchResults} />
    </div>
  )
}

export default SearchResults

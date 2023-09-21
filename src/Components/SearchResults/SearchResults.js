import React from 'react';
import Tracklist from '../Tracklist/Tracklist';
import styles from "./SearchResults.module.css";

function SearchResults( {searchResults} ) {
  return (
    <div className={styles.list}>
      <h2 className={styles.h2}>Results</h2>
      <Tracklist searchResults={searchResults} />
    </div>
  )
}

export default SearchResults

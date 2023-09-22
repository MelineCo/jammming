import React from 'react';
import Tracklist from '../Tracklist/Tracklist';
import styles from "./SearchResults.module.css";

function SearchResults( {searchResults, addSong} ) {
  const isRemoval= false;
  return (
    <div className={styles.list}>
      <h2 className={styles.h2}>Results</h2>
      <Tracklist tracks={searchResults} addSong={addSong} isRemoval={isRemoval} />
    </div>
  )
}

export default SearchResults

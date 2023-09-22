import React from 'react';
import Tracklist from '../Tracklist/Tracklist';
import styles from "./SearchResults.module.css";

function SearchResults( {searchResults, addSong} ) {
  const button = true;
  return (
    <div className={styles.list}>
      <h2 className={styles.h2}>Results</h2>
      <Tracklist searchResults={searchResults} addSong={addSong} button={button} />
    </div>
  )
}

export default SearchResults

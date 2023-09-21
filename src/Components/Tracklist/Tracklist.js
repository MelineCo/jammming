import React from 'react';
import Track from '../Track/Track';
import styles from './Tracklist.module.css';

function Tracklist( {searchResults} ) {
  return (
    <div className={styles.list}>
      <h2 className={styles.h2}>Results</h2>
      {searchResults?.map((track, index) => {
        return <Track key={index} title={track.title} artist={track.artist} album={track.album} />
      })}
    </div>
  )
}

export default Tracklist
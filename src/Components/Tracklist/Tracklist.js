import React from 'react';
import Track from '../Track/Track';
import styles from './Tracklist.module.css';

function Tracklist( {searchResults, addSong, button} ) {
  return (
    <div className={styles.list}>
      {searchResults?.map((track, index) => {
        return <Track key={index} title={track.title} artist={track.artist} album={track.album} id={track.id}  addSong={addSong} button={button} />
      })}
    </div>
  )
}

export default Tracklist
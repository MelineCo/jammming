import React from 'react';
import Track from '../Track/Track';
import styles from './Tracklist.module.css';

function Tracklist( {tracks, addSong, isRemoval} ) {
  return (
    <div className={styles.list}>
      {tracks?.map((track, index) => {
        return <Track key={index} title={track.title} artist={track.artist} album={track.album} id={track.id}  addSong={addSong} isRemoval={isRemoval} />
      })}
    </div>
  )
}

export default Tracklist
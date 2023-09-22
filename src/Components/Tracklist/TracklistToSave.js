import React from 'react';
import Track from '../Track/Track';
import styles from './Tracklist.module.css';

function TracklistToSave( {playlist, button} ) {
  return (
    <div className={styles.list}>
      {playlist?.map((track, index) => {
        return <Track key={index} title={track.title} artist={track.artist} album={track.album} id={track.id} button={button} />
      })}
    </div>
  )
}

export default TracklistToSave
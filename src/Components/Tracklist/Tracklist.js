import React from 'react';
import Track from '../Track/Track';
import styles from './Tracklist.module.css';

function Tracklist(props) {
  return (
    <div className={styles.list}>
      {props.tracks?.map((track, index) => {
        return <Track key={index} track={track}  addSong={props.addSong} isRemoval={props.isRemoval} removeSong={props.removeSong} />
      })}
    </div>
  )
}

export default Tracklist
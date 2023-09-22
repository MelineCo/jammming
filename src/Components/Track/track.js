import React, { useState } from 'react';
import styles from './Track.module.css';
import AddButton from './AddButton';

export default function Track( {index, title, artist, album, id, addSong, button} ){

    return (
        <div className={styles.track}>
            <div className={styles.song}>
                <span className={styles.title}>{title}</span>
                <p className={styles.details}>{artist} | {album}</p>
            </div>
            <div>
                {button && <AddButton id={id} addSong={addSong} />}
            </div>
        </div>
    );
};



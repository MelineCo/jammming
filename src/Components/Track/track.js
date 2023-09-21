import React, { useState } from 'react';
import styles from './Track.module.css';

export default function Track( {index, title, artist, album} ){
    return (
        <div className={styles.track}>
            <span className={styles.title}>{title}</span>
            <p className={styles.details}>{artist} | {album}</p>
        </div>
    );
};



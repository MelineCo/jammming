import React, { useState } from 'react';
import styles from './Track.module.css';

export default function Track( {index, title, artist, album} ){
    return (
        <div>
            <span className="album-title">{title}</span>
            <p>{artist}</p>
            <p>{album}</p>
        </div>
    );
};



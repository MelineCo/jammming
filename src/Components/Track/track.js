import React, { useState } from 'react';
import Styles from './Track.module.css';

export default function Track( {track}){
    const [select, setSelect] = useState(false);

    return (
        <div 
            className={`card ${select ? 'card' : ''}`}
            onClick= {() => setSelect(!select)}
        >
            <span className="title" >{track.title}</span>
            {track.album}
            {track.artist}
        </div>
    );
};



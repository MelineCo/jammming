import { useState } from "react";
import Tracklist from "../Tracklist/Tracklist";
import styles from "./Playlist.module.css";

const Playlist = ({searchResults}) => {
    const [playlistName, setPlaylistName] = useState('');

    const handleChange = (value) => {
        setPlaylistName(value);
    }

    return (
        <div className={styles.list}>
            <input className={styles.input} placeholder='Name your playlist...' value={playlistName} onChange={(e) => handleChange(e.target.value)} />
            <Tracklist searchResults={searchResults} />
            <button className={styles.button}>Add to spotify</button>
        </div>
    )
}

export default Playlist;
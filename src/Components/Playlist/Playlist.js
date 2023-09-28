import { useState } from "react";
import Tracklist from "../Tracklist/Tracklist";
import styles from "./Playlist.module.css";

const Playlist = ({playlist, removeSong, saveToSpotify}) => {
    /* Pour personnaliser le nom de la playlist */
    const [playlistName, setPlaylistName] = useState('New playlist');

    /* Pour savoir si on affiche le bouton d'ajout*/
    const isRemoval = true;

    const handleChange = (value) => {
        setPlaylistName(value);
    }

    const onSaveToSpotify = () => {
        saveToSpotify(playlist);
    }

    return (
        <div className={styles.list}>
            <input className={styles.input} placeholder='Name your playlist...' value={playlistName} onChange={(e) => handleChange(e.target.value)} />
            <Tracklist tracks={playlist} isRemoval={isRemoval} removeSong={removeSong} />
            <button className={styles.button} onClick={() => onSaveToSpotify()} >Add to spotify</button>
        </div>
    )
}

export default Playlist;
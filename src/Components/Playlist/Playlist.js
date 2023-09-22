import { useState } from "react";
import TracklistToSave from "../Tracklist/TracklistToSave";
import styles from "./Playlist.module.css";

const Playlist = ({playlist}) => {
    /* Pour personnaliser le nom de la playlist */
    const [playlistName, setPlaylistName] = useState('New playlist');

    /* Pour savoir si on affiche le bouton d'ajout*/
    const button = false;

    const handleChange = (value) => {
        setPlaylistName(value);
    }

    return (
        <div className={styles.list}>
            <input className={styles.input} placeholder='Name your playlist...' value={playlistName} onChange={(e) => handleChange(e.target.value)} />
            <TracklistToSave playlist={playlist} button={button} />
            <button className={styles.button}>Add to spotify</button>
        </div>
    )
}

export default Playlist;
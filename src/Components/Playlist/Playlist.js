import Tracklist from "../Tracklist/Tracklist";
import styles from "./Playlist.module.css";

const Playlist = ({searchResults}) => {
    return (
        <div className={styles.list}>
            <h2 className={styles.h2}>Playlist</h2>
            <Tracklist searchResults={searchResults} />
            <button className={styles.button}>Add to spotify</button>
        </div>
    )
}

export default Playlist;
import styles from "./Playlist.module.css";

const Playlist = () => {
    return (
        <div className={styles.list}>
            <h2 className={styles.h2}>Playlist</h2>
            <button className={styles.button}>Add to spotify</button>
        </div>
    )
}

export default Playlist;
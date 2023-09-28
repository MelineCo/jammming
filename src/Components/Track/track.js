import styles from './Track.module.css';

export default function Track(props){

    const onAdd = () => {
        props.addSong(props.track);
    }

    const onRemove = () => {
        props.removeSong(props.track);
    }

    const renderAction = () => {
        if(props.isRemoval){
            return(
                    <button onClick={onRemove} className={styles.button}>-</button>
            );
        } else {
            return(
                    <button onClick={onAdd} className={styles.button}>+</button>
            );
        }
    }

    return (
        <div className={styles.track}>
            <div className={styles.song}>
                <span className={styles.title}>{props.track.title}</span>
                <p className={styles.details}>{props.track.artist} | {props.track.album}</p>
            </div>
            {renderAction()}
        </div>
    );
};



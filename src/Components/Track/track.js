import styles from './Track.module.css';

export default function Track(props){
    

    const renderAction = () => {
        if(props.isRemoval){
            return(
                    <button onClick={props.handleClick} className={styles.button}>-</button>
            );
        } else {
            return(
                    <button onClick={props.handleClick} className={styles.button}>+</button>
            );
        }
    }
    console.log({renderAction})

    return (
        <div className={styles.track}>
            <div className={styles.song}>
                <span className={styles.title}>{props.title}</span>
                <p className={styles.details}>{props.artist} | {props.album}</p>
            </div>
            {renderAction()}
        </div>
    );
};



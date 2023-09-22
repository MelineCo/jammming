import styles from "./AddButton.module.css";
import { useState } from "react";


const AddButton = ({id, addSong}) => {
    const [idSong, setIdSong] = useState('');

    const handleClick = () => {
        setIdSong(id);
        addSong(idSong);
    }

    return <button onClick={handleClick} className={styles.button}>+</button>
}

export default AddButton;
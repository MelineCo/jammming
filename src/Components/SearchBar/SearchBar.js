import React, { useState } from 'react';
import styles from './SearchBar.module.css';
import { FaSearch } from 'react-icons/fa';

function SearchBar( {setSearchResults, tracks, retrieveTracks}) {
  const [song, setSong] = useState('');

  const handleChange = (value) => {
    setSong(value);
  };

  const handleSubmit = () => {
    retrieveTracks(song);
  }

  return (
    <div className={styles.searchBarContainer}>
      <div className={styles.inputWrapper}>
        <FaSearch id="search-icon" />
        <input className={styles.input} placeholder='Type to search a song...' value={song} onChange={(e) => handleChange(e.target.value)} />
      </div>

      <button type="submit" onClick={() => handleSubmit()}>Search</button>

    </div>
  )
}

export default SearchBar;

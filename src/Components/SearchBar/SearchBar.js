import React, { useState } from 'react';
import styles from './SearchBar.module.css';
import { FaSearch } from 'react-icons/fa';

function SearchBar() {
  const [song, setSong] = useState('');

const fetchData = 

  return (
    <div className={styles.searchBarContainer}>
      <div className={styles.inputWrapper}>
        <FaSearch id="search-icon" />
        <input placeholder='Type to search a song...' value={song} onChange={(e) => setSong(e.target.value)} />
      </div>

      <button>Search</button>

    </div>
  )
}

export default SearchBar;

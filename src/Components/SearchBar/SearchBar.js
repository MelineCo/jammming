import React, { useState } from 'react';
import styles from './SearchBar.module.css';
import { FaSearch } from 'react-icons/fa';

function SearchBar( {setSearchResults, tracks}) {
  const [song, setSong] = useState('');

  const filterData = () => {
    const filtered = tracks.filter(track => track.title.includes(song));
    setSearchResults(filtered);
    console.log(filtered);
  };

  const handleChange = (value) => {
    setSong(value);
    filterData();
  };

  return (
    <div className={styles.searchBarContainer}>
      <div className={styles.inputWrapper}>
        <FaSearch id="search-icon" />
        <input placeholder='Type to search a song...' value={song} onChange={(e) => handleChange(e.target.value)} />
      </div>

      <button type="submit">Search</button>

    </div>
  )
}

export default SearchBar;

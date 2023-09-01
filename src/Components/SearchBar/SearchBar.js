import React, { useState } from 'react';
import styles from './SearchBar.module.css';
import { FaSearch } from 'react-icons/fa';

function SearchBar( {setResults}) {
  const [song, setSong] = useState('');

const fetchData = (value) => {
  fetch("https://jsonplaceholder.typicode.com/users").then((response) => response.json()).
  then((json) => {
    // On veut filtrer les données json et les enregistrer dans une variable 'results'
    const results = json.filter((user) => {
      return
        value && 
        user && 
        user.name && 
        user.name.toLowerCase().includes(value);
    })
    setResults(results);
  });
}



const handleChange = (value) => {
  setSong(value);
  fetchData(value);
}

  return (
    <div className={styles.searchBarContainer}>
      <div className={styles.inputWrapper}>
        <FaSearch id="search-icon" />
        <input placeholder='Type to search a song...' value={song} onChange={(e) => handleChange(e.target.value)} />
      </div>

      <button>Search</button>

    </div>
  )
}

export default SearchBar;

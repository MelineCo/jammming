import React from 'react';
import styles from './SearchResults.module.css';

function SearchResults( {results} ) {
  return (
    <div className={styles.resultsList}>
      {results.map((result, id) => {
          return <div key={id}>{result.name}</div>;
        })}
    </div>
  )
}

export default SearchResults

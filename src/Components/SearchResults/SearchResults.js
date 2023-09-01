import React from 'react';
import styles from './SearchResults.module.css';
import Result from '../Track/Result';

function SearchResults( {results} ) {
  return (
    <div className={styles.resultsList}>
      {results.map((result, id) => {
          return <Result result={result} key={id} />;
        })}
        <p>A</p>
    </div>
  )
}

export default SearchResults

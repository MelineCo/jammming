import React from 'react';
import Track from '../Track/Track';

function Tracklist( {searchResults} ) {
  return (
    <div className="track-list">
      {searchResults?.map((track, index) => {
        return <Track key={index} title={track.title} artist={track.artist} album={track.album} />
      })}
    </div>
  )
}

export default Tracklist
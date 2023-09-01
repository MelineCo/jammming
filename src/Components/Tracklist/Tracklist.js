import React from 'react';
import Track from '../Track/Track';

function Tracklist( { tracks }) {
  return (
    <div className="track-list">
      {tracks.map(track => {
        return <Track track={track} key={track.id} />;
      } )}
    </div>
  )
}

export default Tracklist

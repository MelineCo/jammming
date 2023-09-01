import React from 'react';
import Tracks from './Tracks';

function Tracklist( { tracks }) {
  return (
    <div className="track-list">
      {tracks.map(track => {
        return <Tracks track={track} key={track.id} />;
      } )}
    </div>
  )
}

export default Tracklist

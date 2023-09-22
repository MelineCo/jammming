import React, {useState} from 'react';
import TrackList from './Components/Tracklist/Tracklist';
import SearchBar from './Components/SearchBar/SearchBar';
import SearchResults from './Components/SearchResults/SearchResults';
import styles from './App.module.css';
import Playlist from './Components/Playlist/Playlist';

function App() {
const [tracks, setTracks] = useState(SAMPLE_TRACKS);
const [searchResults, setSearchResults] = useState([]);
const [playlist, setPlaylist] = useState([]);

const addSong = (track) => {
  if(playlist.find(savedTrack => savedTrack.id === track.id) != undefined) {
    return
  } else {
    setPlaylist(
      [...playlist, track]
    );
  }
}

const removeSong = (track) => {
  console.log("Début de suppression une musique");
  return (
    setPlaylist(
      playlist.filter(savedTrack => savedTrack.id != track.id)
    )
  )
}

  return (
    <div className={styles.body}>
      <h1 className={styles.h1}>Jammming</h1>
      <SearchBar setSearchResults={setSearchResults} tracks={tracks} />
      <div className={styles.flex}>
        <SearchResults searchResults={searchResults} addSong={addSong} />
        <Playlist playlist={playlist} removeSong={removeSong} />
      </div>
    </div>
  );
}


const SAMPLE_TRACKS = [
  {
    id: 1,
    title: "Hakounamatata",
    artist: "Rafiki",
    album: "Le roi linon",
  },
  {
    id: 2,
    title: "Au delà des mers",
    artist: "Étoile de mer",
    album: "La petite sirène",
  },
  {
    id: 3,
    title: "L'air du vent",
    artist: "Pocahantas",
    album: "Pocahantas",
  },
  {
    id: 4,
    title: "Harry et l'école des sorciers",
    artist: "JK Rowling",
    album: "Poudlard production",
  },
  {
    id: 5,
    title: "Veni vedi dici",
    artist: "J Cesar",
    album: "ROme production",
  },
  {
    id: 100,
    title: "Une souris verte",
    artist: "Anastasia",
    album: "Les comptines",
  },
  {
    id: 200,
    title: "Trois petits cochons",
    artist: "Emma",
    album: "Les comptines",
  },
  {
    id: 300,
    title: "Pierrot la lune",
    artist: "Ugo",
    album: "Les comptines",
  }
];



export default App;

import React, {useEffect, useState} from 'react';
import SearchBar from './Components/SearchBar/SearchBar';
import SearchResults from './Components/SearchResults/SearchResults';
import styles from './App.module.css';
import Playlist from './Components/Playlist/Playlist';
import Login from './Login';

function App() {
const [tracks, setTracks] = useState(SAMPLE_TRACKS);
const [searchResults, setSearchResults] = useState([]);
const [playlist, setPlaylist] = useState([]);
const [uri, setUri] = useState([]);

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
  return (
    setPlaylist(
      playlist.filter(savedTrack => savedTrack.id != track.id)
    )
  )
}

const saveToSpotify = (playlist) => {
  const uris = [];
  playlist.map(track => {
    return uris.push(track.uri);
  });
  setUri([uris]);
  setPlaylist([]);
  console.log("URI enregistrés");
}

async function search(){
  //console.log("Searching for..." + searchInput);

}

  return (
    <div className={styles.body}>
      <h1 className={styles.h1}>Jammming</h1>
      <Login />
      <SearchBar setSearchResults={setSearchResults} tracks={tracks} />
      <div className={styles.flex}>
        <SearchResults searchResults={searchResults} addSong={addSong} />
        <Playlist playlist={playlist} removeSong={removeSong} saveToSpotify={saveToSpotify} />
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
    uri: "7YHjUY89J"
  },
  {
    id: 2,
    title: "Au delà des mers",
    artist: "Étoile de mer",
    album: "La petite sirène",
    uri: "1a2b3c4d5e6f7g"
  },
  {
    id: 3,
    title: "L'air du vent",
    artist: "Pocahantas",
    album: "Pocahantas",
    uri: "1a2b3c4d5e6j7g"
  },
  {
    id: 4,
    title: "Harry et l'école des sorciers",
    artist: "JK Rowling",
    album: "Poudlard production",
    uri: "1a2b894d5e6f7g"
  },
  {
    id: 5,
    title: "Veni vedi dici",
    artist: "J Cesar",
    album: "ROme production",
    uri: "hj2b3c4d5e6f7g"
  },
  {
    id: 100,
    title: "Une souris verte",
    artist: "Anastasia",
    album: "Les comptines",
    uri: "1aub3c4d5e6f7g"
  },
  {
    id: 200,
    title: "Trois petits cochons",
    artist: "Emma",
    album: "Les comptines",
    uri: "1a2b9c4d5e6f7g"
  },
  {
    id: 300,
    title: "Pierrot la lune",
    artist: "Ugo",
    album: "Les comptines",
    uri: "1a2b3c4t5e6f7g"
  }
];



export default App;

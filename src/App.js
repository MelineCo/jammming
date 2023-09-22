import React, {useState} from 'react';
import TrackList from './Components/Tracklist/Tracklist';
import SearchBar from './Components/SearchBar/SearchBar';
import SearchResults from './Components/SearchResults/SearchResults';
import styles from './App.module.css';
import Playlist from './Components/Playlist/Playlist';

function App() {
const [tracks, setTracks] = useState(SAMPLE_TRACKS);
const [searchResults, setSearchResults] = useState([]);
const [playlist, setPlaylist] = useState(TEST_PLAYLIST);

const addSong = (id) => {
  console.log(`addSong= ${id}`);
  setPlaylist(searchResults.map(track => {
    if (track.id === id) {
      const selectedSong = {
        title: track.title,
        artist: track.artist,
        album: track.album
      }
      console.log(`selected song : ${selectedSong}`)
      return {
        ...playlist,
        selectedSong
      };
    }
    playlist.map(song => console.log(`playlist : ${song}`))
  }))
  /*const track = searchResults.filter(track => track.id === id);*/
}

  return (
    <div className={styles.body}>
      <h1 className={styles.h1}>Jammming</h1>
      <SearchBar setSearchResults={setSearchResults} tracks={tracks} />
      <div className={styles.flex}>
        <SearchResults searchResults={searchResults} addSong={addSong} />
        <Playlist playlist={playlist} />
      </div>
    </div>
  );
}

//const SAMPLE_TITLES = ["Il était un petit navier", "Une souris verte", "Dodo l'enfant do", "Les petits poissons"];
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
  }
];

const TEST_PLAYLIST = [
  {
    id: 1,
    title: "Une souris verte",
    artist: "Anastasia",
    album: "Les comptines",
  },
  {
    id: 2,
    title: "Trois petits cochons",
    artist: "Emma",
    album: "Les comptines",
  },
  {
    id: 3,
    title: "Pierrot la lune",
    artist: "Ugo",
    album: "Les comptines",
  }
];

export default App;

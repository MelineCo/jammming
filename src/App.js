import React, {useState} from 'react';
import TrackList from './Components/Tracklist/Tracklist';
import Style from './App.module.css';
import SearchBar from './Components/SearchBar/SearchBar';
import SearchResults from './Components/SearchResults/SearchResults';

function App() {
const [tracks, setTracks] = useState(SAMPLE_TRACKS);
const [results, setResults] = useState([]);

  return (
    <div className="App">
      <h1>Jammming</h1>
      <SearchBar setResults={setResults} />
      <SearchResults results={results} />
      <TrackList tracks={tracks}/>
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
  }
];

export default App;

import React, {useState} from 'react';
import TrackList from './Components/Tracklist/Tracklist';
import SearchBar from './Components/SearchBar/SearchBar';
import SearchResults from './Components/SearchResults/SearchResults';

function App() {
const [tracks, setTracks] = useState(SAMPLE_TRACKS);
const [searchResults, setSearchResults] = useState([]);

  return (
    <div className="App">
      <h1>Jammming</h1>
      <SearchBar setSearchResults={setSearchResults} tracks={tracks} />
      <SearchResults searchResults={searchResults} />
      <TrackList tracks={tracks}/>
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

export default App;

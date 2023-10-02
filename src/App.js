import React, {useState} from 'react';
import SearchBar from './Components/SearchBar/SearchBar';
import SearchResults from './Components/SearchResults/SearchResults';
import styles from './App.module.css';
import Playlist from './Components/Playlist/Playlist';
import Login from './Login';

function App() {
const [tracks, setTracks] = useState([]);
const [searchResults, setSearchResults] = useState([]);
const [playlist, setPlaylist] = useState([]);
const [uri, setUri] = useState([]);
const [accessToken, setAccessToken] = useState('');
const [userID, setUserID] = useState('');

const retrieveTracks = async (song) => {
  try{
    const spotifyBaseUrl = "https://api.spotify.com";
    const trackEndpoint = "/v1/search?";
    const requestParams = "q=" + song + "&type=track";
    const urlToFetch = `${spotifyBaseUrl}${trackEndpoint}${requestParams}`;
    const response = await fetch(urlToFetch, {
      headers: {
        Authorization: `Bearer ${accessToken}`
      } 
    });
    if(response.ok){
      const jsonResponse = await response.json();
      const foundTracks = jsonResponse.tracks;
      setSearchResults(foundTracks.items.map(track => ({
        id: track.id,
        name: track.name,
        artist: track.artists[0].name,
        album: track.album.name,
        uri: track.uri
      })));
      return searchResults;
    } else {
      console.log("erreur")
      setAccessToken(undefined)
      console.log(accessToken)
    }
  } catch(error){
    console.log(error)
  }
}

const addSong = (track) => {
  if(playlist.find(savedTrack => savedTrack.id === track.id) !== undefined) {
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
      playlist.filter(savedTrack => savedTrack.id !== track.id)
    )
  )
}

const saveToSpotify = async (playlist) => {
  const uris = [];
  playlist.map(track => {
    return uris.push(track.uri);
  });
  setUri([uris]);
  setPlaylist([]);
  console.log("URI enregistrés");

  try {
    const response = await fetch("https://api.spotify.com/v1/me", {
    method: "GET",
    headers: {
      Authorization: `Bearer ${accessToken}`
    }});
    if(response.ok){
      const { id: user_id } = await response.json();
      console.log("User_ID récupéré")
      setUserID(user_id) 
      console.log(userID)
    }
  } catch(error){
    console.log(error)
  }
  

  // A FAIRE : VERIFIER QUE LA PLAYLIST N'EXISTE PAS SINON MESSAGE POUR DEMANDER à L'UTILISATEUR DE MODIFIER LE NOM
  try{
    const endpoint = `https://api.spotify.com/v1/users/${userID}/playlists`;
    console.log(endpoint)
    const urlToFetch = endpoint;
    const response = await fetch(urlToFetch, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json'
      },
      method: "POST",
      body: JSON.stringify({
        "name": "New Playlist",
        "description": "New playlist description",
        "public": false
      })
    });
  } catch(error){
    console.log(error)
  }
}

  return (
    <div className={styles.body}>
      <h1 className={styles.h1}>Jammming</h1>
      
      <Login accessToken={accessToken} setAccessToken={setAccessToken}/>
      <>
        <SearchBar setSearchResults={setSearchResults} tracks={tracks} retrieveTracks={retrieveTracks}/>  
        <div className={styles.flex}>
          <SearchResults searchResults={searchResults} addSong={addSong} />
          <Playlist playlist={playlist} removeSong={removeSong} saveToSpotify={saveToSpotify} />
        </div>
      </>
      
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

import React, {useState} from 'react';
import SearchBar from './Components/SearchBar/SearchBar';
import SearchResults from './Components/SearchResults/SearchResults';
import styles from './App.module.css';
import Playlist from './Components/Playlist/Playlist';
import Login from './Login';
import FetchWebApi from './FetchWebApi';

function App() {
const [tracks, setTracks] = useState([]);
const [searchResults, setSearchResults] = useState([]);
const [playlist, setPlaylist] = useState([]);
const [accessToken, setAccessToken] = useState('');

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
      setAccessToken(undefined)
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

async function saveToSpotify(tracksUri){

  // On récupère le User ID
  const { id: user_id } = await FetchWebApi('v1/me', accessToken, 'GET')

  // On crée la playlist dans Spotify
  const playlistSpotify = await FetchWebApi(
    `v1/users/${user_id}/playlists`,
    accessToken,
    'POST',
    {
      "name": "Help Playlist",
        "description": "New playlist description",
      "public": false
    })

  // On ajoute les tracks à la playlist à partir de leur URI
  await FetchWebApi(
    `v1/playlists/${playlistSpotify.id}/tracks?uris=${tracksUri.join(',')}`,
    accessToken,
    'POST'
  );

  // On vide la playlist affichée
  setPlaylist([]);

  return playlistSpotify;
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

export default App;

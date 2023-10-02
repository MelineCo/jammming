import { useEffect } from "react";

// client_id : Required. The client ID provided to you by Spotify when you register your application.
const client_id = "3d32bb9eac0a4a30a1c6c69fa1827826";
var redirect_uri = 'http://localhost:3000/';
var scope = 'playlist-modify-public playlist-modify-private playlist-read-collaborative playlist-read-private user-read-private user-read-email';

// The following JavaScript sample builds the authorization request:
var url = 'https://accounts.spotify.com/authorize';
url += '?response_type=token';
url += '&client_id=' + encodeURIComponent(client_id);
url += '&scope=' + encodeURIComponent(scope);
url += '&redirect_uri=' + encodeURIComponent(redirect_uri);

// If the user grants access, the final URL will contain a hash fragment with the following data encoded as a query string.

const returnedParamsFromSpotifyAuth = (hash) => {
    // On récupère le hash de l'URL
    const stringAfterHash = hash.substring(1)
    // On crée un tableau avec les 3 paramètres contenus dans le hash, séparés par "&"
    const paramsInURL = stringAfterHash.split("&")
    // On transforme le tableau d'objets en un seul objet {access_token: "", token_type: "", expires_in: ""}
    const paramsSplitUp = paramsInURL.reduce((accumulater, currentValue) => {
        const [key, value] = currentValue.split("=")
        accumulater[key] = value
        return accumulater
    }, {})
    return paramsSplitUp
}

function Login({accessToken, setAccessToken}){

    useEffect(()=> {
        if(window.location.hash){
            const {
                access_token,
                token_type,
                expires_in
            } = returnedParamsFromSpotifyAuth(window.location.hash)

            setAccessToken(access_token)

            // On enregistre les paramètres en local
            window.localStorage.clear()
            window.localStorage.setItem("access_token", access_token)
            window.localStorage.setItem("token_type", token_type)
            window.localStorage.setItem("expires_in", expires_in)
            // On efface le hash
            //window.location.hash=""
        }
    })

    function handleLogin(){
        console.log(url)
        return window.location.href = url;
    }

    return (
        <button onClick={handleLogin}>LOGIN WITH SPOTIFY</button> 
    );
}

export default Login;



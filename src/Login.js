import { useEffect, useState } from "react";

// client_id : Required. The client ID provided to you by Spotify when you register your application.
const client_id = "";
var redirect_uri = 'http://localhost:3000/';
var scope = 'playlist-modify-public';

// The following JavaScript sample builds the authorization request:
//localStorage.setItem(stateKey, state);

var url = 'https://accounts.spotify.com/authorize';
url += '?response_type=token';
url += '&client_id=' + encodeURIComponent(client_id);
url += '&scope=' + encodeURIComponent(scope);
url += '&redirect_uri=' + encodeURIComponent(redirect_uri);

// If the user grants access, the final URL will contain a hash fragment with the following data encoded as a query string.

function Login(){
    const [accessToken, setAccessToken] = useState('');

    useEffect(()=> {
        // API Access Token
        const hash = window.location.hash
        let token = window.localStorage.getItem("token")
        console.log("token : " + token)

        if(hash){
            console.log("setting access token")
            token = hash.substring(1).split("&").find(element => element.startsWith("access_token")).split("=")[1]
            
            console.log(token)
            window.location.hash=""
            window.localStorage.setItem("token", token)
            setAccessToken(token)
            console.log(`Access token : ${accessToken}`)
        }

    }, [])

    return (
        <div>
            <a href={url}>LOGIN WITH SPOTIFY</a>
        </div>
    )
}

export default Login;



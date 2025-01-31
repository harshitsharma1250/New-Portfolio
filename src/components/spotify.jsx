import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useHistory,
} from "react-router-dom";
import { loginUrl, getToken } from "./spotifyAuth.jsx";
import Player from "./Player.jsx";

const spotify = () => {
  const [token, setToken] = useState(null);
  const history = useHistory();

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get("code");

    if (code) {
      getToken(code).then((data) => {
        setToken(data.access_token);
        history.push("/");
      });
    }
  }, [history]);

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/callback">
            <div>Loading...</div>
          </Route>
          <Route path="/">
            {!token ? (
              <a href={loginUrl}>Login with Spotify</a>
            ) : (
              <Player token={token} />
            )}
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default spotify;

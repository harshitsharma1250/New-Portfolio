import React, { useEffect, useState } from "react";

const Player = ({ token }) => {
  const [player, setPlayer] = useState(undefined);
  const [isPaused, setIsPaused] = useState(false);
  const [currentTrack, setCurrentTrack] = useState({});

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://sdk.scdn.co/spotify-player.js";
    script.async = true;
    document.body.appendChild(script);

    window.onSpotifyWebPlaybackSDKReady = () => {
      const player = new window.Spotify.Player({
        name: "Web Playback SDK Quick Start Player",
        getOAuthToken: (cb) => {
          cb(token);
        },
        volume: 0.5,
      });

      setPlayer(player);

      player.addListener("ready", ({ device_id }) => {
        console.log("Ready with Device ID", device_id);

        // Transfer the playback to the SDK's device ID
        fetch(`https://api.spotify.com/v1/me/player`, {
          method: "PUT",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            device_ids: [device_id],
            play: false,
          }),
        });
      });

      player.addListener("not_ready", ({ device_id }) => {
        console.log("Device ID has gone offline", device_id);
      });

      player.addListener("player_state_changed", (state) => {
        if (!state) {
          return;
        }
        setCurrentTrack(state.track_window.current_track);
        setIsPaused(state.paused);

        player.getCurrentState().then((state) => {
          !state ? setIsPaused(true) : setIsPaused(state.paused);
        });
      });

      player.connect();
    };
  }, [token]);

  const handlePlayPause = () => {
    player.togglePlay();
  };

  if (!currentTrack.name) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Spotify Player</h1>
      <div>
        {currentTrack.name} by {currentTrack.artists[0].name}
      </div>
      <button onClick={handlePlayPause}>{isPaused ? "Play" : "Pause"}</button>
    </div>
  );
};

export default Player;

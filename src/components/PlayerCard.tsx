import React, { useEffect, useState } from "react";

interface PlayerCardProps {
  trackUri: string; // ex: "spotify:track:0EZg0SMRhC9KaiDEE4XAYC"
  token: string;
}

const PlayerCard: React.FC<PlayerCardProps> = ({ trackUri, token }) => {
  const [deviceId, setDeviceId] = useState<string | null>(null);
  const [player, setPlayer] = useState<any>(null);

  useEffect(() => {
    if (!window.Spotify) {
      const script = document.createElement("script");
      script.src = "https://sdk.scdn.co/spotify-player.js";
      document.body.appendChild(script);
    }

    window.onSpotifyWebPlaybackSDKReady = () => {
      const _player = new window.Spotify.Player({
        name: "My Web Player",
        getOAuthToken: (cb) => {
          cb(token);
        },
      });

      _player.addListener("ready", ({ device_id }) => {
        console.log("Ready with Device ID", device_id);
        setDeviceId(device_id);
      });

      _player.connect();
      setPlayer(_player);
    };
  }, [token]);

  const play = () => {
    if (!deviceId) return;
    fetch("https://api.spotify.com/v1/me/player/play", {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        uris: [trackUri],
        // device_id: deviceId  // opcional
      }),
    }).catch((err) => console.error("Play error", err));
  };

  return (
    <div className="player-card">
      <button onClick={play}>Play</button>
      <p>Track URI: {trackUri}</p>
    </div>
  );
};

export default PlayerCard;

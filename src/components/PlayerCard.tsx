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
    getOAuthToken: (cb: (token: string) => void) => {
      cb("BQABnzM-R8X5rBQblCGCWmlDyORtr8nwAiZrFuEXpiOg01VPpXTGqMPU9KYw3rU6db92NBKlTPTnPfKB_ucHwJ8MNC_yrTpMwxC5bZjWQb79eLLf2E8Q7jM-ZjuufWDRL4U00rR7viC3BnlFNz4yqbO99NsvB05z99S5zvACzcxLmR4x3lA80XGdbaK_NfHVGBWLDvbkv4mRXm9udTHId4k4RLvN3P02UIth1HRNsU-9btrSu428gfQX37ldvpp3xkZiVumNQt0Yb-FVj-8BFW3MEeZqW5eSSiYxCBgEiN8w1w");
    },
    volume: 0.5,
  });

  _player.connect();
};

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

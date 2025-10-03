import React, { useEffect, useState } from "react";

interface PlayerCardProps {
  trackUri: string; 
  token: string;
}

const PlayerCard: React.FC<PlayerCardProps> = ({ trackUri, token }) => {
  const [deviceId, setDeviceId] = useState<string | null>(null);
  const [player, setPlayer] = useState<any>(null);

  useEffect(() => {
    // Carrega SDK se ainda não carregado
    if (!window.Spotify) {
      const script = document.createElement("script");
      script.src = "https://sdk.scdn.co/spotify-player.js";
      script.async = true;
      document.body.appendChild(script);
    }

    // Declara callback global
    window.onSpotifyWebPlaybackSDKReady = () => {
      const _player = new window.Spotify.Player({
        name: "My Web Player",
        getOAuthToken: (cb: (token: string) => void) => cb(token),
        volume: 0.5,
      });

      // Evento ready
      _player.addListener("ready", ({ device_id }: { device_id: string }) => {
        console.log("Ready with Device ID", device_id);
        setDeviceId(device_id);
      });

      // Conecta o player
      _player.connect();
      setPlayer(_player);
    };
  }, [token]);

  // Função para tocar a track
  const play = () => {
    if (!deviceId) return;
    fetch(`https://api.spotify.com/v1/me/player/play?device_id=${deviceId}`, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ uris: [trackUri] }),
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

import React from "react";

interface PlayerEmbedProps {
  trackUrl: string;
}

const PlayerEmbed: React.FC<PlayerEmbedProps> = ({ trackUrl }) => {
  return (
    <div className="player-card">
      <iframe
        src={`https://open.spotify.com/embed/track/${trackUrl}?utm_source=generator`}
        width="300"
        height="80"
        frameBorder="0"
        allow="encrypted-media"
      ></iframe>
    </div>
  );
};

export default PlayerEmbed;

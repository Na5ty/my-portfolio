// src/components/YouTubePlayer.js
import React from "react";
import YouTube from "react-youtube";
import "./YouTubePlayer.css";

const YouTubePlayer = ({ videoId }) => {
  const opts = {
    height: "390",
    width: "640",
  };

  return (
    <div className="youtube-player-container">
      <YouTube videoId={videoId} opts={opts} className="youtube-player" />
    </div>
  );
};

export default YouTubePlayer;

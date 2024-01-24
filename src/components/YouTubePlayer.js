// src/components/YouTubePlayer.js
import React from "react";
import YouTube from "react-youtube";
import "./YouTubePlayer.css";

const YouTubePlayer = ({ videoId }) => {
  const opts = {
    height: "390",
    width: "640",
  };

  return <YouTube videoId={videoId} opts={opts} />;
};

export default YouTubePlayer;

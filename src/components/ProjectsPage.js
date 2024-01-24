// src/components/ProjectsPage.js
import React from "react";
import YouTubePlayer from "./YouTubePlayer";
import WeatherApp from "./WeatherApp";
import MusicSearch from "./MusicSearch";

const ProjectsPage = () => {
  const videoId = "2EePImr70Jg";

  return (
    <div>
      <h2>Projects</h2>
      <p>This is a placeholder for the Projects page.</p>
      <WeatherApp />
      <MusicSearch />
      <YouTubePlayer videoId={videoId} />
    </div>
  );
};

export default ProjectsPage;

// src/components/ProjectsPage.js
import React from "react";
import YouTubePlayer from "./YouTubePlayer";
import WeatherApp from "./WeatherApp";
import MusicSearch from "./MusicSearch";
import "./ProjectsPage.css"; // Import the CSS file for styling

const ProjectsPage = () => {
  const videoId = "2EePImr70Jg";

  return (
    <div className="projects-page">
      <h2>Projects</h2>
      <WeatherApp />
      <MusicSearch />
      <YouTubePlayer videoId={videoId} />
    </div>
  );
};

export default ProjectsPage;

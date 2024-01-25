// src/components/HomePage.js
import React from "react";
import "./HomePage.css"; // Import the CSS file for styling
import astronautImage from "../img/imgbin_astronaut-png.png"; // Import the image file

const HomePage = () => {
  return (
    <div className="hero-section">
      <div className="hero-content">
        <div className="hero-text">
          <h2>Welcome to My Portfolio</h2>
          <p>
            Hello, I'm Thomas Zeides. I am a passionate developer with a focus
            on Web Design.
          </p>
          <p>
            Explore my projects, learn more about me in the{" "}
            <a href="/about">About</a> section, check out my work in the{" "}
            <a href="/projects">Projects</a> section, and feel free to{" "}
            <a href="/contact">contact me</a>.
          </p>
        </div>
        <div className="hero-pic">
          <img
            src={astronautImage}
            alt="Astronaut"
            className="astronaut-image"
          />
        </div>
      </div>
      <div className="skills-section">
        <h2>My Skills</h2>
        <p>I have experience with HTML, CSS, JavaScript, React, and Node.js</p>
      </div>
    </div>
  );
};

export default HomePage;

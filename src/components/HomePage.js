// src/components/HomePage.js
import React, { useState, useEffect } from "react";
import "./HomePage.css";

import astronautImage from "../img/imgbin_astronaut-png.png";
import { Link } from "react-router-dom";

const HomePage = () => {
  const [catImageUrl, setCatImageUrl] = useState("");
  const [breeds, setBreeds] = useState([]);
  const [selectedBreed, setSelectedBreed] = useState("");

  useEffect(() => {
    // Fetch a list of cat breeds on component mount
    fetchCatBreeds();

    // Fetch a new random cat image on component mount
    fetchCatImage();

    // Set up an interval to fetch a new cat image every 10 seconds
    const intervalId = setInterval(() => {
      fetchCatImage();
    }, 10000);

    // Clean up the interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  const fetchCatBreeds = async () => {
    try {
      const response = await fetch("https://api.thecatapi.com/v1/breeds");
      const data = await response.json();

      // Update the breeds in the state
      setBreeds(data);
    } catch (error) {
      console.error("Error fetching cat breeds:", error);
    }
  };

  const fetchCatImage = async (breedId) => {
    try {
      let apiUrl = "https://api.thecatapi.com/v1/images/search?limit=1";

      // If a breed is selected, add it to the API URL
      if (breedId) {
        apiUrl += `&breed_id=${breedId}`;
      }

      const response = await fetch(apiUrl);
      const data = await response.json();

      // Update the cat image URL in the state
      setCatImageUrl(data[0]?.url || "");
    } catch (error) {
      console.error("Error fetching cat image:", error);
    }
  };

  const handleBreedChange = (event) => {
    const selectedBreedId = event.target.value;
    // Update the selected breed in the state
    setSelectedBreed(selectedBreedId);
    // Fetch a new cat image based on the selected breed
    fetchCatImage(selectedBreedId);
  };

  const handleFetchRandom = () => {
    // Fetch a completely random cat image
    fetchCatImage();
  };

  return (
    <div className="hero-section">
      <div className="hero-content">
        <div className="hero-text">
          <h2>Welcome to My Portfolio</h2>
          <p>
            Hello, I'm Thomas Zeides! 👋 I am a dedicated web development
            student at DCI (Digital Career Institute), passionate about crafting
            engaging and responsive digital experiences. With a foundation in
            CSS, HTML, JavaScript, and React, I'm on a journey to master the art
            of web development. Aspiring to bring creativity and functionality
            together, I'm excited about the endless possibilities in the
            ever-evolving world of technology. Join me as I explore and create
            in the vast landscape of web development!
          </p>
          <p>
            Explore my projects, learn more about me in the{" "}
            <Link to="/about">About</Link> section, check out my work in the{" "}
            <Link to="/projects">Projects</Link> section. If you'd like to get
            in touch...
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
      <div className="grid-container">
        <div className="grid-item">
          <img
            src={catImageUrl || astronautImage}
            alt="Cat"
            className="cat-image"
          />
          <div className="cat-controls">
            <label htmlFor="breedSelect">Select a cat breed:</label>
            <select
              id="breedSelect"
              value={selectedBreed}
              onChange={handleBreedChange}
            >
              <option value="">All Breeds</option>
              {breeds.map((breed) => (
                <option key={breed.id} value={breed.id}>
                  {breed.name}
                </option>
              ))}
            </select>
            <button className="btn btn-success" onClick={handleFetchRandom}>
              Fetch Random Cat
            </button>
          </div>
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

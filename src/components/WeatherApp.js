// src/components/WeatherApp.js
import React, { useState } from "react";
import "./WeatherApp.css";

const WeatherApp = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");

  const apiKey = "57d35419165cc3e2e37b3863dee96af3"; // Replace with your OpenWeatherMap API key
  const unsplashApiKey = "UrIZeG9XRnCThvW5cvRY8g2wQBDFQyyknSqwfebq3IQ"; // Replace with your Unsplash API key

  const getWeather = async () => {
    try {
      // Fetch weather data
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
      );

      if (!response.ok) {
        throw new Error("City not found. Please try again.");
      }

      const data = await response.json();
      setWeather(data);
      setError("");

      // Fetch image for the city from Unsplash
      const unsplashResponse = await fetch(
        `https://api.unsplash.com/photos/random?query=${city}&client_id=${unsplashApiKey}`
      );

      if (!unsplashResponse.ok) {
        throw new Error("Failed to fetch image.");
      }

      const imageData = await unsplashResponse.json();

      // Assuming the image URL is available in the 'urls' property
      const imageUrl = imageData.urls?.regular;

      // Apply the background image to the weather-app div
      document.querySelector(
        ".weather-app"
      ).style.backgroundImage = `url(${imageUrl})`;
    } catch (error) {
      setWeather(null);
      setError(error.message);
    }
  };

  return (
    <div className="weather-app">
      <h2>Weather App</h2>
      <label>
        Enter City:
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
      </label>
      <button onClick={getWeather}>Get Weather</button>

      {weather && (
        <div className="weather-item">
          <h3>
            {weather.name}, {weather.sys.country}
          </h3>
          <p>Temperature: {weather.main.temp} &deg;C</p>
          <p>Weather: {weather.weather[0].description}</p>
        </div>
      )}

      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default WeatherApp;

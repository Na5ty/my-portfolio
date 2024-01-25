import React, { useState, useRef, useEffect } from "react";
import "./MusicSearch.css";

const MusicSearch = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [selectedSong, setSelectedSong] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const audioRef = useRef(new Audio());

  useEffect(() => {
    const currentAudioRef = audioRef.current;

    const handleAudioEnd = () => {
      setIsPlaying(false);
    };

    currentAudioRef.addEventListener("ended", handleAudioEnd);

    return () => {
      currentAudioRef.removeEventListener("ended", handleAudioEnd);
    };
  }, []);

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
  }, [isPlaying]);

  const searchMusic = async () => {
    try {
      const response = await fetch(
        `https://deezerdevs-deezer.p.rapidapi.com/search?q=${searchQuery}`,
        {
          method: "GET",
          headers: {
            "X-RapidAPI-Key":
              "180e42eaccmsh6427d751bfc8e5fp194814jsn9805929f601e",
            "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
          },
        }
      );

      if (!response.ok) {
        throw new Error("Failed to fetch search results.");
      }

      const data = await response.json();
      setSearchResults(data.data || []);
    } catch (error) {
      console.error(error);
    }
  };

  const handlePlay = (previewUrl) => {
    setSelectedSong(previewUrl);
    setIsPlaying(true);
    audioRef.current.src = previewUrl;
  };

  const handleStop = () => {
    setSelectedSong(null);
    setIsPlaying(false);
  };

  return (
    <div className="music-search">
      <h2>Music Search</h2>
      <label>
        Search for a song:
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </label>
      <button onClick={searchMusic}>Search</button>

      <div className="search-results">
        {searchResults.map((song) => (
          <div key={song.id} className="song">
            <p>{song.title}</p>
            <button onClick={() => handlePlay(song.preview)}>Play</button>
          </div>
        ))}
      </div>

      {selectedSong && (
        <div>
          <audio
            controls
            autoPlay={isPlaying}
            src={selectedSong}
            ref={audioRef}
          >
            Your browser does not support the audio element.
          </audio>
          <button onClick={handleStop}>Stop</button>
        </div>
      )}
    </div>
  );
};

export default MusicSearch;

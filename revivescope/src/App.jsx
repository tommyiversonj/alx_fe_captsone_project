import React, { useState } from "react";
import axios from "axios";
import SearchBar from "./components/SearchBar";
import MovieList from "./components/MovieList";
import Loader from "./components/Loader";
import ErrorMessage from "./components/ErrorMessage";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchMovies = async (query) => {
    if (!query) return;

    setLoading(true);
    setError("");

    try {
  const response = await axios.get(
    'http://www.omdbapi.com/?apikey=${import.meta.env.VITE_OMDB_API_KEY}&s=${encodeURIComponent(query)}'
  );

      console.log('API call successful:', response.data);

      if (response.data.Response === "True") {
        setMovies(response.data.Search);
      } else {
        
        setError(response.data.Error || "No results found. Try another movie name!");
        setMovies([]);
      }

    } catch (err) {
      console.error('Error fetching movies:', err); 
      setError("Uh oh! Couldn't get the movies. Check your internet connection or try again.");
      setMovies([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0D1117] text-gray-200 p-6">
      <h1 className="text-3xl font-bold text-center text-cyan-400 mb-6">
        🎬 ReviveScope
      </h1>

      <SearchBar onSearch={fetchMovies} />

      {loading && <Loader />}
      {error && <ErrorMessage message={error} />}

      {!loading && !error && movies.length > 0 && (
        <MovieList movies={movies} />
      )}

      {!loading && !error && movies.length === 0 && (
        <p className="text-center text-gray-400 mt-12">
          Start searching for your favorite movies 🎬
        </p>
      )}

      {
      }
    </div>
  );
};


export default App;

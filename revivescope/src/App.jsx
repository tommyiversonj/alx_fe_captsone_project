import React, { use, useState } from "react";
import axios from "axios";
import SearchBar from "./components/SearchBar";
import MovieList from "./components/MovieList";
import Loader from "./components/Loader";
import ErrorMessage from "./components/ErrorMessage";
import MovieDetails from "./components/MovieDetails";
import Footer from "./components/Footer";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedMovie, setSelectedMovie] = useState(null);

  const fetchMovies = async (query) => {
  setSearchTerm(query);
  setSelectedMovie(null);
  if (!query) {
    setMovies([]);
    return;
  }

    setLoading(true);
    setError("");

    try {
  const response = await axios.get(
    `http://www.omdbapi.com/?apikey=${import.meta.env.VITE_OMDB_API_KEY}&s=${encodeURIComponent(query)}`
  );
  

      if (response.data.Response === "True") {
        setMovies(response.data.Search);
        setError("");
      } else {
        
        setError(response.data.Error || "No results found. Try another movie name!");
        setMovies([]);
      }

    } catch (err) {

      setError("Uh oh! Couldn't get the movies. Check your internet connection or try again.");
      setMovies([]);
    } finally {
      setLoading(false);
    }
  };

  const findMovieDetails = (movie) => {
    if (!movie) {
      return null;
    }
    return {
      title: movie.Title || movie.title,
      poster: movie.Poster || movie.poster,
      releaseDate: movie.Year || movie.releaseDate,
      description: movie.Plot || "No description available.",
      genres: movie.Genre ? movie.Genre.split(",") : [],
      rating: movie.imdbRating || null,
    };
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-blue-50 to-[#0D1117] text-gray-900">
      {/* Header */}
      <header className="bg-blue-700 text-white py-6 shadow-md rounded-b-2xl mb-8">
        <div className="container mx-auto flex flex-col items-center">
          <h1 className="text-4xl font-extrabold mb-2 tracking-tight">🎬 ReviveScope</h1>
          <p className="text-lg opacity-80">Discover and explore movies instantly</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 container mx-auto px-4 max-w-6xl w-full">
        <SearchBar onSearch={fetchMovies} />

        {loading && <Loader />}
        {error && <ErrorMessage message={error} />}

        {!loading && !error && movies.length > 0 && (
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-2/3">
              <MovieList
                movies={movies.map((m) => ({
                  ...m,
                  id: m.imdbID,
                  title: m.Title,
                  poster: m.Poster,
                  releaseDate: m.Year,
                }))}
                onSelect={setSelectedMovie}
              />
            </div>
            <div className="md:w-1/3">
              {selectedMovie ? (
                <MovieDetails movie={findMovieDetails(selectedMovie)} />
              ) : (
                <div className="text-gray-500 text-center py-8">Select a movie to see details.</div>
              )}
            </div>
          </div>
        )}

        {!loading && !error && movies.length === 0 && (
          <p className="text-center text-gray-400 mt-12">
            Start searching for your favorite movies 🎬
          </p>
        )}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};


export default App;

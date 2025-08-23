import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Loader from "./Loader";
import ErrorMessage from "./ErrorMessage";


const MovieDetails = () => {
    const { id } = useParams();
    const [movie, setMovie] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchMovieDetails = async () => {
            setLoading(true);
            setError("");

            try {
                const res = await axios.get(
                    'http://www.omdbapi.com/?apikey=${import.meta.env.VITE_OMDB_API_KEY}&s=${encodeURIComponent(query)}'
                );

                if (res.data.Response === "True") {
                    setMovie(res.data);
                } else {
                    setError(res.data.Error || "Hmm, couldn't find that movie.");
                }
            } catch (err) {
                console.error("API call failed:", err);
                setError("Failed to load movie details. Check your connection!");
            } finally {
                setLoading(false);
            }
        };
        fetchMovieDetails();
    }, [id]);

    if (loading) return <Loader />;
    if (error) return <ErrorMessage message={error} />;
    
    if (!movie) {
        return <ErrorMessage message="Movie data not available." />;
    }

    const poster = movie.Poster !== "N/A" ? movie.Poster : "/placeholder.jpg";

    return (
        <div className="max-w-6xl mx-auto p-6 flex flex-col md:flex-row gap-6">
            <img src={poster} alt={movie.Title}
            className="w-full md:w-1/3 rounded-2xl shadow-lg"/>

            <div className="flex-1 text-gray-200">
                <h2 className="text-3xl font-bold text-cyan-400">{movie.Title}</h2>
                <p className="text-gray-400 mt-1">{movie.Year}</p>

                <div className="mt-2 flex flex-wrap gap-2">
                    {movie.Genre && movie.Genre.split(", ").map((genre) => (
                        <span key={genre}
                            className="px-3 py-1 bg-[#161B22] rounded-full text-sm font-semibold">
                            {genre}
                        </span>
                    ))}
                    <span className="px-3 py-1 bg-[#161B22] rounded-full text-sm font-semibold">
                        {movie.Runtime}
                    </span>
                </div>

                <div className="mt-4">
                    <h3 className="font-bold text-lg mb-2">Plot</h3>
                    <p>{movie.Plot}</p>
                </div>

                <div className="mt-4">
                    <h3 className="font-bold text-lg mb-1">Director</h3>
                    <p>{movie.Director}</p>

                    <h3 className="font-bold text-lg mt-3 mb-1">Cast</h3>
                    <p>{movie.Actors}</p>
                </div>

                <div className="mt-6">
                    <button className="bg-cyan-400 hover:bg-cyan-500 px-6 py-2 rounded-2xl font-bold text-black transition">
                        Add to Favorites
                    </button>
                </div>
            </div>
        </div>
    );
};

export default MovieDetails;
import React from "react";
import PropTypes from "prop-types";
import Loader from "./Loader";
import ErrorMessage from "./ErrorMessage";

const MovieDetails = ({ movie, loading, error, onClose }) => {
    if (loading) {
    return <Loader />;
    }
    if (error) {
    return <ErrorMessage message={error} />;
    }
    if (!movie) {
    return <div className="text-gray-500 text-center py-8">Select a movie to see details.</div>;
    }
    

    return (
        <section className="p-6 bg-white rounded shadow-md max-w-xl mx-auto">
            <div className="flex justify-between items-center mb-2">
                <h2 className="text-2xl font-bold">{movie.title}</h2>
                {onClose && (
                    <button
                        className="text-gray-400 hover:text-gray-700"
                        onClick={onClose}
                        aria-label="Close details"
                    >✖️</button>
                )}
            </div>
            <p className="text-gray-600 mb-4">{movie.releaseDate}</p>
            {movie.poster && (
                <img src={movie.poster} alt={`${movie.title} poster`} className="w-48 mb-4 rounded" />
            )}
            <p className="mb-2">{movie.description}</p>
            {movie.genres && movie.genres.length > 0 && (
                <div className="mb-2">
                    <strong>Genres:</strong> {movie.genres.join(", ")}
                </div>
            )}
            {movie.rating && (
                <div>
                    <strong>Rating:</strong> {movie.rating}
                </div>
            )}
        </section>
    );
};

MovieDetails.propTypes = {
    movie: PropTypes.object,
    loading: PropTypes.bool,
    error: PropTypes.string,
    onClose: PropTypes.func,
};

export default MovieDetails;
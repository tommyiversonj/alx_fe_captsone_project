import React from "react";
import PropTypes from "prop-types";


const MovieCard = ({ movie, onSelect, selected }) => {
    return (
        <button
            className={`bg-white rounded shadow transition p-4 w-full text-left focus:outline-none
        hover:shadow-lg
        ${selected ? "ring-4 ring-blue-400 border-blue-400 border-2" : ""}
    `}
            onClick={() => onSelect && onSelect(movie)}
            aria-label={`View details for ${movie.title}`}
            aria-pressed={!!selected}
        >
            {movie.poster && (
                <img
                    src={movie.poster}
                    alt={`${movie.title} poster`}
                    className="w-full h-64 object-cover mb-3 rounded"
                />
            )}
            <h3 className="text-lg font-semibold mb-1">{movie.title}</h3>
            <p className="text-gray-600">{movie.releaseDate}</p>
        </button>
    );
};

MovieCard.propTypes = {
    movie: PropTypes.shape({
        id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        title: PropTypes.string,
        poster: PropTypes.string,
        releaseDate: PropTypes.string,
    }).isRequired,
    onSelect: PropTypes.func,
    selected: PropTypes.bool,
};

export default MovieCard;
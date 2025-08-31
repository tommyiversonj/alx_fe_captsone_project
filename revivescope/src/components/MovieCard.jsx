import React from "react";
import { useNavigate } from "react-router-dom";


const MovieCard = ({ movie }) => {
    const navigate = useNavigate();

    const poster = movie.Poster !== "N/A" ? movie.Poster : 
    "https://via.placeholder.com/300x450.png?text=No+Image+Available";

    const handleClick = () => {
        navigate(`/movie/${movie.imdbID}`);
    };

    return (
        <div role="button" tabIndex={0} onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    handleClick();
                }
            }}
            className="bg-[#21262D] rounded-xl shadow-lg overflow-hidden cursor-pointer 
            hover:scale-105 transform transition-all duration-300 relative group"
            onClick={handleClick}
            aria-label={`View details for ${movie.Title}`}>
                
            <img src={poster} alt={movie.Title}
                className="w-full h-80 object-cover rounded-t-xl" />
            
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent 
            opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            <div className="p-4 absolute bottom-0 w-full text-white z-10">
                <h3 className="text-lg font-bold truncate group-hover:text-cyan-400 transition-colors 
                duration-200">{movie.Title}</h3>
                <p className="text-gray-400">{movie.Year}</p>
                <div className="flex items-center mt-2">
                    {movie.imdbRating !== "N/A" && (
                        <span
                            className={`px-2 py-1 text-sm rounded-full bg-yellow-400 text-black font-semibold`}>
                            {movie.imdbRating}
                        </span>
                    )}
                </div>
            </div>
        </div>
    );
};

export default MovieCard;
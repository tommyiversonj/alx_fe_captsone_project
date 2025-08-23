import React from "react";
import { useNavigate } from "react-router-dom";


const MovieCard = ({ movie }) => {
    const navigate = useNavigate();

    const poster = movie.Poster !== "N/A" ? movie.Poster : "/placeholder.jpg";
    
    const ratingValue = parseFloat(movie.imdbRating);
    const ratingColor = 
        !isNaN(ratingValue) && ratingValue >= 7 ? 
        "bg-green-500" : !isNaN(ratingValue) && ratingValue >= 5 ? 
        "bg-yellow-400" : "bg-red-500";

    const handleClick = () => {
        navigate(`/movie/${movie.imdbID}`);
    };

    return (
        <div
            role="button" 
            tabIndex={0}
            onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    handleClick();
                }
            }}
            className="bg-[#161B22] rounded-2xl shadow-lg overflow-hidden cursor-pointer
                hover:scale-105 transform transition-all duration-300"
            onClick={handleClick}
            aria-label={`View details for ${movie.Title}`}>

            <img 
                src={poster} 
                alt={movie.Title}
                className="w-full h-80 object-cover rounded-t-2xl"/>
            
            <div className="p-4">
                <h3 className="text-lg font-bold truncate">{movie.Title}</h3>
                <p className="text-gray-400">{movie.Year}</p>
                
                {movie.imdbRating !== "N/A" && !isNaN(ratingValue) && (
                    <span 
                        className={`inline-block mt-2 px-2 py-1 text-sm rounded ${ratingColor} 
                        text-black font-semibold`}
                    >
                        {movie.imdbRating}
                    </span>
                )}
            </div>
        </div>
    );
};

export default MovieCard;







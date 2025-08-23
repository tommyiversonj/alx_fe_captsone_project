import React from 'react';
import MovieCard from './MovieCard.jsx';

const MovieList = ({ movies = [] }) => {
    console.log("Rendering MovieList with movies:", movies);

    if (!movies.length) {
        return (
            <p className="text-gray-400 text-center mt-8">
                No movies found. Try searching for something else! 🎬
            </p>
        );
    }

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
            {movies.map((movie) => (
                <MovieCard
                    key={movie.imdbID}
                    movie={movie}
                />
            ))}
        </div>
    );
};

export default MovieList;
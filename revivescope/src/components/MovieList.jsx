import React from 'react';
import MovieCard from './MovieCard.jsx';
import Loader from './Loader.jsx';
import ErrorMessage from './ErrorMessage.jsx';
import PropTypes from 'prop-types';

const MovieList = ({ movies, loading, error, onSelect }) => {
    if (loading) {
        return <Loader />;
    }
    if (error) {
        return <ErrorMessage message={error} />;
    }
    if (!movies || movies.length === 0) {
        return <div className="text-gray-500 text-center py-8">No movies found.</div>;
    }

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {movies.map((movie) => (
                <MovieCard
                    key={movie.id || movie.imdbID}
                    movie={movie}
                    onSelect={onSelect}
                />
            ))}
        </div>
    );
};

MovieList.propTypes = {
    movies: PropTypes.arrayOf(PropTypes.object),
    loading: PropTypes.bool,
    error: PropTypes.string,
    onSelect: PropTypes.func,
    
};

export default MovieList;
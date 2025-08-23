import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
    const [query, setQuery] = useState(""); 
    const handleSubmit = (e) => {
        e.preventDefault();
        const cleanQuery = query.trim(); 

        if (!cleanQuery) {
            console.log("Input is empty, not searching.");
            return;
        }
        onSearch(cleanQuery);
    };

    return (
        <form onSubmit={handleSubmit}
            className="flex justify-center mb-6 w-full max-w-xl mx-auto"
            aria-label="Movie search form">

            <input type="text" placeholder="Type a movie name..." value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="flex-1 p-3 rounded-l-2xl bg-[#161B22] border border-cyan-400 text-gray-200
        focus:outline-none focus:ring-2 focus:ring-cyan-400 placeholder-gray-400"
                aria-label="Movie name input" />

            <button type="submit" className="px-5 rounded-r-2xl bg-cyan-400 text-black font-semibold hover:bg-cyan-500
        transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-400"
                aria-label="Search movies">Search</button>
        </form>
    );
};

export default SearchBar;
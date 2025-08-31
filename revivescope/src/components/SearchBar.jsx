import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
    const [query, setQuery] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        const cleanQuery = query.trim();

        if (!cleanQuery) {

            return;
        }
        onSearch(cleanQuery);
    };

    return (
        <form onSubmit={handleSubmit} className="flex w-full" aria-label="Movie search form">
            <input type="text" placeholder="Type a movie name..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="flex-1 p-3 rounded-l-lg bg-[#21262D] border border-gray-700 text-gray-200
        
                focus:outline-none focus:ring-2 focus:ring-cyan-400 placeholder-gray-400"
                aria-label="Movie name input"/>

            <button type="submit"
                className="px-4 rounded-r-lg bg-cyan-400 text-black font-semibold hover:bg-cyan-500
        
                transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                aria-label="Search movies">

                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="11" cy="11" r="8" />
                    <path d="M21 21l-4.35-4.35" />
                </svg>
            </button>
        </form>
    );
};

export default SearchBar;
import React from 'react';
import SearchBar from './SearchBar';

const Sidebar = ({ onSearch }) => {
    return (
        <div className="w-64 bg-[#0D1117] flex flex-col items-center py-8 px-4 border-r border-gray-800">
            <h1 className="text-4xl font-bold text-cyan-400 mb-8">
                ReviveScope
            </h1>
            <div className="w-full mb-8">
                <SearchBar onSearch={onSearch} />
            </div>

            <nav className="w-full">
                <ul className="flex flex-col space-y-4">
                    <li>
                        <a href="#" className="flex items-center px-4 py-2 text-gray-300 hover:bg-gray-800 rounded-lg transition-colors duration-200">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3" viewBox="0 0 24 24" fill="currentColor" stroke="none">
                                <path d="M12 2L4 5v6c0 5.55 3.51 10.23 8 11s8-5.45 8-11V5l-8-3z" />
                            </svg>
                            Home
                        </a>
                    </li>
                    <li>
                        <a href="#" className="flex items-center px-4 py-2 text-gray-300 hover:bg-gray-800 rounded-lg transition-colors duration-200">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3" viewBox="0 0 24 24" fill="currentColor" stroke="none">
                                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h12.38a2 2 0 0 1 1.63.78l3.63 4.22a1 1 0 0 1 .36.78z" />
                            </svg>
                            Watchlist
                        </a>
                    </li>
                    <li>
                        <a href="#" className="flex items-center px-4 py-2 text-gray-300 hover:bg-gray-800 rounded-lg transition-colors duration-200">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3" viewBox="0 0 24 24" fill="currentColor" stroke="none">
                                <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm0 18a8 8 0 1 1 0-16 8 8 0 0 1 0 16zM15 11l-4-4v8z" />
                            </svg>
                            Trending
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Sidebar;
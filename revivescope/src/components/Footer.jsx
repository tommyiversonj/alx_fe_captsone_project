import React from "react";

const Footer = () => (
    <footer className="bg-gray-900 text-gray-200 py-6 mt-12 rounded-t-2xl shadow-inner">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4">
            <div className="mb-2 md:mb-0">
                <span className="font-bold text-lg">ReviveScope</span> &copy; {new Date().getFullYear()}
            </div>
            <div className="flex gap-4">
                <a href="/about" className="hover:underline">About</a>
                <a href="/privacy" className="hover:underline">Privacy</a>
                <a href="https://www.omdbapi.com/" target="_blank" rel="noopener noreferrer" className="hover:underline">Powered by OMDb API</a>
            </div>
        </div>
    </footer>
);

export default Footer;
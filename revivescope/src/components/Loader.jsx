import React from "react";

const Loader = () => {
    return (
        <div className="flex flex-col justify-center items-center my-12">
            <div className="w-12 h-12 border-4 border-cyan-400 border-t-transparent rounded-full animate-spin"></div>
            <p className="mt-4 text-sm text-gray-500">Loading...</p> 
        </div>
    );
};

export default Loader;
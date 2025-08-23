import React from "react";

const ErrorMessage = ({ message }) => {
    if (!message) return null;

    return (
        <div className="max-w-md mx-auto bg-red-600 text-black font-semibold p-4 rounded-2xl 
            shadow-md text-center my-6" role="alert" aria-live="assertive">
            <span>⚠️ {message}</span>
        </div>
    );
};

export default ErrorMessage;
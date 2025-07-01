import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen bg-[#285259] px-4 text-center"
      style={{ color: 'white' }}
    >
      <h1 className="text-9xl font-extrabold mb-6 select-none">404</h1>
      <p className="text-2xl md:text-3xl mb-4 font-semibold">Oops! Page not found.</p>
      <p className="mb-8 max-w-md text-gray-300">
        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
      </p>
      <Link
        to="/"
        className="inline-block px-8 py-3 rounded-full text-[#285259] bg-[#4DBAA3] font-semibold hover:bg-[#3a9d8c] transition"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default ErrorPage;

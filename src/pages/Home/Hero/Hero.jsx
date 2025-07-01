import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section
      className="relative overflow-hidden bg-fixed bg-center bg-cover py-28 px-4 md:px-10 text-white"
      style={{
        backgroundImage:
          "url('https://cdn.pixabay.com/photo/2023/01/15/22/48/lake-7721285_640.jpg')",
      }}
    >
      {/* Black overlay */}
      <div className="absolute inset-0 bg-black opacity-70"></div>

      <div className="relative max-w-4xl mx-auto text-center rounded-lg px-6 py-8 backdrop-blur-sm animate-fadeIn">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6 drop-shadow-lg">
          Discover. Host.{' '}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#4DBAA3] via-[#285259] to-[#4DBAA3] animate-gradient-x">
            Experience Events
          </span>{' '}
          Like Never Before
        </h1>
        <p className="text-lg md:text-xl mb-10 drop-shadow-md">
          Welcome to <strong>Evently</strong> — your all-in-one platform for unforgettable events.
          Plan, promote, and participate in gatherings that make a difference.
        </p>
        <Link
          to="/all-reviews"
          className="inline-block bg-[#4DBAA3] text-white px-8 py-3 rounded-lg font-semibold text-lg shadow-lg hover:scale-105 hover:shadow-xl transition-transform duration-300"
        >
          Explore Events
        </Link>
      </div>

      <style>{`
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50% }
          50% { background-position: 100% 50% }
        }
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 5s ease infinite;
        }
        @keyframes fadeIn {
          from {opacity: 0; transform: translateY(15px);}
          to {opacity: 1; transform: translateY(0);}
        }
        .animate-fadeIn {
          animation: fadeIn 1s ease forwards;
        }
      `}</style>
    </section>
  );
};

export default Hero;

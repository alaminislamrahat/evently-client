import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section
      className="bg-cover bg-center bg-no-repeat py-28 px-4 md:px-10 text-white"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1471967183320-ee018f6e114a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fHw%3D')", // Replace with your image
      }}
    >
      <div className="max-w-4xl mx-auto text-center backdrop-brightness-90 rounded-lg px-4 py-6">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6 text-white drop-shadow-md">
          Discover. Host. <span className="text-[#42baa3]">Experience Events</span> Like Never Before
        </h1>
        <p className="text-lg md:text-xl text-white mb-8 drop-shadow-sm">
          Welcome to <strong>Evently</strong> — your all-in-one platform for unforgettable events.
          Plan, promote, and participate in gatherings that make a difference.
        </p>
        <Link
          to="/all-reviews"
          className="inline-block bg-[#085259] text-white px-6 py-3 rounded-lg font-medium text-lg hover:bg-opacity-90 transition"
        >
          Explore Events
        </Link>
      </div>
    </section>
  );
};

export default Hero;

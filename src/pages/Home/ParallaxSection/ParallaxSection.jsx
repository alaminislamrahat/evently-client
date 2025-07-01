import React from 'react';

const ParallaxSection = () => {
  return (
    <section
      className="relative bg-fixed bg-center bg-cover h-96 flex items-center justify-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1470&q=80')",
      }}
    >
      <div className="bg-black bg-opacity-50 p-8 rounded-lg max-w-3xl text-center mx-4">
        <h2 className="text-4xl font-bold text-white mb-4" style={{ color: '#4DBAA3' }}>
          Discover Events Like Never Before
        </h2>
        <p className="text-white text-lg max-w-xl mx-auto">
          Evently brings you closer to the experiences you love. Connect, join, and make memories.
        </p>
      </div>
    </section>
  );
};

export default ParallaxSection;

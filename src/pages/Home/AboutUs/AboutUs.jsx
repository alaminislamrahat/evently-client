import React from 'react';

const AboutUs = () => {
  return (
    <section className="bg-white py-20 px-4 md:px-10 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Left: Text + Short Image */}
        <div className="flex flex-col justify-center space-y-10">
          {/* Heading */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-[#42baa3] mb-2">
              Discover Evently
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-[#085259] leading-snug">
              Connecting people through unforgettable events
            </h2>
            <p className="text-gray-600 text-lg mt-4 max-w-md">
              Evently is your trusted partner in creating, hosting, and discovering events that leave a lasting impression — from live concerts to intimate workshops.
            </p>
          </div>

          {/* Small Image */}
          <img
            src="https://cdn.pixabay.com/photo/2015/05/31/11/18/table-setting-791149_640.jpg"
            alt="Colorful event"
            className="rounded-xl shadow-lg w-full max-w-sm"
          />
        </div>

        {/* Right: Tall Image + Paragraph */}
        <div className="flex flex-col space-y-6">
          <img
            src="https://cdn.pixabay.com/photo/2016/11/23/15/48/audience-1853662_1280.jpg"
            alt="Event networking"
            className="rounded-xl shadow-lg w-full object-cover h-[420px]"
          />
          <p className="text-gray-500 text-base max-w-md leading-relaxed">
            Whether you're a host planning your next big idea or a guest looking for something inspiring — Evently brings communities together with a seamless and delightful experience.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;

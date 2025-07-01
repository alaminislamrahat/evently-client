import React from 'react';

const AboutUs = () => {
  return (
    <section className="bg-white py-16 px-4 md:px-10 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-[#085259] mb-4">
          About <span className="text-[#42baa3]">Us</span>
        </h2>
        <p className="text-gray-600 max-w-xl mx-auto">
          Empowering communities through unforgettable events — from thrilling conferences to memorable meetups.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-10 items-center">
        {/* Text Content */}
        <div>
          <h3 className="text-2xl font-semibold text-[#085259] mb-4">Our Mission</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            At <strong>Evently</strong>, we aim to connect people through events that inspire, engage, and bring communities together.
            From industry-leading expos to local workshops, our platform empowers you to create, discover, and manage meaningful experiences.
          </p>

          <h3 className="text-xl font-semibold text-[#085259] mb-2">Why Choose Evently?</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Effortless event creation and management tools.</li>
            <li>Custom dashboards for organizers and attendees.</li>
            <li>Scalable solutions for both small and large gatherings.</li>
            <li>Secure, intuitive, and mobile-friendly platform.</li>
          </ul>
        </div>

        {/* Image or Illustration */}
        <div className="flex justify-center">
          <img
            src="https://plus.unsplash.com/premium_photo-1664284044625-a1879ebb65e3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDQyfHx8ZW58MHx8fHx8"
            alt="About us illustration"
            className="rounded-xl shadow-md max-w-md w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;

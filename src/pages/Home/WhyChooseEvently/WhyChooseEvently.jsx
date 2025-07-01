import React from 'react';
import { FaRocket, FaLock, FaUsers, FaBell } from 'react-icons/fa';

const WhyChooseEvently = () => {
  const reasons = [
    {
      icon: <FaRocket size={48} />,
      title: 'Effortless Event Discovery',
      description:
        'Find the perfect event in seconds with our intuitive search and personalized recommendations tailored just for you.',
    },
    {
      icon: <FaLock size={48} />,
      title: 'Secure & Trusted Platform',
      description:
        'Your privacy and data security are our top priorities — enjoy seamless, worry-free event participation.',
    },
    {
      icon: <FaUsers size={48} />,
      title: 'Vibrant Community',
      description:
        'Join thousands of event lovers and organizers collaborating to make every event memorable.',
    },
    {
      icon: <FaBell size={48} />,
      title: 'Instant Notifications',
      description:
        'Never miss out with real-time updates about your events, invites, and exclusive offers.',
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <h2
        className="text-4xl font-extrabold mb-12 text-center"
        style={{ color: '#285259' }}
      >
        Why Choose <span style={{ color: '#4DBAA3' }}>Evently</span>?
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
        {reasons.map(({ icon, title, description }, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center text-center p-8 border rounded-3xl shadow-lg hover:shadow-2xl transition"
            style={{ borderColor: '#4DBAA3' }}
          >
            <div className="text-[#4DBAA3] mb-6">{icon}</div>
            <h3
              className="text-2xl font-semibold mb-4"
              style={{ color: '#285259' }}
            >
              {title}
            </h3>
            <p className="text-gray-700 text-base leading-relaxed">{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseEvently;

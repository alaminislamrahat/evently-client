import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple validation example
    if (!formData.name || !formData.email || !formData.message) {
      setStatus({ success: false, message: 'Please fill all fields.' });
      return;
    }

    // Here you would normally send the form data to a backend or API
    setStatus({ success: true, message: 'Thank you! Your message has been sent.' });
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section className="max-w-4xl mx-auto px-6 py-16" id="contact">
      <h2 className="text-3xl font-bold text-center mb-10 text-[#285259]">Contact Us</h2>

      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow-lg space-y-6">
        <div>
          <label htmlFor="name" className="block text-[#285259] font-semibold mb-2">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your full name"
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#4DBAA3]"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-[#285259] font-semibold mb-2">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="your.email@example.com"
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#4DBAA3]"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-[#285259] font-semibold mb-2">Message</label>
          <textarea
            name="message"
            id="message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            placeholder="Write your message here..."
            className="w-full border border-gray-300 rounded-md px-4 py-2 resize-none focus:outline-none focus:ring-2 focus:ring-[#4DBAA3]"
          ></textarea>
        </div>

        {status && (
          <p
            className={`text-center ${
              status.success ? 'text-green-600' : 'text-red-600'
            } font-semibold`}
          >
            {status.message}
          </p>
        )}

        <button
          type="submit"
          className="w-full bg-[#4DBAA3] text-white font-semibold py-3 rounded-md hover:bg-[#3da890] transition"
        >
          Send Message
        </button>
      </form>
    </section>
  );
};

export default Contact;

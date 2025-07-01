import React, { useState, useContext, useEffect } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import { AuthContext } from '../../providers/AuthProviders';

const AddEvent = () => {
  const { user } = useContext(AuthContext);

  const [formData, setFormData] = useState({
    title: '',
    name: '',
    dateTime: '',
    location: '',
    description: '',
    attendeeCount: 0,
    email: '',
  });

  useEffect(() => {
    if (user?.email) {
      setFormData((prev) => ({
        ...prev,
        email: user.email,
      }));
    }
  }, [user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Add joinedUsers: [] here before sending
    const dataToSend = {
      ...formData,
      joinedUsers: [], // initialize joinedUsers array here
    };

    try {
      await axios.post('http://localhost:5000/addEvent', dataToSend);
      toast.success('Event added successfully!');
      setFormData({
        title: '',
        name: '',
        dateTime: '',
        location: '',
        description: '',
        attendeeCount: 0,
        email: user?.email || '',
      });
    } catch (err) {
      console.error(err);
      toast.error('Failed to add event');
    }
  };

  return (
    <section className="max-w-4xl mx-auto px-4 md:px-8 py-12 md:py-16">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#085259] mb-10 text-center">
        Add Event
      </h2>

      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-xl p-6 md:p-10 space-y-6"
      >
        {/* Event Title */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Event Title
          </label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
            placeholder="Enter event title"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-[#085259] focus:outline-none"
          />
        </div>

        {/* Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Your Name
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Enter your name"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-[#085259] focus:outline-none"
          />
        </div>

        {/* Date and Time */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Date and Time
          </label>
          <input
            type="datetime-local"
            name="dateTime"
            value={formData.dateTime}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-[#085259] focus:outline-none"
          />
        </div>

        {/* Location */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Location
          </label>
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            required
            placeholder="Event location"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-[#085259] focus:outline-none"
          />
        </div>

        {/* Description */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Description
          </label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
            placeholder="Describe the event..."
            rows="4"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-[#085259] focus:outline-none"
          />
        </div>

        {/* Submit Button */}
        <div className="pt-4">
          <button
            type="submit"
            className="w-full bg-[#085259] text-white text-sm font-semibold py-3 rounded-lg hover:bg-opacity-90 transition duration-200"
          >
            Add Event
          </button>
        </div>
      </form>
    </section>
  );
};

export default AddEvent;

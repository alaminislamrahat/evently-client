import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../providers/AuthProviders';

const AllEvents = () => {
  const { user } = useContext(AuthContext);
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      const res = await axios.get('https://evently-server-sigma.vercel.app/addEvent');
      setEvents(res.data.slice(0, 6)); // Show only 6 events
    } catch {
      toast.error('Failed to fetch events');
    }
  };

  const hasJoined = (event) => {
    if (!user?.email) return false;
    return event.joinedUsers?.includes(user.email);
  };

  const handleJoin = async (eventId) => {
    if (!user?.email) {
      toast.error('You must be logged in to join');
      return;
    }
    try {
      await axios.patch(`https://evently-server-sigma.vercel.app/addEvent/${eventId}`, {
        userEmail: user.email,
      });
      toast.success('Successfully joined the event');
      fetchEvents(); // Refresh event list
    } catch (err) {
      toast.error(err.response?.data?.message || 'Failed to join event');
    }
  };

  const formatDate = (dateString) => {
    const options = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
    };
    return new Date(dateString).toLocaleString(undefined, options);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-center mb-10" style={{ color: '#285259' }}>
        Explore Featured Events
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {events.map((event) => (
          <div
            key={event._id}
            className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition duration-300 flex flex-col justify-between"
          >
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-2" style={{ color: '#285259' }}>
                {event.title}
              </h2>
              <p className="text-sm text-gray-600 mb-1">
                <strong>Organizer:</strong> {event.name}
              </p>
              <p className="text-sm text-gray-600 mb-1">
                <strong>Date:</strong> {formatDate(event.dateTime)}
              </p>
              <p className="text-sm text-gray-600 mb-1">
                <strong>Location:</strong> {event.location}
              </p>
              <p className="text-gray-700 text-sm mt-2 line-clamp-3">{event.description}</p>
            </div>
            <div className="px-6 pb-4 flex items-center justify-between">
              <span className="text-xs text-gray-600">
                Attendees: {event.joinedUsers?.length || 0}
              </span>
              <button
                disabled={hasJoined(event)}
                onClick={() => handleJoin(event._id)}
                className={`text-white text-sm px-4 py-1 rounded font-medium transition ${
                  hasJoined(event)
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-[#4DBAA3] hover:bg-opacity-90'
                }`}
              >
                {hasJoined(event) ? 'Joined' : 'Join Event'}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllEvents;

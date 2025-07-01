// Events.jsx
import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import { AuthContext } from '../../providers/AuthProviders';

const Events = () => {
  const { user } = useContext(AuthContext);
  const [events, setEvents] = useState([]);
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      const res = await axios.get('https://evently-server-sigma.vercel.app/addEvent');
      setEvents(res.data);
    } catch {
      toast.error('Failed to fetch events');
    }
  };

  const today = new Date();
  const isSameDay = (d1, d2) =>
    d1.getDate() === d2.getDate() &&
    d1.getMonth() === d2.getMonth() &&
    d1.getFullYear() === d2.getFullYear();

  const getWeekStart = (date) => {
    const d = new Date(date);
    const day = d.getDay();
    const diff = d.getDate() - day + (day === 0 ? -6 : 1);
    return new Date(d.setDate(diff));
  };

  const isThisWeek = (date) => {
    const d = new Date(date);
    const startOfThisWeek = getWeekStart(new Date());
    const endOfThisWeek = new Date(startOfThisWeek);
    endOfThisWeek.setDate(endOfThisWeek.getDate() + 6);
    return d >= startOfThisWeek && d <= endOfThisWeek;
  };

  const isLastWeek = (date) => {
    const d = new Date(date);
    const startOfLastWeek = getWeekStart(new Date());
    startOfLastWeek.setDate(startOfLastWeek.getDate() - 7);
    const endOfLastWeek = new Date(startOfLastWeek);
    endOfLastWeek.setDate(endOfLastWeek.getDate() + 6);
    return d >= startOfLastWeek && d <= endOfLastWeek;
  };

  const isThisMonth = (date) => {
    const d = new Date(date);
    const now = new Date();
    return d.getMonth() === now.getMonth() && d.getFullYear() === now.getFullYear();
  };

  const isLastMonth = (date) => {
    const d = new Date(date);
    const now = new Date();
    const lastMonth = now.getMonth() === 0 ? 11 : now.getMonth() - 1;
    const year = now.getMonth() === 0 ? now.getFullYear() - 1 : now.getFullYear();
    return d.getMonth() === lastMonth && d.getFullYear() === year;
  };

  const filteredEvents = events.filter(event => {
    const matchTitle = event.title.toLowerCase().includes(search.toLowerCase());
    const eventDate = new Date(event.dateTime);

    const matchDate = (() => {
      if (filter === 'today') return isSameDay(eventDate, today);
      if (filter === 'thisWeek') return isThisWeek(eventDate);
      if (filter === 'lastWeek') return isLastWeek(eventDate);
      if (filter === 'thisMonth') return isThisMonth(eventDate);
      if (filter === 'lastMonth') return isLastMonth(eventDate);
      return true;
    })();

    return matchTitle && matchDate;
  });

  const formatDate = (dateString) => {
    const options = {
      year: 'numeric', month: 'long', day: 'numeric',
      hour: 'numeric', minute: 'numeric'
    };
    return new Date(dateString).toLocaleString(undefined, options);
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
      await axios.patch(`https://evently-server-sigma.vercel.app/addEvent/${eventId}`, { userEmail: user.email });
      toast.success('Successfully joined the event');
      fetchEvents();
    } catch (err) {
      toast.error(err.response?.data?.message || 'Failed to join event');
    }
  };

  return (
    <section className="max-w-6xl mx-auto px-4 py-10">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
        <input
          type="text"
          placeholder="Search by title..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border px-4 py-2 rounded w-full md:w-1/2"
        />
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="border px-4 py-2 rounded w-full md:w-auto"
        >
          <option value="all">All</option>
          <option value="today">Today</option>
          <option value="thisWeek">This Week</option>
          <option value="lastWeek">Last Week</option>
          <option value="thisMonth">This Month</option>
          <option value="lastMonth">Last Month</option>
        </select>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredEvents.map(event => (
          <div key={event._id} className="border rounded-xl shadow p-5 space-y-3">
            <h3 className="text-xl font-bold text-[#085259]">{event.title}</h3>
            <p><strong>Posted By:</strong> {event.name}</p>
            <p><strong>Date:</strong> {formatDate(event.dateTime)}</p>
            <p><strong>Location:</strong> {event.location}</p>
            <p className="text-sm text-gray-700">{event.description}</p>
            <p className="font-medium text-gray-600">Attendees: {event.attendeeCount}</p>
            <button
              disabled={hasJoined(event)}
              onClick={() => handleJoin(event._id)}
              className={`w-full py-2 rounded text-white font-semibold transition ${
                hasJoined(event)
                  ? 'bg-gray-400 cursor-not-allowed'
                  : 'bg-[#085259] hover:bg-opacity-90'
              }`}
            >
              {hasJoined(event) ? 'Joined' : 'Join Event'}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Events;

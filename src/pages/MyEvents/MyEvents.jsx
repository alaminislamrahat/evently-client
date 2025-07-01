import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import { AuthContext } from '../../providers/AuthProviders';

const MyEvents = () => {
  const { user } = useContext(AuthContext);
  const [myEvents, setMyEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  // For update modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [eventToUpdate, setEventToUpdate] = useState(null);
  const [updateData, setUpdateData] = useState({
    title: '',
    dateTime: '',
    location: '',
    description: '',
  });

  // For delete confirmation modal
  const [deleteEventId, setDeleteEventId] = useState(null);

  useEffect(() => {
    if (!user?.email) return;
    fetchMyEvents();
  }, [user]);

  const fetchMyEvents = async () => {
    try {
      setLoading(true);
      const res = await axios.get(`http://localhost:5000/myPost?email=${user?.email}`);
      setMyEvents(res.data.filter(event => event.email === user.email));
    } catch {
      toast.error('Failed to load your events');
    } finally {
      setLoading(false);
    }
  };

  // Open delete confirmation modal
  const confirmDelete = (id) => {
    setDeleteEventId(id);
  };

  // Actual delete after confirmation
  const handleDeleteConfirmed = async () => {
    try {
      await axios.delete(`http://localhost:5000/delete/${deleteEventId}`);
      toast.success('Event deleted');
      setDeleteEventId(null);
      fetchMyEvents();
    } catch {
      toast.error('Failed to delete event');
      setDeleteEventId(null);
    }
  };

  // Cancel delete modal
  const cancelDelete = () => {
    setDeleteEventId(null);
  };

  const openUpdateModal = (event) => {
    setEventToUpdate(event);
    setUpdateData({
      title: event.title,
      dateTime: event.dateTime.slice(0, 16),
      location: event.location,
      description: event.description,
    });
    setIsModalOpen(true);
  };

  const handleUpdateChange = (e) => {
    const { name, value } = e.target;
    setUpdateData(prev => ({ ...prev, [name]: value }));
  };

  const handleUpdateSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:5000/update/${eventToUpdate._id}`, updateData);
      toast.success('Event updated successfully');
      setIsModalOpen(false);
      fetchMyEvents();
    } catch {
      toast.error('Failed to update event');
    }
  };

  if (!user) {
    return <p className="text-center mt-10 text-gray-600">Please login to see your events.</p>;
  }

  return (
    <section className="max-w-6xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold text-white mb-8 text-center">My Events</h2>

      {loading ? (
        <p className="text-center text-gray-500">Loading your events...</p>
      ) : myEvents.length === 0 ? (
        <p className="text-center text-gray-600">You have not added any events yet.</p>
      ) : (
        <>
          {/* Desktop Table with fixed width and horizontal scroll */}
          <div className="w-full max-w-full overflow-x-auto border rounded-lg shadow-md border-gray-300">
            <table className="min-w-[900px] border-collapse divide-y divide-gray-200">
              <thead className="bg-[#085259] text-white">
                <tr>
                  <th className="px-6 py-3 text-left text-sm font-semibold">Event Title</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold">Posted By</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold">Date & Time</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold">Location</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold">Description</th>
                  <th className="px-6 py-3 text-center text-sm font-semibold">Attendees</th>
                  <th className="px-6 py-3 text-center text-sm font-semibold">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {myEvents.map(event => (
                  <tr key={event._id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-[#085259] max-w-xs truncate">{event.title}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">{event.name}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">{new Date(event.dateTime).toLocaleString()}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm max-w-xs truncate">{event.location}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm max-w-sm truncate">{event.description}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-center text-sm font-semibold">{event.attendeeCount}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-center text-sm flex gap-2 justify-center">
                      <button
                        onClick={() => openUpdateModal(event)}
                        className="bg-[#085259] text-white px-3 py-1 rounded hover:bg-[#063b3d] transition"
                      >
                        Update
                      </button>
                      <button
                        onClick={() => confirmDelete(event._id)}
                        className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700 transition"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Cards */}
          <div className="md:hidden flex flex-col gap-6 mt-6">
            {myEvents.map(event => (
              <div
                key={event._id}
                className="border rounded-xl shadow p-6 space-y-2 bg-white"
              >
                <h3 className="text-xl font-semibold text-[#085259]">{event.title}</h3>
                <p><strong>Posted By:</strong> {event.name}</p>
                <p><strong>Date & Time:</strong> {new Date(event.dateTime).toLocaleString()}</p>
                <p><strong>Location:</strong> {event.location}</p>
                <p className="text-gray-700">{event.description}</p>
                <p className="font-medium text-gray-600">Attendees: {event.attendeeCount}</p>
                <div className="flex gap-4 mt-4">
                  <button
                    onClick={() => openUpdateModal(event)}
                    className="flex-1 bg-[#085259] text-white py-2 rounded hover:bg-[#063b3d] transition"
                  >
                    Update
                  </button>
                  <button
                    onClick={() => confirmDelete(event._id)}
                    className="flex-1 bg-red-600 text-white py-2 rounded hover:bg-red-700 transition"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </>
      )}

      {/* Update Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg max-w-md w-full p-6 relative">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-3 right-3 text-gray-600 hover:text-gray-900 font-bold text-xl"
            >
              &times;
            </button>
            <h3 className="text-2xl font-semibold text-[#085259] mb-6">Update Event</h3>
            <form onSubmit={handleUpdateSubmit} className="space-y-4">
              <div>
                <label className="block mb-1 font-medium">Event Title</label>
                <input
                  type="text"
                  name="title"
                  value={updateData.title}
                  onChange={handleUpdateChange}
                  required
                  className="w-full border rounded px-3 py-2"
                />
              </div>
              <div>
                <label className="block mb-1 font-medium">Date and Time</label>
                <input
                  type="datetime-local"
                  name="dateTime"
                  value={updateData.dateTime}
                  onChange={handleUpdateChange}
                  required
                  className="w-full border rounded px-3 py-2"
                />
              </div>
              <div>
                <label className="block mb-1 font-medium">Location</label>
                <input
                  type="text"
                  name="location"
                  value={updateData.location}
                  onChange={handleUpdateChange}
                  required
                  className="w-full border rounded px-3 py-2"
                />
              </div>
              <div>
                <label className="block mb-1 font-medium">Description</label>
                <textarea
                  name="description"
                  value={updateData.description}
                  onChange={handleUpdateChange}
                  required
                  rows={4}
                  className="w-full border rounded px-3 py-2"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-[#085259] text-white py-2 rounded hover:bg-[#063b3d] transition"
              >
                Save Changes
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {deleteEventId && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-sm w-full text-center shadow-lg">
            <p className="mb-6 text-lg font-semibold text-gray-700">
              Are you sure you want to delete this event?
            </p>
            <div className="flex justify-center gap-4">
              <button
                onClick={handleDeleteConfirmed}
                className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition"
              >
                Yes, Delete
              </button>
              <button
                onClick={cancelDelete}
                className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400 transition"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default MyEvents;

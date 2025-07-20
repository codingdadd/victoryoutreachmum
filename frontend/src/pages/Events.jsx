import React, { useEffect, useState } from 'react';
import { buildAuthHeaders } from '../utils';

export default function EventsEditor() {
  const [events, setEvents] = useState([]);
  const [form, setForm] = useState({
    id: null,
    title: '',
    date: '',
    time: '',
    address: '',
    description: '',
    image_url: ''
  });

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      const res = await fetch('http://localhost:5000/events');
      const data = await res.json();
      setEvents(data);
    } catch (err) {
      console.error('Error fetching events:', err);
    }
  };

  const handleInput = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSave = async () => {
    try {
      const res = await fetch('http://localhost:5000/events', {
        method: 'POST',
        headers: buildAuthHeaders(),
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error('Save failed');
      alert('Event saved');
      setForm({ id: null, title: '', date: '', time: '', address: '', description: '', image_url: '' });
      fetchEvents();
    } catch (err) {
      alert(err.message);
    }
  };

  const handleEdit = (event) => {
    setForm({ ...event });
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Delete this event?')) return;
    try {
      const res = await fetch(`http://localhost:5000/events/${id}`, {
        method: 'DELETE',
        headers: buildAuthHeaders(),
      });
      if (!res.ok) throw new Error('Delete failed');
      alert('Event deleted');
      fetchEvents();
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className="p-6 bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Manage Events</h2>
      <div className="space-y-4 mb-6">
        <input name="title" placeholder="Title" value={form.title} onChange={handleInput} className="w-full border p-2 rounded" />
        <input name="date" type="date" value={form.date} onChange={handleInput} className="w-full border p-2 rounded" />
        <input name="time" placeholder="Time" value={form.time} onChange={handleInput} className="w-full border p-2 rounded" />
        <input name="address" placeholder="Address" value={form.address} onChange={handleInput} className="w-full border p-2 rounded" />
        <textarea name="description" placeholder="Description" value={form.description} onChange={handleInput} className="w-full border p-2 rounded" />
        <input name="image_url" placeholder="Image URL" value={form.image_url} onChange={handleInput} className="w-full border p-2 rounded" />
        <button onClick={handleSave} className="bg-blue-600 text-white px-4 py-2 rounded">
          {form.id ? 'Update Event' : 'Add Event'}
        </button>
      </div>

      <ul className="space-y-4">
        {events.map(event => (
          <li key={event.id} className="border p-4 rounded shadow">
            <h3 className="text-xl font-semibold">{event.title}</h3>
            <p className="text-gray-600">{event.date} @ {event.time}</p>
            <p className="text-gray-600 mb-2">{event.address}</p>
            <p className="text-gray-600 mb-2">{event.description}</p>
            {event.image_url && <img src={event.image_url} alt="Event" className="w-32 h-20 object-cover mb-2" />}
            <div className="space-x-2">
              <button onClick={() => handleEdit(event)} className="bg-yellow-500 text-white px-3 py-1 rounded">Edit</button>
              <button onClick={() => handleDelete(event.id)} className="bg-red-600 text-white px-3 py-1 rounded">Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

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

 

 return (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {events.map(ev => (
      <div
        key={ev.id}
        className="bg-gray-50 rounded-3xl shadow-[8px_8px_24px_#e5e7eb,_-8px_-8px_24px_#ffffff] p-6 transition hover:scale-105"
      >
        {ev.image_url && (
          <img src={ev.image_url} alt={ev.title} className="w-full h-48 object-cover rounded-xl mb-4 shadow" />
        )}
        <h3 className="text-xl font-semibold mb-2">{ev.title}</h3>
        <p className="text-gray-500 mb-1">{ev.date} at {ev.time}</p>
        <p className="mb-2 text-gray-700">{ev.address}</p>
        <p className="text-sm text-gray-600">{ev.description}</p>
      </div>
    ))}
  </div>
);

}

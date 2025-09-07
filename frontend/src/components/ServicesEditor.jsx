import React, { useEffect, useState } from 'react';
import { buildAuthHeaders } from '../utils';

const iconOptions = ['Music', 'Book', 'Heart', 'Coffee'];

export default function ServicesEditor() {
  const [services, setServices] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [editingId, setEditingId] = useState(null);
  const [iconChoice, setIconChoice] = useState('Heart');
  const [timing, setTiming] = useState('');
  const [sdate, setDate] = useState('');

  useEffect(() => {
    fetchServices();
  }, []);

  const fetchServices = async () => {
    try {
      const res = await fetch('https://vom-backend.onrender.com/services');
      const data = await res.json();
      setServices(data);
    } catch (error) {
      console.error('Error fetching services:', error);
    }
  };

  const handleSave = async () => {
    console.log("Saving with data:", {
  id: editingId,
  title,
  description,
  icon: iconChoice,
  timing,
  sdate,
});

    try {
      const selectedIcon = iconChoice || 'Heart';

      const res = await fetch('https://vom-backend.onrender.com/services', {
        method: 'POST',
        headers: {
          ...buildAuthHeaders(),
          'Content-Type': 'application/json',
        },
        
        body: JSON.stringify({
          id: editingId,
          title,
          description,
          icon: selectedIcon,
          timing: timing.trim(),
          sdate: sdate.trim(),
        
        
        }),
        
      });


      if (!res.ok) throw new Error('Failed to save');
      alert('Service saved');
      setTitle('');
      setDescription('');
      setIconChoice('Heart');
      setTiming('');
      setDate('');
      setEditingId(null);
      fetchServices();
    } catch (err) {
      alert(err.message);
    }
  };

  const handleEdit = (service) => {
    setTitle(service.title);
    setDescription(service.description);
    setEditingId(service.id);
    setIconChoice(service.icon || 'Heart');
    setTiming(service.timing || '');
    setDate(service.sdate || '');
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Delete this service?')) return;
    try {
      const res = await fetch(`https://vom-backend.onrender.com/services/${id}`, {
        method: 'DELETE',
        headers: buildAuthHeaders(),
      });
      if (!res.ok) throw new Error('Delete failed');
      alert('Service deleted');
      fetchServices();
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className="p-6 bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Manage Services</h2>

      <div className="space-y-4 mb-6">
        <input
          className="w-full border p-2 rounded"
          placeholder="Service Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          className="w-full border p-2 rounded"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        {/* Date Input */}
        <input
          type="date"
          className="w-full border p-2 rounded"
          value={sdate}
          onChange={(e) => setDate(e.target.value)}
        />

        {/* Time Range as Text */}
        <input
          type="text"
          className="w-full border p-2 rounded"
          placeholder="e.g. 07:00 PM - 09:00 PM"
          value={timing}
          onChange={(e) => setTiming(e.target.value)}
        />

        {/* Icon Dropdown */}
        <select
          className="w-full border p-2 rounded"
          value={iconChoice}
          onChange={(e) => setIconChoice(e.target.value)}
        >
          {iconOptions.map((icon) => (
            <option key={icon} value={icon}>
              {icon}
            </option>
          ))}
        </select>

        <button
          className="bg-blue-600 text-white px-4 py-2 rounded"
          onClick={handleSave}
        >
          {editingId ? 'Update Service' : 'Add Service'}
        </button>
      </div>

      <ul className="space-y-4">
        {services.map((s) => (
          <li key={s.id} className="border p-4 rounded shadow">
            <h3 className="text-xl font-semibold">{s.title}</h3>
            <p className="text-gray-600 mb-1">{s.description}</p>
            <p className="text-gray-500 text-sm">Icon: {s.icon}</p>
            <p className="text-gray-500 text-sm">Date: {s.sdate}</p>
            <p className="text-gray-500 text-sm">Time: {s.timing}</p>
            <div className="space-x-2 mt-2">
              <button
                className="bg-yellow-500 text-white px-3 py-1 rounded"
                onClick={() => handleEdit(s)}
              >
                Edit
              </button>
              <button
                className="bg-red-600 text-white px-3 py-1 rounded"
                onClick={() => handleDelete(s.id)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

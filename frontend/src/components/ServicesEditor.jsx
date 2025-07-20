import React, { useEffect, useState } from 'react';
import { buildAuthHeaders } from '../utils';

export default function ServicesEditor() {
  const [services, setServices] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    fetchServices();
  }, []);

  const fetchServices = async () => {
    try {
      const res = await fetch('http://localhost:5000/services');
      const data = await res.json();
      setServices(data);
    } catch (error) {
      console.error('Error fetching services:', error);
    }
  };

  const handleSave = async () => {
    try {
      const res = await fetch('http://localhost:5000/services', {
        method: 'POST',
        headers: buildAuthHeaders(),
        body: JSON.stringify({ id: editingId, title, description }),
      });
      if (!res.ok) throw new Error('Failed to save');
      alert('Service saved');
      setTitle('');
      setDescription('');
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
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Delete this service?')) return;
    try {
      const res = await fetch(`http://localhost:5000/services/${id}`, {
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
            <p className="text-gray-600 mb-2">{s.description}</p>
            <div className="space-x-2">
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

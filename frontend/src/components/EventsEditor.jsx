import React, { useState, useEffect } from 'react';
import { buildAuthHeaders } from '../utils';
// Removed `supabase` import as direct Supabase upload is moved to backend

export default function EventsEditor() {
  const [items, setItems] = useState([]);
  const [edit, setEdit] = useState({
    image_url: '',
    title: '',
    date: '',
    time: '',
    address: '',
    description: '',
    id: null // Added id to track which event is being edited/deleted
  });

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = () => {
    fetch('http://localhost:5000/events')
      .then(r => r.json())
      .then(setItems)
      .catch(console.error);
  };

  const uploadImage = async (file) => {
    const formData = new FormData();
    formData.append('file', file);

    try {
      const res = await fetch('http://localhost:5000/upload', {
        method: 'POST',
        headers: {
          Authorization: buildAuthHeaders().Authorization, // Only include Authorization header for file upload
        },
        body: formData,
      });

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.error || 'Image upload failed');
      }

      const data = await res.json();
      setEdit(e => ({ ...e, image_url: data.imageUrl })); // Update image_url with the public URL
      alert('Image uploaded successfully!');
    } catch (error) {
      console.error('Error uploading image:', error);
      alert(`Error uploading image: ${error.message}`);
    }
  };

  const saveOne = async () => {
    try {
      const res = await fetch('http://localhost:5000/events', {
        method: 'POST',
        headers: buildAuthHeaders(),
        body: JSON.stringify(edit),
      });

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.error || 'Failed to save event');
      }

      setEdit({ image_url: '', title: '', date: '', time: '', address: '', description: '', id: null }); // Reset form
      fetchEvents(); // Re-fetch to update the list
      alert('Event saved successfully!');
    } catch (error) {
      console.error("Error saving event:", error);
      alert(`Error: ${error.message}`);
    }
  };

  const deleteOne = async (id) => {
    if (window.confirm("Are you sure you want to delete this event?")) {
      try {
        const res = await fetch(`http://localhost:5000/events/${id}`, {
          method: 'DELETE',
          headers: buildAuthHeaders(),
        });

        if (!res.ok) {
          const errorData = await res.json();
          throw new Error(errorData.error || 'Failed to delete event');
        }

        alert('Event deleted!');
        fetchEvents(); // Re-fetch to update the list
      } catch (error) {
        console.error("Error deleting event:", error);
        alert(`Error: ${error.message}`);
      }
    }
  };

  return (
    <section className="bg-white p-6 rounded-lg shadow">
      <h2 className="text-2xl font-semibold mb-4">Events</h2>

      {/* Existing Events List */}
      {items.map(ev => (
        <div key={ev.id} className="flex gap-2 items-center mb-4 p-2 border rounded-lg">
          {ev.image_url && <img src={ev.image_url} alt={ev.title} className="h-16 w-16 object-cover rounded" />}
          <div className="flex-1">
            <input
              value={ev.title}
              onChange={e => setItems(items.map(i => i.id === ev.id ? { ...i, title: e.target.value } : i))}
              className="p-2 border rounded w-full mb-1"
            />
            <p className="text-sm text-gray-600">{ev.date} at {ev.time}</p>
          </div>
          <button
            className="px-3 py-2 bg-green-600 text-white rounded hover:bg-green-700 mr-2"
            onClick={() => {
              // Set the edit state to populate the form for editing
              setEdit({
                id: ev.id,
                image_url: ev.image_url,
                title: ev.title,
                date: ev.date,
                time: ev.time,
                address: ev.address,
                description: ev.description
              });
            }}
          >
            Edit
          </button>
          <button
            className="px-3 py-2 bg-red-600 text-white rounded hover:bg-red-700"
            onClick={() => deleteOne(ev.id)}
          >
            Delete
          </button>
        </div>
      ))}

      {/* Add/Edit New Event Form */}
      <h3 className="text-xl font-medium mt-8 mb-2">{edit.id ? 'Edit Event' : 'Add New Event'}</h3>
      <input type="file" onChange={e => uploadImage(e.target.files[0])} className="mb-2" />
      {edit.image_url && (
        <p className="text-sm text-gray-500 mb-2">Image uploaded: <a href={edit.image_url} target="_blank" rel="noopener noreferrer">{edit.image_url.substring(0, 50)}...</a></p>
      )}

      <input
        className="w-full p-2 border rounded mb-2"
        placeholder="Title"
        value={edit.title}
        onChange={e => setEdit({ ...edit, title: e.target.value })}
      />

      <div className="grid md:grid-cols-2 gap-2 mb-2">
        <input
          type="date"
          className="p-2 border rounded"
          value={edit.date}
          onChange={e => setEdit({ ...edit, date: e.target.value })}
        />
        <input
          type="text"
          placeholder="Time (e.g., 7:00 AM - 9:00 AM)"
          className="p-2 border rounded"
          value={edit.time}
          onChange={e => setEdit({ ...edit, time: e.target.value })}
        />
      </div>

      <input
        className="w-full p-2 border rounded mb-2"
        placeholder="Address"
        value={edit.address}
        onChange={e => setEdit({ ...edit, address: e.target.value })}
      />

      <textarea
        className="w-full p-2 border rounded mb-4"
        placeholder="Description"
        value={edit.description}
        onChange={e => setEdit({ ...edit, description: e.target.value })}
      />

      <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700" onClick={saveOne}>
        {edit.id ? 'Save Changes' : 'Add Event'}
      </button>
      {edit.id && ( // Show cancel button when editing
        <button
          className="px-4 py-2 bg-gray-400 text-white rounded hover:bg-gray-500 ml-2"
          onClick={() => setEdit({ image_url: '', title: '', date: '', time: '', address: '', description: '', id: null })}
        >
          Cancel Edit
        </button>
      )}
    </section>
  );
}
import React, { useState, useEffect } from 'react';
import { buildAuthHeaders } from '../utils';

export default function JoinUsEditor() {
  const [address, setAddress] = useState('');
  const [timing, setTiming] = useState('');
  const [id, setId] = useState(null); // To store the ID of the joinus entry

  useEffect(() => {
    fetchJoinUsInfo();
  }, []);

  const fetchJoinUsInfo = () => {

    fetch('http://localhost:5000/joinus') // Changed from '/join' to '/joinus'
      .then(r => r.json())
      .then(data => {
        setAddress(data?.address || '');
        setTiming(data?.timing || '');
        setId(data?.id || null); // Store the ID
      })
      .catch(console.error);
  };

  const save = async () => {
    try {
      const res = await fetch('http://localhost:5000/joinus', { // Changed from '/join' to '/joinus'
        method: 'POST',
        headers: buildAuthHeaders(),
        body: JSON.stringify({ id: id, address, timing }), // Pass ID for upsert
      });
      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.error || 'Failed to save Join Us section');
      }
      alert('Join Us section saved!');
      fetchJoinUsInfo(); // Re-fetch to ensure UI is updated and ID is correct
    } catch (error) {
      console.error("Error saving Join Us section:", error);
      alert(`Error: ${error.message}`);
    }
  };

  const handleDelete = async () => {
    if (!id) {
      alert("No Join Us entry to delete.");
      return;
    }
    if (window.confirm("Are you sure you want to delete the Join Us section?")) {
      try {
        const res = await fetch(`http://localhost:5000/joinus/${id}`, { // Changed from '/join' to '/joinus'
          method: 'DELETE',
          headers: buildAuthHeaders(),
        });
        if (!res.ok) {
          const errorData = await res.json();
          throw new Error(errorData.error || 'Failed to delete Join Us section');
        }
        alert('Join Us section deleted!');
        setAddress('');
        setTiming('');
        setId(null); // Clear ID after deletion
      } catch (error) {
        console.error("Error deleting Join Us section:", error);
        alert(`Error: ${error.message}`);
      }
    }
  };

  return (
    <section className="bg-white p-6 rounded-lg shadow">
      <h2 className="text-2xl font-semibold mb-4">Join Us Section</h2>
      <div className="space-y-4">
        <input
          className="w-full p-3 border rounded"
          placeholder="Sunday Address"
          value={address}
          onChange={e => setAddress(e.target.value)}
        />
        <input
          className="w-full p-3 border rounded"
          placeholder="Sunday Timing (e.g. 7:00 AM)"
          value={timing}
          onChange={e => setTiming(e.target.value)}
        />
        <button
  className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
  onClick={save}
>
  Save Join Us
</button>

        {id && ( // Only show delete button if an entry exists
          <button
            className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 ml-2"
            onClick={handleDelete}
          >
            Delete Join Us Info
          </button>
        )}
      </div>
    </section>
  );
}
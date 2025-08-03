import React, { useEffect, useState } from 'react';
import { Calendar, Clock, MapPin, Info } from 'lucide-react';
import { buildAuthHeaders } from '../utils';

export default function Events() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const res = await fetch('http://localhost:5000/events', {
          headers: buildAuthHeaders(),
        });
        if (!res.ok) throw new Error('Failed to fetch events');
        const data = await res.json();
        setEvents(data);
      } catch (err) {
        console.error('Error fetching events:', err);
      }
    };
    fetchEvents();
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-yellow-50 via-orange-50 to-yellow-50 py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Upcoming Events</h1>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-yellow-300 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay connected and be a part of our vibrant community through upcoming events.
          </p>
        </div>
      </section>

      {/* Events Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          {events.length === 0 ? (
            <div className="text-center text-gray-500">No events found or failed to load.</div>
          ) : (
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {events.map((ev) => (
                <div
                  key={ev.id}
                  className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-shadow flex flex-col space-y-4"
                >
                  {ev.image_url && (
                    <div className="w-full h-48 rounded-lg overflow-hidden">
                      <img
                        src={ev.image_url}
                        alt={ev.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                  <h3 className="text-xl font-bold text-gray-900">{ev.title}</h3>
                  <div className="flex items-center text-gray-600 text-sm">
                    <Calendar className="w-4 h-4 mr-2" />
                    {ev.edate}
                  </div>
                  <div className="flex items-center text-gray-600 text-sm">
                    <Clock className="w-4 h-4 mr-2" />
                    {ev.time}
                  </div>
                  <div className="flex items-center text-gray-600 text-sm">
                    <MapPin className="w-4 h-4 mr-2" />
                    {ev.address}
                  </div>
                  <div className="flex items-start text-gray-600 text-sm">
                    <Info className="w-4 h-4 mr-2 mt-1" />
                    <p className="text-justify">{ev.description}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

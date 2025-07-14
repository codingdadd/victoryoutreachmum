import React, { useState } from 'react';
import { Calendar, Clock, MapPin, Users, Heart, Star } from 'lucide-react';

const Events = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);

  const upcomingEvents = [
    {
      id: 1,
      title: 'Community Outreach Program',
      date: 'March 15, 2025',
      time: '9:00 AM - 2:00 PM',
      location: 'Andheri West Community Center',
      description: 'Join us as we reach out to the community with food distribution, prayer, and sharing God\'s love with those in need.',
      image: 'https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Community Service',
      registrationRequired: true
    },
    {
      id: 2,
      title: 'Easter Celebration Service',
      date: 'April 20, 2025',
      time: '7:00 AM',
      location: 'D N Nagar Municipal School',
      description: 'Celebrate the resurrection of Jesus Christ with special worship, testimonies, and fellowship breakfast.',
      image: 'https://images.pexels.com/photos/8468470/pexels-photo-8468470.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Worship',
      registrationRequired: false
    },
    {
      id: 3,
      title: 'Youth Leadership Conference',
      date: 'May 10-11, 2025',
      time: '6:00 PM - 9:00 PM',
      location: 'Victory Outreach Center',
      description: 'Empowering young leaders with biblical principles, practical skills, and vision for their future ministry.',
      image: 'https://images.pexels.com/photos/8613319/pexels-photo-8613319.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Youth',
      registrationRequired: true
    }
  ];

  const pastEvents = [
    {
      title: 'Christmas Celebration',
      date: 'December 25, 2024',
      description: 'A beautiful celebration of Christ\'s birth with special music, drama, and community fellowship.',
      participants: 150
    },
    {
      title: 'Healing and Deliverance Service',
      date: 'November 15, 2024',
      description: 'Powerful service where many experienced God\'s healing touch and freedom from bondage.',
      participants: 200
    },
    {
      title: 'Community Food Drive',
      date: 'October 20, 2024',
      description: 'Successful outreach providing meals and groceries to over 100 families in need.',
      participants: 75
    }
  ];

  const handleRegistration = (eventId) => {
    setSelectedEvent(eventId);
    alert('Registration form would open here. This is a demo.');
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-green-50 to-blue-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Church Events</h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-green-400 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join us for special events that bring our community together in worship, service, 
            and fellowship. Experience God's love in action through our various ministries.
          </p>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Upcoming Events</h2>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {upcomingEvents.map((event) => (
              <div key={event.id} className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-full">
                      {event.category}
                    </span>
                    {event.registrationRequired && (
                      <span className="text-red-600 text-xs font-medium">Registration Required</span>
                    )}
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{event.title}</h3>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-gray-600">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span className="text-sm">{event.date}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Clock className="w-4 h-4 mr-2" />
                      <span className="text-sm">{event.time}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <MapPin className="w-4 h-4 mr-2" />
                      <span className="text-sm">{event.location}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-6">{event.description}</p>
                  
                  {event.registrationRequired && (
                    <button
                      onClick={() => handleRegistration(event.id)}
                      className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                    >
                      Register Now
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Event Calendar Preview */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Stay Connected</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Never miss an event! Sign up for our weekly newsletter to receive updates 
              about upcoming services, special events, and ministry activities.
            </p>
          </div>
          
          <div className="bg-white rounded-2xl p-8 text-center shadow-lg">
            <div className="max-w-md mx-auto">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Weekly Newsletter</h3>
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <button className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                  Subscribe
                </button>
              </div>
              <p className="text-gray-500 text-sm mt-2">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Past Events Highlights */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Recent Event Highlights</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {pastEvents.map((event, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-gray-100 p-6 rounded-2xl">
                <div className="flex items-center mb-4">
                  <Star className="w-5 h-5 text-yellow-500 mr-2" />
                  <h3 className="text-lg font-semibold text-gray-900">{event.title}</h3>
                </div>
                <p className="text-gray-600 mb-4">{event.description}</p>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>{event.date}</span>
                  <div className="flex items-center">
                    <Users className="w-4 h-4 mr-1" />
                    <span>{event.participants} participants</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-green-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Heart className="w-16 h-16 text-white mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-white mb-4">Get Involved</h2>
          <p className="text-xl text-white opacity-90 mb-8 max-w-2xl mx-auto">
            We believe everyone has a part to play in God's kingdom. Whether through volunteering, 
            participating in events, or sharing your talents, there's a place for you at Victory Outreach.
          </p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Contact Our Events Team
          </button>
        </div>
      </section>
    </div>
  );
};

export default Events;
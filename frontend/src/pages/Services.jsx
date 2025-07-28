import React, { useEffect, useState } from 'react';
import { Clock, Users, Book, Coffee, Heart, MapPin, Music } from 'lucide-react';

// Optional: Define this or import from your auth util
const buildAuthHeaders = () => {
  return {
    'Content-Type': 'application/json',
    // 'Authorization': `Bearer ${yourToken}`, // Add if needed
  };
};

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const res = await fetch('http://localhost:5000/services', {
          headers: buildAuthHeaders(),
        });
        const data = await res.json();
        setServices(data);
      } catch (err) {
        console.error("Failed to fetch services:", err);
      }
    };

    fetchServices();
  }, []);

  const iconMap = {
    Music: Music,
    Book: Book,
    Heart: Heart,
    Coffee: Coffee,
    default: Heart
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-green-50 to-blue-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Worship Services</h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-green-400 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience the transformative power of God through worship, prayer, and the Word. 
            All are welcome to join our life-changing services throughout the week.
          </p>
        </div>
      </section>

      {/* Service Times */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = iconMap[service.icon] || iconMap.default;
              return (
                <div key={index} className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-lg transition-shadow">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-green-400 rounded-lg flex items-center justify-center mr-4">
                      {IconComponent && <IconComponent className="w-6 h-6 text-white" />}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{service.title}</h3>
                      <div className="flex items-center text-gray-600 mt-1">
                        <Clock className="w-4 h-4 mr-1" />
                        <span className="text-sm">{service.time}</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features?.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-700">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Location Information */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Service Location</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              All our services are held at our main location in Andheri West, Mumbai. 
              We provide a welcoming environment for worship and fellowship.
            </p>
          </div>
          
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-start space-x-4 mb-6">
                  <MapPin className="w-6 h-6 text-blue-500 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Victory Outreach Ministries</h3>
                    <p className="text-gray-600">
                      D N Nagar Municipal School<br />
                      Madhuban Colony, D.N. Nagar<br />
                      Andheri West, Mumbai<br />
                      Maharashtra 400058
                    </p>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Clock className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">Sunday Worship: 7:00 AM</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Book className="w-5 h-5 text-purple-500" />
                    <span className="text-gray-700">Bible Study: Wednesday 7:00 PM</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Heart className="w-5 h-5 text-red-500" />
                    <span className="text-gray-700">Prayer Meeting: Friday 6:30 PM</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-blue-100 to-green-100 h-64 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-blue-600 mx-auto mb-2" />
                  <p className="text-gray-700 font-medium">Location Map</p>
                  <p className="text-gray-500 text-sm">D.N. Nagar, Andheri West</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What to Expect</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Whether you're visiting for the first time or returning after a long absence, 
              here's what you can expect when you join us for worship.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-md border border-gray-100">
                <Coffee className="w-8 h-8 text-blue-500" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Warm Welcome</h3>
              <p className="text-gray-600 text-sm">
                Friendly greeters and a welcoming atmosphere to help you feel at home from the moment you arrive.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-md border border-gray-100">
                <Music className="w-8 h-8 text-green-500" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Powerful Worship</h3>
              <p className="text-gray-600 text-sm">
                Spirit-filled worship music that creates an atmosphere for encountering God's presence.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-md border border-gray-100">
                <Book className="w-8 h-8 text-yellow-500" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Biblical Teaching</h3>
              <p className="text-gray-600 text-sm">
                Life-changing messages from God's Word that are practical and relevant to everyday life.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-md border border-gray-100">
                <Users className="w-8 h-8 text-red-500" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Genuine Fellowship</h3>
              <p className="text-gray-600 text-sm">
                Opportunities to connect with others and build lasting relationships in a caring community.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-green-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Join Us This Week</h2>
          <p className="text-xl text-white opacity-90 mb-8 max-w-2xl mx-auto">
            Experience the life-transforming power of God in our services. Come as you are - 
            God has something special in store for you.
          </p>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-white">
              <h3 className="text-lg font-semibold mb-2">Sunday Worship</h3>
              <p className="opacity-90">7:00 AM - Main Service</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-white">
              <h3 className="text-lg font-semibold mb-2">Bible Study</h3>
              <p className="opacity-90">Wednesday 7:00 PM</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-white">
              <h3 className="text-lg font-semibold mb-2">Prayer Meeting</h3>
              <p className="opacity-90">Friday 6:30 PM</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
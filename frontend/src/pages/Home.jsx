import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Clock, ArrowRight, Heart, Users, Book } from 'lucide-react';

const Home = () => {
  const [joinInfo, setJoinInfo] = useState({ address: '', timing: '' });

  async function saveJoinInfo() {
  console.log('🔄 Triggered joinus save');
  console.log('Headers:', buildAuthHeaders());
  console.log('Body:', { address, timing });


fetch('http://localhost:5000/joinus')
  .then(async res => {
    if (!res.ok) throw new Error(`HTTP error ${res.status}`);
    return res.json();
  })
  .then(data => {
    setAddress(data.address);
    setTiming(data.timing);
  })
  .catch(err => console.error('Error fetching join info:', err));}

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-green-50 py-20 overflow-hidden min-h-screen flex items-center">
        {/* Neumorphism background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full shadow-[inset_-8px_-8px_16px_rgba(255,255,255,0.8),inset_8px_8px_16px_rgba(0,0,0,0.1)] opacity-60"></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-br from-green-100 to-green-200 rounded-full shadow-[inset_-6px_-6px_12px_rgba(255,255,255,0.8),inset_6px_6px_12px_rgba(0,0,0,0.1)] opacity-50"></div>
          <div className="absolute bottom-32 left-1/4 w-20 h-20 bg-gradient-to-br from-yellow-100 to-yellow-200 rounded-full shadow-[inset_-5px_-5px_10px_rgba(255,255,255,0.8),inset_5px_5px_10px_rgba(0,0,0,0.1)] opacity-40"></div>
          <div className="absolute bottom-20 right-1/3 w-28 h-28 bg-gradient-to-br from-purple-100 to-purple-200 rounded-full shadow-[inset_-7px_-7px_14px_rgba(255,255,255,0.8),inset_7px_7px_14px_rgba(0,0,0,0.1)] opacity-30"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Main content card with neumorphism */}
          <div className="bg-gradient-to-br from-white/80 to-gray-50/60 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-[20px_20px_40px_rgba(0,0,0,0.1),-20px_-20px_40px_rgba(255,255,255,0.8)] border border-white/20">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Welcome to
              <span className="block bg-gradient-to-r from-blue-600 via-green-500 to-blue-700 bg-clip-text text-transparent mt-2">VICTORY OUTREACH MUMBAI</span>
            </h1>
            <div className="max-w-4xl mx-auto mb-8">
              <p className="text-xl md:text-2xl italic leading-relaxed text-gray-700 mb-4">
                "Enlarge the place of your tent,<br />
                and let the curtains of your habitations be stretched out;<br />
                do not hold back; lengthen your cords and strengthen your stakes."
              </p>
              <p className="text-lg mt-4 text-blue-600 font-medium">– Isaiah 54:2 & 3</p>
            </div>

            {/* Neumorphism button */}

          </div>
        </div>
      </section>

      {/* Join Us Section */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-bold bg-gradient-to-r from-blue-300 via-blue-500 to-blue-700 bg-clip-text text-transparent mb-8">
              Join Us for This Sunday Church!
            </h2>
            <div className="bg-gradient-to-br from-white/90 to-gray-50/70 backdrop-blur-sm rounded-3xl p-8 max-w-4xl mx-auto shadow-[20px_20px_40px_rgba(0,0,0,0.1),-20px_-20px_40px_rgba(255,255,255,0.8)] border border-white/30">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center shadow-[inset_-4px_-4px_8px_rgba(255,255,255,0.8),inset_4px_4px_8px_rgba(0,0,0,0.1)]">
                    <MapPin className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="text-left">
                    <h3 className="font-semibold text-gray-900 mb-1">Address</h3>
                    <p className="text-gray-600">
                      {joinInfo.address ||
                        'Loading address...'}
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-100 to-green-200 rounded-full flex items-center justify-center shadow-[inset_-4px_-4px_8px_rgba(255,255,255,0.8),inset_4px_4px_8px_rgba(0,0,0,0.1)]">
                    <Clock className="w-6 h-6 text-green-600" />
                  </div>
                  <div className="text-left">
                    <h3 className="font-semibold text-gray-900 mb-1">Timing</h3>
                    <p className="text-gray-600">
                      {joinInfo.timing ||
                        'Loading timing...'}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Welcome to Victory Outreach Church of Mumbai!</h2>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img
                src="./src/image/WELCOME.jpg"
                alt="Victory Outreach Church community"
                className="rounded-2xl shadow-lg w-full h-80 object-cover"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg">

              </div>
            </div>

            <div>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                We warmly invite you to join us for any of our life-transforming services, where you can encounter the power and presence of God.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                If you're searching for a place to belong, seeking purpose, or looking for a spiritual home, we welcome you with open arms. Victory Outreach Church is more than just a church—we are a global family, united in faith, with members across every populated continent.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Since our inception, our mission has been clear: to empower individuals to take charge of their lives by entrusting their future to God. We have witnessed countless lives restored, hope renewed, and people stepping into their God-given purpose with a heart to uplift others.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="py-16 bg-gradient-to-br from-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent mb-6">Our Mission</h2>
            <div className="w-24 h-2 bg-gradient-to-r from-blue-500 to-green-400 mx-auto mb-8 rounded-full shadow-[inset_-2px_-2px_4px_rgba(255,255,255,0.8),inset_2px_2px_4px_rgba(0,0,0,0.1)]"></div>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-white/90 to-gray-50/70 backdrop-blur-sm rounded-3xl p-8 text-center mb-8 shadow-[20px_20px_40px_rgba(0,0,0,0.1),-20px_-20px_40px_rgba(255,255,255,0.8)] border border-white/30">
              <p className="text-lg leading-relaxed mb-6 text-gray-700">
                Victory Outreach is an international, church-oriented Christian ministry called to the task of evangelizing and discipling the hurting people of the world, with the message of hope and plan of Jesus Christ. This call involves a commitment to plant and develop churches and training centers, in strategic cities of the world.
              </p>
              <p className="text-lg leading-relaxed text-gray-700">
                Victory Outreach inspires and instills within people the desire to fulfill their potential in life with a sense of dignity, belonging, and destiny. Victory Outreach works cooperatively with others of mutual purpose in accomplishing the task before us.
              </p>
            </div>

            <div className="text-center">
              <Link
                to="/about"
                className="inline-flex items-center bg-gradient-to-r from-blue-500 to-green-500 text-white px-8 py-3 rounded-2xl font-semibold shadow-[8px_8px_16px_rgba(0,0,0,0.15),-8px_-8px_16px_rgba(255,255,255,0.7)] hover:shadow-[4px_4px_8px_rgba(0,0,0,0.2),-4px_-4px_8px_rgba(255,255,255,0.8)] transition-all duration-300 transform hover:scale-105"
              >
                Know More
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Values Section */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center mx-auto mb-6 shadow-[inset_-8px_-8px_16px_rgba(255,255,255,0.8),inset_8px_8px_16px_rgba(0,0,0,0.1)]">
                <Heart className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-600">
                At Victory Outreach Ministries, our vision is to reach people from all walks of life, restore broken lives, and raise leaders who impact their communities and the world.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-green-200 rounded-full flex items-center justify-center mx-auto mb-6 shadow-[inset_-8px_-8px_16px_rgba(255,255,255,0.8),inset_8px_8px_16px_rgba(0,0,0,0.1)]">
                <Users className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Our Community</h3>
              <p className="text-gray-600">
                We see a future where individuals discover their God-given purpose and live it boldly, in love and unity, building strong families and communities.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-100 to-yellow-200 rounded-full flex items-center justify-center mx-auto mb-6 shadow-[inset_-8px_-8px_16px_rgba(255,255,255,0.8),inset_8px_8px_16px_rgba(0,0,0,0.1)]">
                <Book className="w-8 h-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Our Foundation</h3>
              <p className="text-gray-600">
                Grounded in Biblical truth and the transformative power of Jesus Christ, we provide hope and restoration to all who seek it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-br from-blue-50 via-white to-green-50 relative overflow-hidden">
        {/* Neumorphism background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 left-20 w-40 h-40 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full shadow-[inset_-10px_-10px_20px_rgba(255,255,255,0.8),inset_10px_10px_20px_rgba(0,0,0,0.1)] opacity-40"></div>
          <div className="absolute bottom-10 right-20 w-32 h-32 bg-gradient-to-br from-green-100 to-green-200 rounded-full shadow-[inset_-8px_-8px_16px_rgba(255,255,255,0.8),inset_8px_8px_16px_rgba(0,0,0,0.1)] opacity-50"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-br from-white/90 to-gray-50/70 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-[20px_20px_40px_rgba(0,0,0,0.1),-20px_-20px_40px_rgba(255,255,255,0.8)] border border-white/30 relative">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent mb-4">Ready to Begin Your Journey?</h2>
            <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
              Whether you're seeking healing, purpose, or community, Victory Outreach Ministries
              welcomes you with open arms. Come as you are and discover God's plan for your life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-blue-500 to-green-500 text-white px-8 py-3 rounded-2xl font-semibold shadow-[8px_8px_16px_rgba(0,0,0,0.15),-8px_-8px_16px_rgba(255,255,255,0.7)] hover:shadow-[4px_4px_8px_rgba(0,0,0,0.2),-4px_-4px_8px_rgba(255,255,255,0.9)] transition-all duration-300 transform hover:scale-105"
              >
                Visit Us This Sunday
              </Link>
              <Link
                to="/donation"
                className="bg-gradient-to-br from-white/80 to-gray-50/60 text-blue-600 px-8 py-3 rounded-2xl font-semibold shadow-[8px_8px_16px_rgba(0,0,0,0.1),-8px_-8px_16px_rgba(255,255,255,0.8)] hover:shadow-[4px_4px_8px_rgba(0,0,0,0.15),-4px_-4px_8px_rgba(255,255,255,0.9)] transition-all duration-300 transform hover:scale-105 border border-white/30"
              >
                Support Our Mission
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
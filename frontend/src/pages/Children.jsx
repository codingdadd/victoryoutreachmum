import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Home, GraduationCap, Users, Star, Shield, Gift, Smile, Book, SprayCan as Pray } from 'lucide-react';

const Children = () => {
  const programs = [
    {
      title: 'Spiritual Education',
      description: 'Bible study classes and spiritual guidance to help children grow in their faith and understanding of God\'s love.',
      icon: Book,
      features: ['Daily Bible study', 'Prayer time', 'Christian values', 'Spiritual mentorship']
    },
    {
      title: 'Safe Haven',
      description: 'Providing a secure, loving environment where children can heal from past trauma and experience God\'s peace.',
      icon: Shield,
      features: ['24/7 care', 'Emotional support', 'Trauma counseling', 'Safe environment']
    },
    {
      title: 'Educational Support',
      description: 'Comprehensive educational assistance including school enrollment, tutoring, and academic guidance.',
      icon: GraduationCap,
      features: ['School enrollment', 'Homework help', 'Educational supplies', 'Academic mentoring']
    },
    {
      title: 'Life Skills Training',
      description: 'Preparing children for independence with practical life skills rooted in Christian principles.',
      icon: Star,
      features: ['Life skills training', 'Character building', 'Leadership development', 'Future preparation']
    }
  ];

  const activities = [
    {
      title: 'Bible Study Classes',
      description: 'Age-appropriate Bible lessons that teach children about God\'s love and plan for their lives.',
      icon: Book
    },
    {
      title: 'Arts & Crafts',
      description: 'Creative activities that help children express themselves while learning biblical stories.',
      icon: Heart
    },
    {
      title: 'Sports & Recreation',
      description: 'Physical activities that promote health, teamwork, and Christian fellowship.',
      icon: Users
    },
    {
      title: 'Prayer & Worship',
      description: 'Teaching children to communicate with God through prayer and worship.',
      icon: Pray
    }
  ];

  return (
    <div>
      {/* Children hero Section */}
      <section className="relative bg-gradient-to-br from-green-300 via-green-300 to-green-500 py-20">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Victory Outreach Children's Home</h1>
          <div className="max-w-4xl mx-auto mb-8">
            <p className="text-lg md:text-xl italic leading-relaxed mb-4">
              "Religion that God our Father accepts as pure and faultless is this: 
              to look after orphans and widows in their distress and to keep oneself 
              from being polluted by the world."
            </p>
            <p className="text-lg text-yellow-200">~ James 1:27</p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission for Children's Spiritual Growth</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-green-400 mx-auto mb-8"></div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p className="text-lg">
                  Victory Outreach is a faith-based ministry centered on the transformative power of Jesus Christ, 
                  providing a safe haven and spiritual guidance for children. Our church offers a nurturing home 
                  environment where children are immersed in the teachings of Jesus Christ, fostering a deep 
                  understanding of His love and grace.
                </p>
                <p className="text-lg">
                  Through these teachings, Victory Outreach aims to socially reform and empower children, 
                  equipping them with the tools to overcome adversity and live a life dedicated to the 
                  principles of Jesus Christ.
                </p>
                <p className="text-lg">
                  We believe that every child deserves to grow up in a safe environment, where they are 
                  loved and nurtured spiritually, preparing them to become strong, compassionate leaders 
                  in their communities.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <img
                src="./src/image/HOME A.JPG"
                alt="Children in spiritual activities"
                className="rounded-2xl shadow-lg w-full h-80 object-cover"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg">
              
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs & Services */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Programs & Services</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We provide comprehensive care that addresses every aspect of a child's development, 
              with Christ at the center of everything we do.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {programs.map((program, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-green-400 rounded-lg flex items-center justify-center mb-4">
                  <program.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{program.title}</h3>
                <p className="text-gray-600 mb-4">{program.description}</p>
                <ul className="space-y-2">
                  {program.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-700 text-sm">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      
      {/* Support Section */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Support Victory Outreach Children's Home</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Your support helps us continue providing spiritual guidance, education, and care 
              to children who need it most. Every contribution makes a difference.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl text-center shadow-lg">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Monthly Sponsorship</h3>
              <p className="text-gray-600 mb-6">
                Sponsor a child's monthly needs including food, clothing, education, and spiritual care.
              </p>
              <div className="text-2xl font-bold text-blue-600 mb-4">₹5,000/month</div>
              <Link to='/donation' onClick={() =>window.scrollTo(0,0)}>
              <button className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                Sponsor Now
              </button>
              </Link>
            </div>
            
            <div className="bg-white p-8 rounded-2xl text-center shadow-lg">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <GraduationCap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Education Fund</h3>
              <p className="text-gray-600 mb-6">
                Support educational expenses including school fees, books, uniforms, and supplies.
              </p>
              <div className="text-2xl font-bold text-green-600 mb-4">₹2,000/month</div>
              <Link to='/donation' onClick={() =>window.scrollTo(0,0)}>
              <button className="w-full bg-green-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-green-700 transition-colors">
                Support Education
              </button>
              </Link>
            </div>
            
            <div className="bg-white p-8 rounded-2xl text-center shadow-lg">
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Gift className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Special Gifts</h3>
              <p className="text-gray-600 mb-6">
                Provide special occasion gifts, birthday celebrations, and holiday surprises.
              </p>
              <div className="text-2xl font-bold text-yellow-600 mb-4">₹1,000+</div>
             <Link to='/donation' onClick={() =>window.scrollTo(0,0)}>
              <button className="w-full bg-yellow-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-yellow-700 transition-colors">
                Give a Gift
              </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Volunteer Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Volunteer with Us</h2>
              <p className="text-lg text-gray-600 mb-6">
                Beyond financial support, we need caring volunteers who can share their time, 
                skills, and hearts with our children. Every volunteer makes a meaningful impact 
                in a child's spiritual journey.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Book className="w-6 h-6 text-blue-500 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Bible Teaching</h4>
                    <p className="text-gray-600">Help teach Bible lessons and share God's love with children.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <GraduationCap className="w-6 h-6 text-green-500 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Educational Support</h4>
                    <p className="text-gray-600">Assist with homework, tutoring, and educational activities.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Heart className="w-6 h-6 text-red-500 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Mentoring</h4>
                    <p className="text-gray-600">Build lasting relationships and provide spiritual guidance.</p>
                  </div>
                </div>
              </div>
              
             <Link to="/contact"
  onClick={() => window.scrollTo(0, 0)}>
  <button className="mt-8 bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
    Become a volunteer
  </button>
</Link>
            </div>
            
            <div className="relative">
              <img
                src="./src/image/HOME 2.jpg"
                alt="Volunteer with children"
                className="rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-green-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Heart className="w-16 h-16 text-white mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-white mb-4">Every Child Deserves God's Love</h2>
          <p className="text-xl text-white opacity-90 mb-8 max-w-2xl mx-auto">
            Your support can transform a child's life through the power of Jesus Christ. 
            Whether through sponsorship, donations, or volunteering, you can make an eternal difference.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/donation"
  onClick={() => window.scrollTo(0, 0)}>
  <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
    Support Our Children
  </button>
</Link>
           
          </div>
        </div>
      </section>
    </div>
  );
};

export default Children;
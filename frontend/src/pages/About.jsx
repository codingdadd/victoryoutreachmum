import React from 'react';
import { Heart, Users, Star, Book, Cross, Globe, Target, Shield } from 'lucide-react';

const About = () => {
  

  const beliefs = [
    {
      title: 'One God',
      description: 'We believe in one God—Father, Son, and Holy Spirit, eternally existing in perfect unity.',
      icon: Cross
    },
    {
      title: 'The Bible',
      description: 'We believe the Bible is the inspired Word of God, our ultimate authority for faith and life.',
      icon: Book
    },
    {
      title: 'Salvation',
      description: 'We believe in salvation through Jesus Christ alone, by grace through faith.',
      icon: Heart
    },
    {
      title: 'Prayer & Healing',
      description: 'We believe in the power of prayer, divine healing, and supernatural transformation.',
      icon: Shield
    },
    {
      title: 'Strong Families',
      description: 'We believe in building strong families and raising spiritual leaders for the next generation.',
      icon: Users
    },
    {
      title: 'Compassionate Outreach',
      description: 'We believe in reaching out to the lost, broken, and hurting with love and compassion.',
      icon: Star
    }
  ];

  const leadership = [
    {
      name: 'Pastor Samson John',
      role: 'Senior Pastor',
      bio: 'Pastor Samson has been leading Victory Outreach Mumbai for over 23 years, bringing passion for evangelism and discipleship to the community.',
      image: 'https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&w=400'
    },  
   
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-green-50 to-blue-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="block text-5xl bg-gradient-to-r from-blue-600 via-green-500 to-blue-700 bg-clip-text text-transparent mt-2">About Victory Outreach Ministries</h1>
          <div className="w-28 h-1 bg-gradient-to-r from-blue-500 to-green-400 mx-auto my-2  mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
           " I will give thee the treasures of darkness, and hidden riches of secret places, that thou mayest know that I, the LORD"~Isaiah 45:2-3
          </p>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Vision</h2>
              <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
                <p>
                  At Victory Outreach Ministries, our vision is to reach people from all walks of life, 
                  restore broken lives, and raise leaders who impact their communities and the world.
                </p>
                <p>
                  We see a future where individuals discover their God-given purpose and live it boldly, 
                  in love and unity. Our vision extends beyond the walls of our church to transform 
                  entire communities through the power of the Gospel.
                </p>
              </div>
              
              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600">15+</div>
                  <div className="text-sm text-gray-600">Years in Mumbai</div>
                </div>
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <div className="text-2xl font-bold text-green-600">500+</div>
                  <div className="text-sm text-gray-600">Lives Transformed</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img
                src="./src/image/18314.jpg"
                alt="Victory Outreach community"
                className="rounded-2xl shadow-lg"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg">
                
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* Mission Section */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-green-400 mx-auto mb-8"></div>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-blue-600 to-green-500 rounded-2xl p-8 text-white text-center mb-8">
              <p className="text-lg leading-relaxed mb-6">
                Victory Outreach is an international, church-oriented Christian ministry called to evangelize 
                and disciple the hurting people of the world with the message of hope and the plan of Jesus Christ.
              </p>
              <p className="text-lg leading-relaxed">
                We are committed to planting and developing churches and training centers in strategic cities 
                globally. Our mission is to restore dignity, identity, and destiny to every individual.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-white rounded-xl shadow-sm">
                <Target className="w-12 h-12 text-blue-500 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">Evangelize</h3>
                <p className="text-gray-600 text-sm">Sharing the Gospel with those who need hope and healing</p>
              </div>
              <div className="text-center p-6 bg-white rounded-xl shadow-sm">
                <Users className="w-12 h-12 text-green-500 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">Disciple</h3>
                <p className="text-gray-600 text-sm">Training believers to grow in faith and leadership</p>
              </div>
              <div className="text-center p-6 bg-white rounded-xl shadow-sm">
                <Heart className="w-12 h-12 text-red-500 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">Restore</h3>
                <p className="text-gray-600 text-sm">Bringing healing and wholeness to broken lives</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Believe */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What We Believe</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our core beliefs are rooted in Biblical truth and guide everything we do 
              as a ministry and community of faith.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {beliefs.map((belief, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-gray-100 p-6 rounded-2xl hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-green-400 rounded-lg flex items-center justify-center mb-4">
                  <belief.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{belief.title}</h3>
                <p className="text-gray-600">{belief.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Story</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From humble beginnings to a global movement, Victory Outreach continues 
              to transform lives and communities worldwide.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p>
                  Victory Outreach was founded with a heart to reach those forgotten by society—those 
                  battling addiction, brokenness, and hopelessness. Since our early days, we've grown 
                  into a global movement, with churches established in neighborhoods and nations alike.
                </p>
                <p>
                  Victory Outreach Church of Mumbai is part of this legacy. Since planting roots in 
                  this city, we've seen lives transformed and families restored, all by the grace and 
                  power of God. Our ministry extends beyond Sunday services to include community 
                  outreach, rehabilitation programs, and leadership training.
                </p>
                <p>
                  Today, we continue to be a beacon of hope in Mumbai, reaching out to those who need 
                  to experience God's love, forgiveness, and transforming power. Every person who walks 
                  through our doors is welcomed as family, regardless of their past or present circumstances.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* internation found hall of frame */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-green-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    
    {/* Section Header */}
    <div className="text-center mb-12">
      <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-300 via-blue-500 to-blue-700 bg-clip-text text-transparent mb-8">Our Founder’s Journey</h2>
      <p className="text-lg text-gray-500 max-w-2xl mx-auto">
        A global ministry born through obedience, transformed lives, and unwavering faith.
      </p>
    </div>

    {/* Image Banner + Content */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
      
      {/* Founder Image */}
      <div className='h-96'>
        <img
          src="./src/image/mage-of-Paster-Sonny.jpg" // Replace with your actual image path
          alt="Pastor Sonny & Sister Julie Arguinzoni"
          className='rounded-2xl align-center'
 
        />
      </div>

      {/* Founder Text */}
      <div className="bg-white rounded-2xl p-8 shadow-lg">
        <div className="space-y-5 text-gray-700 text-base leading-relaxed">
          <p>
            The ministry of Victory Outreach was born from the heart of God and was executed through the obedience of Pastor Sonny Arguinzoni, an ex-drug addict from New York City.
          </p>
          <p>
            Obeying the call of God with a humble beginning, Pastor Sonny, along with his wife, Sister Julie, began their ministry in East Los Angeles, California in 1967.
          </p>
          <p>
            Today, Victory Outreach has grown into a worldwide ministry and is the recognized leader in the field of sustainable transformational ministry. Since 1967, we have helped thousands of people take control of their lives.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>


      {/* Leadership Team */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Leadership Team</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Meet the dedicated pastors and leaders who guide our church family and 
              coordinate our various ministries and outreach programs.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {leadership.map((leader, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-4">
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="w-32 h-32 rounded-full mx-auto object-cover group-hover:scale-105 transition-transform"
                  />
                  <div className="absolute inset-0 w-32 h-32 rounded-full mx-auto bg-gradient-to-br from-blue-500/20 to-green-400/20 group-hover:opacity-0 transition-opacity"></div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-1">{leader.name}</h3>
                <p className="text-blue-600 font-medium mb-3">{leader.role}</p>
                <p className="text-gray-600 text-sm">{leader.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-green-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Heart className="w-16 h-16 text-white mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-white mb-4">Join Our Family</h2>
          <p className="text-xl text-white opacity-90 mb-8 max-w-2xl mx-auto">
            Whether you're seeking healing, purpose, or community, Victory Outreach Ministries 
            welcomes you with open arms. Come and discover God's amazing plan for your life.
          </p>
          
        </div>
      </section>
    </div>
  );
};

export default About;
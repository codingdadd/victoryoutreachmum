import React, { useState } from 'react';
import { Heart, DollarSign, Users, Home, GraduationCap, Star, Shield, CreditCard, Check, IndianRupee } from 'lucide-react';

const Donation = () => {
  const [selectedAmount, setSelectedAmount] = useState(1000);
  const [customAmount, setCustomAmount] = useState('');
  const [selectedCause, setSelectedCause] = useState('general');
  const [donationType, setDonationType] = useState('one-time');

  const predefinedAmounts = [500, 1000, 2500, 5000, 10000];

  const causes = [
    {
      id: 'general',
      title: 'General Ministry Fund',
      description: 'Support all aspects of our ministry including worship, community programs, and operational needs.',
      icon: Heart,
      color: 'blue'
    },
    {
      id: 'children',
      title: "Children's Home",
      description: 'Direct support for our children\'s home including housing, food, education, and spiritual care.',
      icon: Home,
      color: 'green'
    },
    {
      id: 'outreach',
      title: 'Community Outreach',
      description: 'Evangelism programs, community events, and outreach initiatives to reach the lost.',
      icon: Users,
      color: 'purple'
    },
    {
      id: 'education',
      title: 'Education & Training',
      description: 'Leadership training, Bible education, and skill development programs.',
      icon: GraduationCap,
      color: 'yellow'
    }
  ];

  const testimonials = [
    {
      name: 'Rajesh & Priya Sharma',
      quote: 'Supporting Victory Outreach has been a blessing to our family. Seeing how our donations help transform lives brings us incredible joy and purpose.',
      amount: 'Monthly Supporters'
    },
    {
      name: 'Maria D\'Souza',
      quote: 'I started with small donations and now sponsor a child. The updates and testimonies show me exactly how God is using my support.',
      amount: 'Child Sponsor'
    },
    {
      name: 'The Kumar Family',
      quote: 'Our family gives together and involves our children in choosing which programs to support. It teaches them the joy of giving.',
      amount: 'Family Donors'
    }
  ];

  const handleAmountClick = (amount) => {
    setSelectedAmount(amount);
    setCustomAmount('');
  };

  const handleCustomAmountChange = (value) => {
    setCustomAmount(value);
    setSelectedAmount(0);
  };

  const getCurrentAmount = () => {
    return customAmount ? parseFloat(customAmount) || 0 : selectedAmount;
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-green-50 to-blue-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Support Our Ministry</h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-green-400 mx-auto mb-6"></div>
          
        <p className="text-xl font-bold text-gray-600 max-w-3xl mx-auto my-2">“But remember the LORD your God, for it is he who gives you the ability to produce wealth, and so confirms his covenant, which he swore to your ancestors, as it is today.” Deuteronomy 8:18</p>
       <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your generous donations help us continue our mission of evangelizing, discipling, 
            and caring for the hurting people of the world. Every gift makes an eternal difference.
          </p>
        </div>
      </section>

     {/* Donation Form */}
<section className="py-16 bg-white">
  <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-10">
    
    {/* Form Section */}
    <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-lg">
      <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-400 via-blue-600 to-blue-700 bg-clip-text text-transparent mb-8">Make a Donation</h2>
      
      <form className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
            Name
          </label>
          <input
            type="text"
            id="name"
            placeholder="Enter your name"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        <div>
          <label htmlFor="contact" className="block text-sm font-medium text-gray-700 mb-1">
            Contact Number
          </label>
          <input
            type="text"
            id="contact"
            placeholder="Enter your contact number"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        <div>
          <label htmlFor="cause" className="block text-sm font-medium text-gray-700 mb-1">
            Cause of Donation
          </label>
          <select
            id="cause"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="">Select</option>
            <option value="tithes">Tithes</option>
            <option value="offering">Offering</option>
            <option value="donation">Donation</option>
          </select>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
            Message to Our Ministry
          </label>
          <textarea
            id="message"
            rows="4"
            placeholder="Write your message..."
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-gradient-to-r from-blue-600 to-green-500 text-white py-3 px-6 rounded-lg font-semibold text-lg hover:from-blue-700 hover:to-green-600 transition-all"
        >
          Submit
        </button>
      </form>
    </div>

    {/* Thank You Section */}
    <div className="flex flex-col justify-center items-center text-center px-6">
      <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 from-blue-500 to-blue-600 to-blue-700 bg-clip-text text-transparent mb-8">Thank you for your kind gesture</h1>
      <h3 className="text-lg bg-gradient-to-r from-blue-400 from-blue-500 to-blue-600 to-blue-700 bg-clip-text text-transparent">Please fill out the form to let us know about your generous act</h3>
    </div>
  </div>
</section>


      {/* Impact Section */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Your Impact in Action</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              See how your donations translate into real, measurable impact in our community 
              and in the lives of those we serve.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-2xl text-center shadow-sm">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <IndianRupee className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">₹1,000</h3>
              <p className="text-gray-600">Provides a week of meals for one child</p>
            </div>
            
            <div className="bg-white p-6 rounded-2xl text-center shadow-sm">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <GraduationCap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">₹2,500</h3>
              <p className="text-gray-600">Covers school supplies for one child for a semester</p>
            </div>
            
            <div className="bg-white p-6 rounded-2xl text-center shadow-sm">
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">₹5,000</h3>
              <p className="text-gray-600">Supports community outreach programs for a month</p>
            </div>
            
            <div className="bg-white p-6 rounded-2xl text-center shadow-sm">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Home className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">₹10,000</h3>
              <p className="text-gray-600">Provides housing and care for one child for a month</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What Our Supporters Say</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Hear from members of our church family about why they choose to give 
              and the joy they find in supporting our mission.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-gray-100 p-6 rounded-2xl">
                <div className="flex items-center mb-4">
                  <Star className="w-5 h-5 text-yellow-500 mr-2" />
                  <h3 className="text-lg font-semibold text-gray-900">{testimonial.name}</h3>
                </div>
                <p className="text-gray-600 mb-4 italic">"{testimonial.quote}"</p>
                <div className="text-sm text-blue-600 font-medium">{testimonial.amount}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Other Ways to Give */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Other Ways to Give</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              In addition to online donations, we offer several other convenient 
              and meaningful ways to support our ministry.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-2xl text-center">
              <Check className="w-12 h-12 text-green-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">In-Person Giving</h3>
              <p className="text-gray-600">
                Bring cash or check donations during any of our Sunday services. 
                Offering boxes are available throughout the venue.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-2xl text-center">
              <Heart className="w-12 h-12 text-red-500 mx-auto mb-4" />
              <div className="text-xl font-semibold text-gray-900 mb-2">Memorial Gifts</div>
              <p className="text-gray-600">
                Honor a loved one's memory with a special donation. 
                We'll send a thoughtful acknowledgment to the family.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-2xl text-center">
              <Star className="w-12 h-12 text-blue-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Special Projects</h3>
              <p className="text-gray-600">
                Support specific ministry projects and initiatives 
                that expand our reach and impact in the community.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-green-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Heart className="w-16 h-16 text-white mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-white mb-4">Thank You for Your Generosity</h2>
          <p className="text-xl text-white opacity-90 mb-8 max-w-2xl mx-auto">
            Your support enables us to continue reaching the lost and broken with the love of Christ. 
            Together, we're making an eternal difference in lives and communities.
          </p>
          
        </div>
      </section>
    </div>
  );
};

export default Donation;
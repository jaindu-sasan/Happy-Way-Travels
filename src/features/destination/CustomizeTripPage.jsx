import { useState, useRef } from 'react';
import { Autocomplete } from '@react-google-maps/api';
import { FaPhoneAlt, FaEnvelope, FaWhatsapp } from 'react-icons/fa';

function CustomizeTripPage() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    destinations: '',
    duration: '',
    interests: [],
    budget: '',
    message: '',
  });

  const interestsList = ['Beach', 'Nature', 'Culture', 'Wildlife', 'Adventure', 'Relaxation'];
  const autocompleteRef = useRef(null);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === 'checkbox') {
      const updatedInterests = checked
        ? [...form.interests, value]
        : form.interests.filter((i) => i !== value);
      setForm({ ...form, interests: updatedInterests });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handlePlaceSelect = () => {
    const place = autocompleteRef.current.getPlace();
    if (place && place.formatted_address) {
      setForm({ ...form, destinations: place.formatted_address });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Custom trip request:', form);
    alert('Your custom trip request has been submitted!');
    setForm({
      name: '',
      email: '',
      destinations: '',
      duration: '',
      interests: [],
      budget: '',
      message: '',
    });
  };

  return (
    <div className="relative min-h-screen">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1950&q=80"
          alt="Travel Background"
          className="w-full h-full object-cover"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto p-6 text-white">
        {/* Page Heading */}
        <h1 className="text-3xl font-bold mb-4 text-center text-white">
          Customize Your Dream Trip
        </h1>
        <p className="text-center text-gray-200 mb-8">
          Tell us what excites you the most — whether it’s{' '}
          <span className="font-semibold">golden beaches</span>,{' '}
          <span className="font-semibold">ancient culture</span>,{' '}
          <span className="font-semibold">breathtaking wildlife</span>, or{' '}
          <span className="font-semibold">thrilling adventures</span>. We’ll craft a journey you’ll
          remember forever! 🌍✨
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Form Section */}
          <form onSubmit={handleSubmit} className="space-y-6 bg-white/10 p-6 rounded-xl backdrop-blur-sm shadow-lg">
            {/* Name */}
            <div>
              <label className="block mb-1 font-semibold">Your Name</label>
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="w-full border border-white/60 bg-transparent px-4 py-2 rounded text-white placeholder-gray-300"
                placeholder="John Doe"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block mb-1 font-semibold">Email</label>
              <input
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full border border-white/60 bg-transparent px-4 py-2 rounded text-white placeholder-gray-300"
                placeholder="you@example.com"
              />
            </div>

            {/* Message */}
            <div>
              <label className="block mb-1 font-semibold">Additional Notes</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                className="w-full border border-white/60 bg-transparent px-4 py-2 rounded h-24 text-white placeholder-gray-300"
                placeholder="Tell us anything else we should know..."
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
            >
              Submit Request
            </button>
          </form>

          {/* Friendly & Professional Contact Section */}
          <div className="bg-white/10 p-8 rounded-xl backdrop-blur-sm shadow-lg">
            <h2 className="text-2xl font-bold mb-4 text-blue-400">Call Us</h2>
            <p className="text-lg mb-2">The best call you’ll make today.</p>

            <div className="flex flex-col gap-3 text-gray-200 mt-4">
              <div className="flex items-center gap-3">
                <FaPhoneAlt className="text-blue-400" />
                <a href="tel:+94777300852" className="hover:text-blue-300 transition">
                  +94 777 300 852
                </a>
              </div>
              <div className="flex items-center gap-3">
                <FaWhatsapp className="text-green-400" />
                <span>WhatsApp Us</span>
              </div>
              <div className="flex items-center gap-3">
                <FaEnvelope className="text-yellow-400" />
                <a
                  href="mailto:letstravel@bluelankatours.com"
                  className="hover:text-blue-300 transition"
                >
                  letstravel@bluelankatours.com
                </a>
              </div>
            </div>

            <p className="mt-6 text-gray-300">
              We are here to support you <span className="font-semibold text-white">24 hours a day</span>.
              If you’re travelling and need emergency assistance, call or email us anytime.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CustomizeTripPage;

import React from "react";
import { motion } from "framer-motion";
import { Globe, Users, Compass } from "lucide-react";
import { Link } from "react-router-dom";
import Canonical from "../../components/Canonical"

export default function About() {
  return (
    <div className="min-h-screen bg-slate-50 font-poppins text-slate-700">
      <Canonical />

      {/* HERO — Same style as Packages */}
      <header className="relative w-full h-[70vh]">
<img
  src="https://res.cloudinary.com/dx9lsxwg3/image/upload/f_auto,q_auto,w_1600/v1768236497/banner_jun5h2.webp"
  alt="About ExploreLanka Travels"
  className="absolute inset-0 w-full h-full object-cover"
  fetchpriority="high"
  decoding="async"
  width="1600"
  height="900"
  sizes="100vw"
/>

        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/20 flex items-center">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <motion.h1
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-6xl font-playfair font-bold text-white drop-shadow-lg"
            >
              About ExploreLanka Travels
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="mt-4 text-lg md:text-xl text-white/90 max-w-2xl mx-auto"
            >
              Creating unforgettable journeys across Sri Lanka since 2015.
            </motion.p>
          </div>
        </div>
      </header>

      {/* OUR STORY */}
      <section className="max-w-7xl mx-auto px-6 py-16 text-center">
        <h2 className="text-3xl md:text-4xl font-playfair font-semibold text-emerald-700 mb-6">
          Our Story
        </h2>

        <p className="max-w-4xl mx-auto text-lg leading-relaxed text-slate-600">
          ExploreLanka Travels began with a desire to reveal the true essence of Sri Lanka.
          Since 2015, we have grown into a trusted travel brand offering curated adventures,
          cultural immersion, and personalized tours for travelers worldwide.
        </p>
      </section>

      {/* WHAT WE OFFER — Cards same as Packages */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-playfair text-center text-emerald-700 mb-12">
            What We Offer
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Compass,
                title: "Customized Tours",
                desc: "Flexible itineraries tailored to your travel style and pace.",
              },
              {
                icon: Users,
                title: "Experienced Guides",
                desc: "Friendly local experts who show you hidden gems and authentic culture.",
              },
              {
                icon: Globe,
                title: "Comfort & Safety",
                desc: "Smooth transport, trusted hotels, and 24/7 support for peace of mind.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -6 }}
                className="bg-slate-50 p-8 rounded-2xl shadow-md hover:shadow-xl transition text-center"
              >
                <div className="flex justify-center mb-4">
                  <item.icon className="w-12 h-12 text-emerald-600" />
                </div>
                <h3 className="text-xl font-semibold text-slate-800 mb-3">
                  {item.title}
                </h3>
                <p className="text-slate-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="max-w-7xl mx-auto px-6 py-16 text-center">
        <h2 className="text-3xl md:text-4xl font-playfair text-emerald-700 mb-6">
          Our Mission & Vision
        </h2>

        <p className="max-w-4xl mx-auto text-lg text-slate-600 leading-relaxed">
          Our mission is to deliver meaningful travel experiences—connecting people with
          culture, nature, and authentic Sri Lankan hospitality. We aim to promote
          sustainable tourism, support local communities, and create memories that last a lifetime.
        </p>
      </section>

      {/* CTA — Same gradient as Packages */}
      <section className="max-w-7xl mx-auto px-6 pb-20">
        <div className="bg-gradient-to-r from-emerald-600 to-sky-500 text-white rounded-2xl p-10 text-center">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4">
            Ready to Plan Your Next Adventure?
          </h2>
          <p className="text-lg opacity-90 mb-8">
            Let us design the perfect Sri Lankan experience for you.
          </p>

          <div className="flex justify-center gap-4">
           <Link
  to="/contact"
  className="inline-block bg-white text-emerald-700 px-8 py-4 rounded-full font-medium hover:opacity-95 transition shadow"
>
  Start Your Journey
</Link>
          </div>
        </div>
      </section>

    </div>
  );
}

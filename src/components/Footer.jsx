import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Facebook,
  Instagram,
  Twitter,
  Phone,
  Mail,
  MapPin,
  Send,
  CheckCircle,
  XCircle,
} from "lucide-react";
import { useForm } from "@formspree/react";
import { motion, AnimatePresence } from "framer-motion";

export default function Footer() {
  const [state, handleSubmit, reset] = useForm("mpqaenlq");

  useEffect(() => {
    if (state.succeeded) {
      const t = setTimeout(() => reset(), 3000);
      return () => clearTimeout(t);
    }
  }, [state.succeeded, reset]);

  return (
    <footer className="bg-gradient-to-b from-[#0F3F3F] to-[#0b2f2f] text-white">
      <div className="max-w-7xl mx-auto px-6 py-14">

        {/* FIXED GRID */}
        <div className="grid grid-cols-1 gap-y-12 gap-x-10 lg:grid-cols-[1.4fr_0.6fr_1fr_1.3fr]">

          {/* BRAND */}
          <div>
            <h5 className="text-2xl font-bold tracking-wide">
              Happy<span className="text-[#7EE6E6]">Way</span> Travels
            </h5>
            <p className="text-sm text-[#D9FFFF] mt-4 leading-relaxed">
              Discover Sri Lanka through curated journeys, local expertise,
              and unforgettable travel experiences.
            </p>

            <div className="flex items-center gap-3 mt-6">
              {[Facebook, Instagram, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="p-2 rounded-full bg-white/10 hover:bg-[#7EE6E6] hover:text-[#0F3F3F] transition"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* EXPLORE */}
          <div>
            <h6 className="font-semibold text-sm uppercase tracking-wider">
              Explore
            </h6>
            <ul className="mt-4 space-y-2 text-sm text-[#D9FFFF]">
              <li><Link to="/destinations" className="hover:text-white">Destinations</Link></li>
              <li><Link to="/packages" className="hover:text-white">Packages</Link></li>
              <li><Link to="/blogs" className="hover:text-white">Travel Journal</Link></li>
              <li><Link to="/about" className="hover:text-white">About Us</Link></li>
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h6 className="font-semibold text-sm uppercase tracking-wider">
              Contact
            </h6>
            <ul className="mt-4 space-y-3 text-sm text-[#D9FFFF]">
              <li className="flex gap-3">
                <MapPin size={16} />
                Colombo, Sri Lanka
              </li>
              <li className="flex gap-3">
                <Mail size={16} />
                support@visitsrilanka.example
              </li>
              <li className="flex gap-3">
                <Phone size={16} />
                +94 77 123 4567
              </li>
            </ul>
          </div>

          {/* NEWSLETTER */}
          <div>
            <h6 className="font-semibold text-sm uppercase tracking-wider">
              Newsletter
            </h6>
            <p className="text-sm text-[#D9FFFF] mt-4 max-w-sm">
              Subscribe for travel tips, destination guides, and exclusive offers.
            </p>

            <form onSubmit={handleSubmit} className="mt-5">
              <AnimatePresence mode="wait">
                {!state.succeeded && !state.errors?.length && (
                  <motion.div
                    key="form"
                    className="flex items-center bg-white rounded-xl p-1 shadow-lg max-w-sm"
                  >
                    <input
                      type="email"
                      name="_replyto"
                      required
                      placeholder="Your email address"
                      className="flex-1 px-4 py-2.5 text-sm text-gray-800 outline-none rounded-l-xl"
                    />
                    <button
                      type="submit"
                      disabled={state.submitting}
                      className="bg-[#207070] px-4 py-2.5 rounded-lg hover:bg-[#1a5f5f] transition"
                    >
                      <Send size={16} />
                    </button>
                  </motion.div>
                )}

                {state.succeeded && (
                  <motion.div className="flex items-center gap-2 bg-[#1f6f6f] px-4 py-3 rounded-xl max-w-sm">
                    <CheckCircle size={18} className="text-[#7EE6E6]" />
                    <span className="text-sm">Subscribed successfully!</span>
                  </motion.div>
                )}

                {state.errors?.length > 0 && (
                  <motion.div className="flex items-center gap-2 bg-[#6f1f1f] px-4 py-3 rounded-xl max-w-sm">
                    <XCircle size={18} className="text-red-300" />
                    <span className="text-sm">Something went wrong.</span>
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </div>

        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 text-xs text-[#CDEDED] flex justify-between">
          <span>© {new Date().getFullYear()} VisitSriLanka</span>
          
        </div>
      </div>
    </footer>
  );
}

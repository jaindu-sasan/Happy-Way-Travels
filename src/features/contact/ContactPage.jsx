import React from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";

export default function Contact() {
  return (
    <div className="font-poppins text-gray-800">
      {/* HERO — Mobile Optimized */}
      <section className="relative min-h-[80vh] md:min-h-[70vh] flex items-center pt-20 md:pt-0 pb-20">
        <div className="absolute inset-0 bg-[url('/assets/ContactUS/contactushero.jpg')] bg-cover bg-center md:bg-fixed" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0f3f3f]/70 via-[#0f3f3f]/60 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-6 grid md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
          >
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white leading-tight">
              Let’s Talk About
              <span className="block text-[#9ad6d6]">Your Next Journey</span>
            </h1>

            <p className="mt-4 md:mt-6 text-sm sm:text-lg text-gray-200 max-w-xl">
              Questions, custom tours, or quick bookings — our travel experts are
              ready to help you.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-6 md:mt-8">
              <a
                href="https://wa.me/94771234567"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-green-500 text-white px-6 py-3 md:py-4 rounded-full font-semibold hover:scale-105 transition w-full sm:w-auto"
              >
                <MessageCircle size={20} /> WhatsApp Us
              </a>

              <a
                href="#contact-form"
                className="inline-flex items-center justify-center gap-2 bg-white/90 text-[#105050] px-6 py-3 md:py-4 rounded-full font-semibold hover:bg-white transition w-full sm:w-auto"
              >
                Send Message
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* INFO STRIP — Smooth Overlap */}
      <section className="relative z-20 mt-8 md:mt-[-5rem]">
        <div className="max-w-6xl mx-auto px-5 md:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              { icon: <MapPin />, title: "Office", value: "Colombo, Sri Lanka" },
              { icon: <Phone />, title: "Call", value: "+94 77 123 4567" },
              { icon: <Mail />, title: "Email", value: "info@explorelanka.com" },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-xl p-6 flex items-center gap-4"
              >
                <div className="w-12 h-12 rounded-xl bg-[#105050]/10 text-[#105050] flex items-center justify-center">
                  {item.icon}
                </div>
                <div>
                  <p className="text-sm text-gray-500">{item.title}</p>
                  <p className="font-semibold">{item.value}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FORM + EXTRA INFO */}
      <section id="contact-form" className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-5 md:px-6 grid lg:grid-cols-2 gap-12 items-start">
          {/* FORM */}
          <motion.form
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            onSubmit={(e) => e.preventDefault()}
            className="bg-white rounded-3xl shadow-2xl p-6 sm:p-10"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-[#105050] mb-2">
              Send Us a Message
            </h2>

            <p className="text-gray-500 mb-8">
              We usually reply within a few hours.
            </p>

            <input className="input mb-5" placeholder="Your Name" required />
            <input
              className="input mb-5"
              placeholder="Email Address"
              type="email"
              required
            />
            <input
              className="input mb-5"
              placeholder="Phone Number (WhatsApp preferred)"
              type="tel"
              required
            />
            <input className="input mb-5" placeholder="Country" required />

            <textarea
              className="input h-32 mb-6"
              placeholder="Whats on your mind?"
              required
            />

            <button className="w-full bg-[#105050] text-white py-4 rounded-xl font-semibold hover:bg-[#206070] transition">
              Send Message
            </button>
          </motion.form>

          {/* EXTRA INFO PANEL */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="bg-[#105050] text-white rounded-3xl shadow-2xl p-6 sm:p-10"
          >
            <h3 className="text-2xl sm:text-3xl font-bold mb-6">Why Contact Us?</h3>

            <ul className="space-y-4 text-base sm:text-lg mb-10">
              <li>✔ Custom tour planning & itineraries</li>
              <li>✔ Fast WhatsApp & email support</li>
              <li>✔ Best local prices & trusted guides</li>
              <li>✔ 24/7 assistance during your trip</li>
            </ul>

            <div className="bg-white/10 rounded-2xl p-6">
              <p className="text-sm uppercase tracking-wide text-gray-200 mb-4">
                Quick Contact
              </p>

              <div className="grid gap-4">
                <a
                  href="tel:+94771234567"
                  onClick={(e) => {
                    if (window.innerWidth > 768) {
                      e.preventDefault();
                      window.open("https://wa.me/94771234567", "_blank");
                    }
                  }}
                  className="flex items-center gap-4 text-lg py-5 px-5 bg-white/15 hover:bg-white/25 transition rounded-xl"
                >
                  <Phone /> Call / WhatsApp
                </a>

                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=sasanzoysa@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-4 text-lg py-5 px-5 bg-white/15 hover:bg-white/25 transition rounded-xl"
                >
                  <Mail /> Email Us
                </a>

                <a
                  href="https://wa.me/94771234567"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-4 text-lg py-5 px-5 bg-white/15 hover:bg-white/25 transition rounded-xl"
                >
                  <MessageCircle /> WhatsApp Chat
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <style>{`
        .input {
          width: 100%;
          border: 1px solid #e5e7eb;
          padding: 0.9rem 1rem;
          border-radius: 0.75rem;
          outline: none;
          font-size: 16px;
        }
        .input:focus {
          border-color: #105050;
          box-shadow: 0 0 0 2px rgba(16, 80, 80, 0.2);
        }
      `}</style>
    </div>
  );
}

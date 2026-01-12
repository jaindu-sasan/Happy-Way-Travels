import { motion } from "framer-motion";
import { Calendar, MapPin, Phone, CheckCircle } from "lucide-react";
import { useState } from "react";

const MATCHES = [
  "07 Feb 2026 – Pakistan vs Netherlands – Colombo",
  "08 Feb 2026 – Sri Lanka vs Ireland – Colombo",
  "09 Feb 2026 – Zimbabwe vs Oman – Colombo",
  "10 Feb 2026 – Pakistan vs USA – Colombo",
  "11 Feb 2026 – Australia vs Ireland – Colombo",
  "12 Feb 2026 – Sri Lanka vs Oman – Kandy",
  "13 Feb 2026 – Australia vs Zimbabwe – Colombo",
  "14 Feb 2026 – Ireland vs Oman – Colombo",
  "16 Feb 2026 – Australia vs Sri Lanka – Kandy",
  "17 Feb 2026 – Ireland vs Zimbabwe – Kandy",
  "18 Feb 2026 – Pakistan vs Namibia – Colombo",
  "19 Feb 2026 – Sri Lanka vs Zimbabwe – Colombo",
  "20 Feb 2026 – Australia vs Oman – Kandy",
];

export default function T20LandingPage() {
  const [submitted, setSubmitted] = useState(false);
  const [bookingRef, setBookingRef] = useState("");
  const [loading, setLoading] = useState(false);
  const [selectedMatches, setSelectedMatches] = useState([]);
  const [errors, setErrors] = useState({});

  const handleMatchChange = (match) => {
    setSelectedMatches((prev) =>
      prev.includes(match)
        ? prev.filter((m) => m !== match)
        : [...prev, match]
    );
  };

  const validateForm = (form) => {
    const newErrors = {};

    if (!form.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(form.email)) {
      newErrors.email = "Enter a valid email address";
    }

    if (!form.whatsapp.trim()) {
      newErrors.whatsapp = "WhatsApp number is required";
    } else if (!/^\+?[0-9]{9,15}$/.test(form.whatsapp)) {
      newErrors.whatsapp = "Enter a valid WhatsApp number";
    }

    if (selectedMatches.length === 0) {
      newErrors.matches = "Please select at least one match";
    }

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = {
      name: e.target.name.value,
      email: e.target._replyto.value,
      whatsapp: e.target.whatsapp.value,
    };

    const validationErrors = validateForm(form);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setLoading(true);

    const ref = `SLT20-${Math.floor(1000 + Math.random() * 9000)}`;
    setBookingRef(ref);

    const formData = new FormData(e.target);
    formData.append("reference_id", ref);
    formData.append("selected_matches", selectedMatches.join(", "));

    try {
      await fetch("https://formspree.io/f/xzdzwabp", {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      setSubmitted(true);

      const message = `
Hi 👋
I submitted my T20 World Cup Sri Lanka travel request.

📌 Reference ID: ${ref}
🏏 Matches:
${selectedMatches.map((m) => `• ${m}`).join("\n")}
`;

      setTimeout(() => {
        window.location.href = `https://api.whatsapp.com/send?phone=94719201718&text=${encodeURIComponent(
          message
        )}`;
      }, 2000);
    } catch {
      alert("Submission failed. Please contact us via WhatsApp.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-gray-50 text-gray-800 font-sans">
     <section
  className="relative min-h-[70vh] text-white"
  style={{
    backgroundImage: "url(https://res.cloudinary.com/dx9lsxwg3/image/upload/v1768236186/sri-lanka-cricket_bupmz4.jpg)",
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>
  {/* Overlay */}
  <div className="absolute inset-0 bg-black/"></div>

  <div className="relative max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-10 items-center">
    
    {/* LEFT */}
    <div>
      <h1 className="text-3xl md:text-5xl font-bold leading-tight">
        T20 World Cup 2026 <br className="hidden md:block" />
        Sri Lanka Travel Assistance
      </h1>

      <p className="mt-6 text-lg opacity-90">
        Coming to Sri Lanka for T20 matches?
        Share your match dates — we’ll arrange hotels, transport & sightseeing.
      </p>

      <div className="mt-6 flex gap-4 flex-col sm:flex-row">
              <a
                href="#plan"
                className="bg-yellow-400 text-black px-6 py-4 rounded-xl font-semibold text-center hover:bg-yellow-300"
              >
                Plan My Cricket Trip
              </a>
<a
  href="https://api.whatsapp.com/send?phone=94719201718"
  target="_blank"
  rel="noopener noreferrer"
  className="border border-white px-6 py-4 rounded-xl text-center hover:bg-white hover:text-green-900"
>
  WhatsApp Us
</a>

      </div>
    </div>

    {/* RIGHT */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-lg"
    >
      <ul className="space-y-4">
        {[
          "Fully custom trips",
          "Local Sri Lankan experts",
          "Contact within 30 minutes",
          "Plan within 24 hours",
        ].map((item) => (
          <li key={item} className="flex items-center gap-3">
            <CheckCircle size={20} /> {item}
          </li>
        ))}
      </ul>
    </motion.div>

  </div>
</section>


       {/* HOW IT WORKS */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-center mb-12">
          How It Works
        </h2>

        <div className="grid md:grid-cols-3 gap-8 text-center">
          {[
            { icon: <Calendar size={36} />, title: "Submit Match Details", desc: "Tell us which matches you plan to attend." },
            { icon: <Phone size={36} />, title: "Quick Contact", desc: "We contact you within 30 minutes via WhatsApp." },
            { icon: <MapPin size={36} />, title: "Custom Package", desc: "You receive a personalized travel plan within 24 hours." },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2"
            >
              <div className="flex justify-center text-green-700 mb-4">
                {item.icon}
              </div>
              <h3 className="font-semibold text-xl mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>


      {/* FORM */}
      <section id="plan" className="bg-gradient-to-r from-green-50 to-white py-16">
        <div className="max-w-3xl mx-auto px-6">
          {!submitted ? (
            <motion.form
              onSubmit={handleSubmit}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className={`bg-white rounded-3xl shadow-xl p-10 space-y-6 ${
                loading ? "pointer-events-none opacity-90" : ""
              }`}
            >
              <h2 className="text-2xl font-bold text-center text-green-800">
                Request Your Custom Travel Plan
              </h2>

              <input type="hidden" name="matches" value={selectedMatches.join(", ")} />

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <input
                    name="name"
                    placeholder="Your Name"
                    className={`w-full p-4 border rounded-xl focus:ring-2 ${
                      errors.name
                        ? "border-red-500 focus:ring-red-400"
                        : "focus:ring-green-400"
                    }`}
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                  )}
                </div>

                <div>
                  <input
                    type="email"
                    name="_replyto"
                    placeholder="Email Address"
                    className={`w-full p-4 border rounded-xl focus:ring-2 ${
                      errors.email
                        ? "border-red-500 focus:ring-red-400"
                        : "focus:ring-green-400"
                    }`}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                  )}
                </div>
              </div>

              <div>
                <input
                  name="whatsapp"
                  placeholder="WhatsApp Number (e.g. +94771234567)"
                  className={`w-full p-4 border rounded-xl focus:ring-2 ${
                    errors.whatsapp
                      ? "border-red-500 focus:ring-red-400"
                      : "focus:ring-green-400"
                  }`}
                />
                {errors.whatsapp && (
                  <p className="text-red-500 text-sm mt-1">{errors.whatsapp}</p>
                )}
              </div>

              <div>
                <p className="font-semibold mb-3">Select Matches</p>
                <div className="grid sm:grid-cols-2 gap-3">
                  {MATCHES.map((match) => (
                    <label
                      key={match}
                      className="flex items-center gap-3 border rounded-xl p-3 cursor-pointer"
                    >
                      <input
                        type="checkbox"
                        checked={selectedMatches.includes(match)}
                        onChange={() => handleMatchChange(match)}
                        className="accent-green-600"
                      />
                      <span className="text-sm">{match}</span>
                    </label>
                  ))}
                </div>
                {errors.matches && (
                  <p className="text-red-500 text-sm mt-2">{errors.matches}</p>
                )}
              </div>

              <textarea
                name="preferences"
                rows={4}
                placeholder="Hotel type, number of people, sightseeing plans"
                className="w-full p-4 border rounded-xl focus:ring-2 focus:ring-green-400"
              />

              <button
                disabled={loading}
                className="w-full bg-green-700 text-white py-4 rounded-2xl text-lg font-semibold hover:bg-green-800"
              >
                {loading ? "Submitting..." : "Get My Custom Plan"}
              </button>

              <p className="text-sm text-center text-gray-500">
                ⚡ We contact you within 30 minutes
              </p>
            </motion.form>
          ) : (
            <motion.div className="bg-white rounded-3xl shadow-xl p-10 text-center">
              <h2 className="text-2xl font-bold text-green-700 mb-4">
                Request Received ✅
              </h2>

              <p className="text-gray-700 mb-4">
                Our travel expert is reviewing your request.
              </p>

              <p className="font-semibold mb-2">
                Reference ID: <span className="text-green-700">{bookingRef}</span>
              </p>

              <p className="text-gray-600 text-sm">
                📞 Contact within 30 minutes <br />
                📄 Custom plan within 24 hours
              </p>

              <p className="mt-6 text-sm text-gray-500">
                Redirecting to WhatsApp…
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* MOBILE WHATSAPP STICKY */}

    </div>
  );
}

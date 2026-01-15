import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { motion } from "framer-motion";
import { Star, Users, Shield, Globe } from "lucide-react";
import { packagesdata } from "../destination/data/PackageData"
import { blogPosts } from "../blog/data/blogData";
import { createSlug } from "../destination/components/PackageContent";


import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function HomePage() {
  const slides = [
    { img: "/assets/homepage/featured-destinations/Explore-Magical-Sri Lanka.jpg", title: "Explore Magical Sri Lanka", description: "From misty mountains to golden beaches — uncover a land where nature and culture blend beautifully." },
    { img: "/assets/homepage/featured-destinations/kandy.jpg", title: "Sacred City of Kandy", description: "Walk through history, feel the rhythm of drums, and witness Sri Lanka’s living traditions." },
    { img: "/assets/homepage/featured-destinations/sigiriya.webp", title: "Sigiriya: The Lion Fortress", description: "Climb through clouds and legend — one of Asia’s greatest ancient marvels awaits." },
    {img: "/assets/homepage/featured-destinations/ella.jpeg",title: "Ella: Hill Country Paradise",description:"Breathe fresh mountain air, hike to breathtaking viewpoints, and explore Sri Lanka’s most scenic hill town."}
  ];

  const hotPackages = packagesdata.filter(pkg => [7, 8, 9].includes(pkg.id));
  const homeBlogs = blogPosts
  .filter(post => post.featured)
  .slice(0, 3);



  const whyUs = [
    { icon: <Star className="w-10 h-10 text-[#207070]" />, title: "Trusted Local Experts", desc: "We know Sri Lanka inside out, offering the best authentic experiences." },
    { icon: <Users className="w-10 h-10 text-[#207070]" />, title: "Personalized Service", desc: "Every trip is customized to your interests, comfort, and budget." },
    { icon: <Shield className="w-10 h-10 text-[#207070]" />, title: "Secure & Reliable", desc: "We ensure safe travel, verified accommodations, and 24/7 support." },
    { icon: <Globe className="w-10 h-10 text-[#207070]" />, title: "Sustainable Tourism", desc: "We promote eco-friendly practices and support local communities." },
  ];

  const steps = [
    { img: "/assets/homepage/plan_steps/plan-step1.jpg", title: "Tell Us About Your Travel Goals", desc: "Share what excites you most — whether it’s beaches, culture, food, or hidden gems." },
    { img: "/assets/homepage/plan_steps/plan-step2.jpg", title: "Customize Your Journey", desc: "Choose dates, destinations, and preferences. We’ll create a tailored itinerary." },
    { img: "/assets/homepage/plan_steps/plan-step3.jpg", title: "Relax, We’ll Handle the Details", desc: "From bookings to logistics, our experts ensure everything runs smoothly." },
  ];

  return (
    <div className="relative overflow-hidden bg-[#F0F0F0] text-[#010100]">

    
{/* ---------------- HERO SECTION WITH HIGH-QUALITY VIDEO (NO DARKNESS) ---------------- */}
<section className="relative h-[100vh] w-full overflow-hidden">

  {/* Background Video */}
  <video
    className="absolute inset-0 w-full h-full object-cover"
    src="https://res.cloudinary.com/dx9lsxwg3/video/upload/v1768235986/1231_5_ugbh8z.mp4"
    autoPlay
    muted
    loop
    playsInline
    preload="metadata"
  />

  {/* ❌ Removed the dark gradient overlay */}

  {/* Content */}
 <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
  <motion.h1
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
    className="text-4xl md:text-6xl font-bold mb-6 text-[#E0FFFF] drop-shadow-[0_0_14px_rgba(0,120,120,0.7)]"

  >
    Explore Magical Sri Lanka
  </motion.h1>

  <motion.p
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1.2 }}
    className="text-lg md:text-2xl text-white max-w-2xl leading-relaxed mb-8 drop-shadow-[0_0_8px_rgba(0,0,0,0.6)]"
  >
    From misty mountains to golden beaches — uncover a land where nature and culture blend beautifully.
  </motion.p>

  <Link to="/destinations">
    <motion.button
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.4 }}
      className="bg-[#105050] text-white px-10 py-3 rounded-full text-lg font-semibold shadow-lg hover:bg-[#166666] hover:shadow-xl transition-all"
    >
      Explore Destinations
    </motion.button>
  </Link>
</div>

</section>

{/* ---------------- T20 WORLD CUP FEATURE SECTION ---------------- */}
<section className="py-16 bg-gradient-to-r from-[#0F3F3F] to-[#166666] text-white">
  <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">

    {/* LEFT CONTENT */}
    <div>
      <span className="inline-block mb-3 bg-yellow-400 text-black text-xs font-bold px-4 py-1 rounded-full">
        🏏 T20 World Cup 2026
      </span>

      <h2 className="text-3xl md:text-4xl font-bold leading-tight">
        Traveling to Sri Lanka for T20 Matches?
      </h2>

      <p className="mt-4 text-white/90">
        We help international cricket fans with hotels, transport,
        match-city travel & sightseeing — all customized to your match schedule.
      </p>

      <ul className="mt-6 space-y-3 text-sm">
        <li>✅ No fixed packages – fully custom trips</li>
        <li>⚡ WhatsApp contact within 30 minutes</li>
        <li>🧳 Custom travel plan in 24 hours</li>
      </ul>

      <div className="mt-8 flex flex-wrap gap-4">
        <Link
          to="/t20-world-cup"
          className="bg-yellow-400 text-black px-6 py-3 rounded-xl font-semibold hover:bg-yellow-300 transition"
        >
          Plan My Cricket Trip
        </Link>

        <a
          href="https://wa.me/94XXXXXXXXX"
          className="border border-white px-6 py-3 rounded-xl font-semibold hover:bg-white hover:text-[#0F3F3F] transition"
        >
          WhatsApp Us
        </a>
      </div>
    </div>

    {/* RIGHT VISUAL */}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="relative rounded-2xl overflow-hidden shadow-xl"
    >
      <img
        src="/assets/homepage/t20worldCup/t20-feature.webp"
        alt="T20 World Cup Sri Lanka"
        className="w-full h-[320px] md:h-[380px] object-cover"
      />

  
    </motion.div>

  </div>
</section>




      {/* ---------------- HOT PACKAGES ---------------- */}
      {/* HOT PACKAGES */}
<section className="py-16">
  <div className="max-w-6xl mx-auto px-6">
    <div className="flex items-center justify-between mb-8">
      <div>
        <h2 className="text-3xl font-bold text-[#105050]">Hot Packages</h2>
        <p className="text-sm text-[#334343] mt-1">Popular journeys curated for discerning travelers</p>
      </div>
      <div>
        <Link to="/destinations" className="text-sm text-[#207070] font-semibold hover:underline">See all packages →</Link>
      </div>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {hotPackages.map((p) => (
        <motion.div
          key={p.id}
          whileHover={{ scale: 1.02 }}
          className="rounded-2xl overflow-hidden bg-white shadow-lg border border-transparent hover:border-[#E8F8F6] transition"
        >
          <div className="relative h-56">
            <img src={p.image} alt={p.name} className="w-full h-full object-cover" />
            
          </div>

          <div className="p-5">
            <h3 className="text-xl font-semibold text-[#105050]">{p.name}</h3>
            <div className="text-sm text-[#334343] mt-1">{p.duration}</div>
            <div className="mt-4 flex items-center justify-between">
              <div>
                <div className="text-lg font-bold text-[#105050]">USD {p.price.toLocaleString()}</div>
                <div className="text-xs text-[#556565]">Two Person </div>
              </div>
              <div>
                <Link to={`/packages/${createSlug(p.name)}`} className="inline-block bg-[#105050] text-white px-4 py-2 rounded-full text-sm font-semibold  transition">
                  View
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
</section>

            {/* DESTINATIONS CAROUSEL (small hero-style cards) */}
      <section className="py-10 bg-gradient-to-b from-white to-[#F7FFFE]">
        <div className="max-w-6xl mx-auto px-6 mb-6">
          <h3 className="text-2xl font-bold text-[#105050]">Featured Destinations</h3>
          <p className="text-sm text-[#334343] mt-1">Handpicked regions for a perfect experience</p>
        </div>

        <div className="max-w-6xl mx-auto px-6">
         <Swiper
  slidesPerView={1.15}
  spaceBetween={18}
  breakpoints={{
    640: { slidesPerView: 1.5 },
    1024: { slidesPerView: 3 },
  }}
  loop
  autoplay={{ delay: 3500 }}
  modules={[Autoplay]}
>
  {slides.map((s, idx) => (
    <SwiperSlide key={idx}>
      <Link
        to={`/destinations`}
        className="block"
        onClick={(e) => e.stopPropagation()} // prevents swiper drag conflict
      >
        <motion.div
          whileHover={{ scale: 1.03 }}
          className="rounded-2xl overflow-hidden shadow-lg cursor-pointer"
        >
          <div className="relative h-[260px]">
            <img
              src={s.img}
              alt={s.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            <div className="absolute left-5 bottom-5 text-white">
              <h4 className="text-xl font-bold">{s.title}</h4>
              <p className="text-xs max-w-xs">{s.description}</p>
            </div>
          </div>
        </motion.div>
      </Link>
    </SwiperSlide>
  ))}
</Swiper>
        </div>
      </section>

      {/* ---------------- BLOG SECTION ---------------- */}
      <section className="py-24 bg-[#F0F0F0]">
        <div className="max-w-6xl mx-auto px-4 mb-12 text-center">
          <h2 className="text-3xl font-bold text-[#105050] mb-3 font-[Pacifico]">From Our Travel Journal</h2>
          <p className="text-[#010100]">Explore stories, guides, and travel diaries written by our explorers</p>
        </div>
        <SplitPreviewBlogs homeBlogs={homeBlogs} />
      </section>

      {/* ---------------- WHY US ---------------- */}
      <section className="py-20 bg-[#D0F0F0]">
        <div className="max-w-6xl mx-auto text-center mb-12 px-4">
          <h2 className="text-3xl font-bold mb-3 text-[#105050] font-[Pacifico]">Why Choose Us</h2>
          <p className="text-[#010100]">We go beyond ordinary tours — here’s what makes us different</p>
        </div>
        <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto px-4">
          {whyUs.map((item, i) => (
            <motion.div
              key={i}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 30 }}
              transition={{ duration: 0.6 }}
              className="p-8 rounded-xl bg-[#F0F0F0] shadow hover:shadow-lg transition flex flex-col items-center text-center"
            >
              {item.icon}
              <h3 className="text-lg font-semibold mt-4 mb-2 text-[#207070]">{item.title}</h3>
              <p className="text-[#010100] text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ---------------- PLAN YOUR TRIP ---------------- */}
{/* ---------------- PLAN YOUR TRIP (OPTIMIZED) ---------------- */}
<section className="py-24 bg-[#F0F0F0] text-center">
  <div className="max-w-5xl mx-auto px-4">
    <p className="uppercase tracking-widest text-[#207070] mb-2 text-sm">3 Steps to Your Perfect Trip</p>
    <h2 className="text-3xl md:text-4xl font-bold text-[#105050] mb-4 font-[Pacifico]">
      Plan Your Dream Getaway with Expert Guidance
    </h2>
    <p className="text-[#010100] max-w-3xl mx-auto mb-12">
      From exotic escapes to weekend adventures — we’ll craft a travel plan that fits your style, pace, and passions.
    </p>

    {/* Motion container with stagger (MUCH faster) */}
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ staggerChildren: 0.25 }}
      className="grid md:grid-cols-3 gap-12 mb-12"
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.25 } }
      }}
    >
      {steps.map((step, index) => (
        <motion.div
          key={index}
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0 }
          }}
          className="flex flex-col items-center"
        >
          <div className="w-32 h-32 rounded-full overflow-hidden mb-5 border-2 border-[#207070]/70 shadow-sm">
            <img
              src={step.img.replace('.jpg', '.webp')} 
              alt={step.title}
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </div>

          <h3 className="text-lg font-semibold text-[#105050] mb-2">{step.title}</h3>
          <p className="text-[#010100] text-sm max-w-xs">{step.desc}</p>
        </motion.div>
      ))}
    </motion.div>

    <Link
      to="/contact"
      className="inline-block bg-[#105050] text-[#F0F0F0] font-semibold px-8 py-3 rounded-full hover:bg-[#206070] transition"
    >
      Start Planning Now
    </Link>
  </div>
</section>

    </div>
  );
}

/* ---------------- SPLIT PREVIEW BLOG COMPONENT ---------------- */
//* ---------------- SPLIT PREVIEW BLOG COMPONENT ---------------- */
function SplitPreviewBlogs({ homeBlogs }) {
  const [activeBlog, setActiveBlog] = useState(
    homeBlogs && homeBlogs.length > 0 ? homeBlogs[0] : null
  );

  if (!homeBlogs || homeBlogs.length === 0) return null;

  return (
    <div className="max-w-6xl mx-auto px-4">
      {/* ---------------- Desktop Split Layout ---------------- */}
      <div className="hidden md:grid md:grid-cols-2 gap-8 items-center">
        {activeBlog && (
          <motion.div
            key={activeBlog.id}
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 40 }}
            transition={{ duration: 0.5 }}
            className="h-[400px] rounded-2xl overflow-hidden shadow-lg relative"
          >
            <img
              src={activeBlog.image}
              alt={activeBlog.title}
              loading="lazy"
              className="w-full h-full object-cover transition duration-500"
            />
            <div className="absolute inset-0 bg-black/40 flex items-end p-6">
              <h3 className="text-2xl font-bold text-white">{activeBlog.title}</h3>
            </div>
          </motion.div>
        )}

        <div className="flex flex-col gap-6">
          {homeBlogs.map((blog) => (
            <motion.div
              key={blog.id}
              onMouseEnter={() => setActiveBlog(blog)}
              onClick={() => setActiveBlog(blog)}
              whileHover={{ scale: 1.02 }}
              className={`p-5 rounded-xl shadow-md cursor-pointer transition bg-[#F0F0F0] hover:bg-[#D0F0F0] border-l-4 ${
                activeBlog?.id === blog.id ? "border-[#207070]" : "border-transparent"
              }`}
            >
              <h3 className="text-xl font-semibold text-[#105050] mb-1">{blog.title}</h3>
              <p className="text-[#010100] text-sm mb-2 line-clamp-2">{blog.excerpt}</p>
              <Link to={`/blog/${blog.id}`} className="text-[#207070] font-semibold text-sm">
                Read More →
              </Link>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ---------------- Mobile Carousel Layout ---------------- */}
      <div className="md:hidden">
        <Swiper
          slidesPerView={1.1}
          spaceBetween={16}
          loop
          autoplay={{ delay: 3500 }}
          pagination={{ clickable: true }}
          modules={[Autoplay, Pagination]}
        >
          {homeBlogs.map((blog) => (
            <SwiperSlide key={blog.id}>
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="rounded-2xl overflow-hidden shadow-lg cursor-pointer"
                onClick={() => setActiveBlog(blog)}
              >
                <img
                  src={blog.image}
                  alt={blog.title}
                  loading="lazy"
                  className="w-full h-48 object-cover"
                />
                <div className="p-4 bg-[#F0F0F0]">
                  <h3 className="text-lg font-semibold text-[#105050] mb-1">{blog.title}</h3>
                  <p className="text-[#010100] text-sm line-clamp-2 mb-2">{blog.excerpt}</p>
                  <Link to={`/blog/${blog.id}`} className="text-[#207070] font-semibold text-sm">
                    Read More →
                  </Link>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

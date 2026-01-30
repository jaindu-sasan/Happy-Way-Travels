import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import { motion } from "framer-motion";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

export default function HeroSlideshow() {
  const slides = [
    {
      img: "/assets/homepage/hero/hero-ocean.webp",
      title: "Explore Magical Sri Lanka",
      desc: "Ocean views, hidden cliffs, and unforgettable coastal moments.",
      objectPosition: "center",
    },
    {
      img: "/assets/homepage/hero/hero-elephants.webp",
      title: "Wildlife Encounters",
      desc: "See gentle giants and real nature experiences—safely planned.",
      objectPosition: "center",
    },
    {
      img: "/assets/homepage/hero/hero-beach.webp",
      title: "Golden Beaches & Island Life",
      desc: "Relax by the sea, discover tropical bays, and enjoy the sunshine.",
      objectPosition: "center",
    },
    {
      img: "/assets/homepage/hero/hero-waterfall.webp",
      title: "Misty Forests & Waterfalls",
      desc: "Fresh air, green trails, and peaceful nature escapes.",
      objectPosition: "center",
    },
  ];

  return (
    <section className="relative h-[100vh] w-full overflow-hidden">
      <Swiper
        modules={[Autoplay, Pagination, EffectFade]}
        effect="fade"
        loop
        speed={900}
        autoplay={{ delay: 4500, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        className="h-full"
      >
        {slides.map((s, i) => (
          <SwiperSlide key={i}>
            {/* Background Image */}
            <div className="absolute inset-0">
              <img
                src={s.img}
                alt={s.title}
                className="w-full h-full object-cover"
                style={{ objectPosition: s.objectPosition }}
                loading={i === 0 ? "eager" : "lazy"}
              />
              {/* Light overlay for text readability */}
              <div className="absolute inset-0 bg-black/30" />
            </div>

            {/* Text */}
            <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="text-4xl md:text-6xl font-bold mb-6 text-[#E0FFFF]"
              >
                {s.title}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2 }}
                className="text-lg md:text-2xl text-white max-w-2xl mb-8"
              >
                {s.desc}
              </motion.p>

              <Link to="/sri-lanka-tour-packages">
                <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.4 }}
                  className="bg-[#105050] text-white px-10 py-3 rounded-full text-lg font-semibold hover:bg-[#166666] transition"
                >
                  Explore Destinations
                </motion.button>
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

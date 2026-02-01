import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export default function MobileItineraryStory({ pkg, selectedDay, setSelectedDay }) {
  const totalDays = pkg.itinerary.length;

  const [showDetails, setShowDetails] = useState(false);
  const [tapSide, setTapSide] = useState(null);

  // ⭐ NEW: keep showing previous image until next is ready
  const [displayDay, setDisplayDay] = useState(selectedDay);
  const [loadedImages, setLoadedImages] = useState({});

  const activeDay = pkg.itinerary[displayDay];
  const priceToShow = activeDay.price ?? pkg.price;
  const swipeThreshold = 60;

  /* ---------------------------------
     ⭐ PRELOAD ALL IMAGES
  --------------------------------- */
  useEffect(() => {
    pkg.itinerary.forEach((day) => {
      const src = day.image || pkg.image;
      if (!loadedImages[src]) {
        const img = new Image();
        img.src = src;
        img.onload = () => {
          setLoadedImages((prev) => ({ ...prev, [src]: true }));
        };
      }
    });
  }, [pkg, loadedImages]);

  /* ---------------------------------
     ⭐ CHANGE IMAGE ONLY WHEN READY
  --------------------------------- */
  useEffect(() => {
    const nextSrc =
      pkg.itinerary[selectedDay].image || pkg.image;

    if (loadedImages[nextSrc]) {
      setDisplayDay(selectedDay);
    }
  }, [selectedDay, loadedImages, pkg]);

  return (
    <section className="lg:hidden relative mb-16 select-none">

      {/* IMAGE CAROUSEL */}
      <motion.div
        key={displayDay}
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        dragElastic={0.9}
        dragMomentum={true}
        onDragEnd={(e, info) => {
          if (info.offset.x < -swipeThreshold && selectedDay < totalDays - 1) {
            setSelectedDay(selectedDay + 1);
            setShowDetails(false);
          } else if (info.offset.x > swipeThreshold && selectedDay > 0) {
            setSelectedDay(selectedDay - 1);
            setShowDetails(false);
          }
        }}
        initial={{ x: 0 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.15, ease: "easeOut" }}
        className="h-[60vh] rounded-2xl overflow-hidden shadow-xl relative touch-pan-x"
      >
        {/* IMAGE */}
        <img
          src={activeDay.image || pkg.image}
          alt={activeDay.title}
          loading="eager"        // ⭐ NEW
          decoding="async"       // ⭐ NEW
          className="w-full h-full object-cover"
        />

        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-black/20" />

        {/* TAP ZONES */}
        <div className="absolute inset-0 z-20 flex">

          {/* LEFT TAP */}
          <div
            className="w-[40%] h-full relative"
            onClick={() => {
              if (selectedDay > 0) {
                setSelectedDay(selectedDay - 1);
                setShowDetails(false);
                setTapSide("left");
                setTimeout(() => setTapSide(null), 150);
              }
            }}
          >
            {tapSide === "left" && (
              <div className="absolute inset-0 bg-white/30 rounded-xl pointer-events-none animate-fadeTap" />
            )}
          </div>

          {/* CENTER */}
          <div className="w-[20%] h-full" />

          {/* RIGHT TAP */}
          <div
            className="w-[40%] h-full relative"
            onClick={() => {
              if (selectedDay < totalDays - 1) {
                setSelectedDay(selectedDay + 1);
                setShowDetails(false);
                setTapSide("right");
                setTimeout(() => setTapSide(null), 150);
              }
            }}
          >
            {tapSide === "right" && (
              <div className="absolute inset-0 bg-white/30 rounded-xl pointer-events-none animate-fadeTap" />
            )}
          </div>
        </div>

        {/* TOP INFO */}
        <div className="absolute top-4 left-4 right-4 text-white z-10 pointer-events-none">
          <p className="text-sm opacity-90">
            Day {displayDay + 1} of {totalDays}
          </p>
          <h2 className="text-2xl font-bold mt-1">{activeDay.title}</h2>
        </div>

        {/* BOTTOM HINT */}
        <div className="absolute bottom-6 left-0 right-0 text-center text-white text-sm opacity-90 pointer-events-none">
          <p>Tap or swipe to change days</p>
         
        </div>

      </motion.div>

      {/* PROGRESS DOTS */}
      <div className="flex justify-center gap-2 mt-4">
        {pkg.itinerary.map((_, i) => (
          <span
            key={i}
            className={`h-2 w-2 rounded-full transition ${
              i === displayDay ? "bg-[#207070]" : "bg-gray-300"
            }`}
          />
        ))}
      </div>

      {/* DETAILS SLIDE UP */}
      <AnimatePresence>
        {showDetails && (
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="fixed inset-0 z-50 bg-white rounded-t-3xl p-6 overflow-y-auto"
            drag="y"
            dragConstraints={{ top: 0, bottom: 0 }}
            onDragEnd={(e, info) => {
              if (info.offset.y > 120) setShowDetails(false);
            }}
          >
            <div className="w-12 h-1 bg-gray-300 rounded-full mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-[#105050] mb-3">
              {activeDay.title}
            </h3>
            <p className="text-gray-700 leading-relaxed whitespace-pre-line">
              {activeDay.description}
            </p>
            <button
              onClick={() => setShowDetails(false)}
              className="w-full mt-6 bg-gray-200 py-3 rounded-full font-semibold"
            >
              Close
            </button>
          </motion.div>
        )}
      </AnimatePresence>
      

      {/* VIEW DETAILS */}
      {!showDetails && (
        <button
          onClick={() => setShowDetails(true)}
          className="w-full mt-4 bg-[#207070] text-white py-3 rounded-full font-semibold"
        >
          View Day Details
        </button>
      )}

      <div className="lg:hidden mt-4 mb-8 flex flex-col gap-3 px-4">
        <div className="text-center text-xl font-bold text-[#105050]">
          ${pkg.price} / 2 person
        </div>

        <button
          onClick={() => setShowBookingModal(true)}
          className="w-full bg-green-700 text-white py-3 rounded-full font-semibold hover:bg-green-800 transition"
        >
          Enquire This Package
        </button>
        </div>

   



      {/* TAP FLASH ANIMATION */}
      <style jsx>{`
        @keyframes fadeTap {
          0% { opacity: 0.3; }
          100% { opacity: 0; }
        }
        .animate-fadeTap {
          animation: fadeTap 0.15s ease-out forwards;
        }
      `}</style>
    </section>
  );
}

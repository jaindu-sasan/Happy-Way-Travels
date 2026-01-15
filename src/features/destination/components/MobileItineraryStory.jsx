import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function MobileItineraryStory({ pkg, selectedDay, setSelectedDay }) {
  const activeDay = pkg.itinerary[selectedDay];
  const totalDays = pkg.itinerary.length;
  const [showDetails, setShowDetails] = useState(false);
  const [dragX, setDragX] = useState(0); // track current drag offset
  const [direction, setDirection] = useState(0); // swipe direction

  const priceToShow = activeDay.price ?? pkg.price;

  const swipeThreshold = 80; // px

  return (
    <section className="lg:hidden relative mb-16">

      {/* IMAGE STORY */}
      <motion.div
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        dragElastic={0.3}
        dragMomentum={false} // we'll handle momentum manually
        onDrag={(e, info) => setDragX(info.offset.x)}
        onDragEnd={(e, info) => {
          if (info.offset.x < -swipeThreshold && selectedDay < totalDays - 1) {
            setDirection(1); // swipe left → next
            setDragX(0);
            setTimeout(() => setSelectedDay(selectedDay + 1), 150);
          } else if (info.offset.x > swipeThreshold && selectedDay > 0) {
            setDirection(-1); // swipe right → previous
            setDragX(0);
            setTimeout(() => setSelectedDay(selectedDay - 1), 150);
          } else {
            setDragX(0); // snap back
          }
          setShowDetails(false);
        }}
        animate={{ x: dragX }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="h-[75vh] rounded-2xl overflow-hidden shadow-xl relative touch-pan-x"
      >
        <img
          src={activeDay.image || pkg.image}
          alt={activeDay.title}
          className="w-full h-full object-cover"
        />

        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-black/20" />

        {/* TOP INFO */}
        <div className="absolute top-4 left-4 right-4 text-white z-10">
          <p className="text-sm opacity-90">
            Day {selectedDay + 1} of {totalDays}
          </p>
          <h2 className="text-2xl font-bold mt-1">{activeDay.title}</h2>
        </div>

        {/* BOTTOM HINT */}
        <div className="absolute bottom-6 left-0 right-0 text-center text-white text-sm opacity-90">
          <p>⬅ Swipe days ➡</p>
          <p className="text-xs mt-1">⬆ Swipe for details</p>
        </div>
      </motion.div>

      {/* PROGRESS DOTS */}
      <div className="flex justify-center gap-2 mt-4">
        {pkg.itinerary.map((_, i) => (
          <span
            key={i}
            className={`h-2 w-2 rounded-full transition ${
              i === selectedDay ? "bg-[#207070]" : "bg-gray-300"
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
            <h3 className="text-2xl font-bold text-[#105050] mb-3">{activeDay.title}</h3>
            <p className="text-gray-700 leading-relaxed whitespace-pre-line">{activeDay.description}</p>
            <button
              onClick={() => setShowDetails(false)}
              className="w-full mt-6 bg-gray-200 py-3 rounded-full font-semibold"
            >
              Close
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* TAP TO OPEN DETAILS */}
      {!showDetails && (
        <button
          onClick={() => setShowDetails(true)}
          className="w-full mt-4 bg-[#207070] text-white py-3 rounded-full font-semibold"
        >
          View Day Details
        </button>
      )}

      {/* PRICE + ENQUIRE BUTTON */}
      <div className="mt-4 mb-8 flex flex-col gap-3 px-4">
        <div className="text-center text-xl font-bold text-[#105050]">
          ${priceToShow} / 2 person
        </div>
        <button
          onClick={() => {
            if (typeof window.setShowBookingModal === "function") {
              window.setShowBookingModal(true);
            }
          }}
          className="w-full bg-green-700 text-white py-3 rounded-full font-semibold hover:bg-green-800 transition"
        >
          Enquire This Package
        </button>
      </div>
    </section>
  );
}

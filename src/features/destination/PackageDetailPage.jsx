import { useParams } from 'react-router-dom';
import { packagesdata } from './data/PackageData';
import { MapContainer, TileLayer, Marker, Popup, Polyline } from 'react-leaflet';
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { motion } from 'framer-motion';
import { useState, useRef, useEffect, useMemo } from 'react';
import { createSlug } from "./components/PackageContent";

// Fix marker icon
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

// -----------------------------
// ⭐ RANDOM PACKAGE HELPER
// -----------------------------
function getRandomPackages(currentId, count = 3) {
  const filtered = packagesdata.filter((p) => p.id !== currentId);
  const shuffled = [...filtered].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
}

// -----------------------------
// ⭐ YOU MIGHT ALSO LIKE SECTION
// -----------------------------
import { useNavigate } from "react-router-dom";

function RecommendedPackages({ currentId }) {
  const navigate = useNavigate();
  const suggestions = useMemo(() => getRandomPackages(currentId, 3), [currentId]);

  

  return (
    <section className="py-16">
      <h2 className="text-3xl font-bold text-[#105050] mb-8 text-center">
        You Might Also Like
      </h2>

      <div className="grid md:grid-cols-3 gap-8 px-4">
        {suggestions.map((item) => (
          <motion.div
            key={item.id}
            whileHover={{ scale: 1.03 }}
            className="bg-white shadow-lg rounded-2xl overflow-hidden cursor-pointer border border-gray-200"
             onClick={() => navigate(`/packages/${createSlug(item.name)}`)}

          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-5">
              <h3 className="text-xl font-semibold mb-2 text-[#105050]">
                {item.name}
              </h3>
              <p className="text-gray-600 text-sm line-clamp-2 mb-4">
                {item.description}
              </p>
              <div className="flex justify-between items-center">
                <span className="text-lg font-bold text-green-900 text-center">${item.price}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

// -----------------------------
// ⭐ ITINERARY PREVIEW COMPONENT
// -----------------------------
function ItineraryPreview({ pkg, activeDay, setActiveDay, selectedDay, setSelectedDay }) {
  return (
    <>
      {/* MOBILE */}
      <section className="py-6 bg-white lg:hidden">
        <div className="flex flex-col gap-4">
          <motion.div
            key={activeDay.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full h-80 rounded-2xl overflow-hidden shadow-lg sticky top-4"
          >
            <img
              src={activeDay.image || pkg.image}
              alt={activeDay.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/50 flex flex-col justify-end p-4">
              <h3 className="text-xl font-bold text-white mb-2">{activeDay.title}</h3>
            </div>
            
          </motion.div>

          <div className="flex gap-4 overflow-x-auto pb-2">
            {pkg.itinerary.map((day, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.02 }}
                className={`flex-shrink-0 min-w-[140px] p-4 rounded-xl shadow-md cursor-pointer 
                  ${activeDay.title === day.title ? "bg-blue-200 border-l-4 border-[#207070]" : "bg-gray-200"}`}
                onClick={() => { setActiveDay(day); setSelectedDay(i); }}
              >
                <h4 className="font-semibold mb-1 text-sm">Day {i + 1}</h4>
                <p className="text-xs line-clamp-2">{day.title}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* DESKTOP */}
      <section className="hidden lg:block py-10">
        <div className="grid lg:grid-cols-[1fr_1fr] gap-10 items-start">
          <motion.div
            key={activeDay.title}
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="h-[520px] w-full min-w-0 rounded-2xl overflow-hidden shadow-lg sticky top-35"
          >
            <img
              src={activeDay.image || pkg.image}
              alt={activeDay.title}
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover"
            />

          </motion.div>

          <div className="flex flex-col gap-6 ">
            {pkg.itinerary.map((day, i) => (
              <motion.div
                key={i}
                onMouseEnter={() => setActiveDay(day)}
                whileHover={{ scale: 1.02 }}
                className={`p-5 rounded-xl shadow-md cursor-pointer transition bg-[#F0F0F0] 
                  hover:bg-[#D0F0F0] border-l-4 ${activeDay.title === day.title ? "border-[#207070]" : "border-transparent"}`}
                onClick={() => { setActiveDay(day); setSelectedDay(i); }}
              >
                <h3 className="text-xl font-semibold text-[#105050] mb-1">{day.title}</h3>
                <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">{day.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

// -----------------------------
// ⭐ MAIN PAGE
// -----------------------------
export default function PackageDetail() {
  const { slug  } = useParams();
  const pkg = packagesdata.find(
  (p) => createSlug(p.name) === slug
);


  if (!pkg) {
    return <div className="p-6 text-center text-red-600">Package not found.</div>;
  }

  const [errors, setErrors] = useState({});

  // ✅ 1️⃣ DEFINE VALIDATION FIRST
  const validateBookingForm = (formData) => {
    const errors = {};

    const name = formData.get("name");
    const email = formData.get("email");
    const country = formData.get("country");
    const phone = formData.get("phone");
    const adults = Number(formData.get("adults"));
    const hotelClass = formData.get("hotelClass");
    const arrivalDate = formData.get("arrivalDate");
    const departureDate = formData.get("departureDate");

    if (!name || name.trim().length < 3) {
      errors.name = "Full name must be at least 3 characters";
    }

    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      errors.email = "Enter a valid email address";
    }

    if (!country) {
      errors.country = "Country is required";
    }

 if (!phone || !/^[0-9]{7,15}$/.test(phone.trim())) {
  errors.phone = "Enter a valid phone number (digits only)";
}


    if (!adults || adults < 1) {
      errors.adults = "At least 1 adult is required";
    }

    if (!hotelClass) {
      errors.hotelClass = "Please select a hotel class";
    }

    if (!arrivalDate) {
      errors.arrivalDate = "Arrival date is required";
    }

    if (arrivalDate && departureDate) {
      if (new Date(departureDate) <= new Date(arrivalDate)) {
        errors.departureDate =
          "Departure date must be after arrival date";
      }
    }

    return errors;
  };

  // ✅ 2️⃣ THEN USE IT


 

  // Build unique route stops
  const routeStops = useMemo(() => {
    const visited = new Set();
    const stops = [];

    if (pkg.airport?.lat != null && pkg.airport?.lng != null) {
      const key = `${pkg.airport.lat},${pkg.airport.lng}`;
      visited.add(key);
      stops.push({ name: pkg.airport.name || "Airport", position: [pkg.airport.lat, pkg.airport.lng], dayIndex: -1 });
    }

    pkg.itinerary.forEach((day, dIndex) => {
      day.locations?.forEach((loc) => {
        if (loc.lat != null && loc.lng != null) {
          const key = `${loc.lat},${loc.lng}`;
          if (!visited.has(key)) {
            visited.add(key);
            stops.push({ name: loc.name, position: [loc.lat, loc.lng], dayIndex: dIndex });
          }
        }
      });
    });

    return stops;
  }, [pkg]);

  const [selectedDay, setSelectedDay] = useState(0);
  const [activeDay, setActiveDay] = useState(pkg.itinerary[0]);
  const [showBookingModal, setShowBookingModal] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const mapRef = useRef(null);
  const markersRef = useRef([]);
 


  // Auto focus map on selected day
  useEffect(() => {
    if (!mapRef.current) return;

    let dayStops = routeStops.filter((s) => s.dayIndex === selectedDay);

    if (
      selectedDay === pkg.itinerary.length - 1 &&
      pkg.airport?.lat != null &&
      pkg.airport?.lng != null
    ) {
      dayStops = [
        { name: pkg.airport.name || "Airport", position: [pkg.airport.lat, pkg.airport.lng], dayIndex: -1 }
      ];
    }

    if (dayStops.length) {
      const group = L.featureGroup(dayStops.map((s) => L.marker(s.position)));
      mapRef.current.fitBounds(group.getBounds(), { padding: [50, 50] });
    }
  }, [selectedDay, routeStops, pkg]);

  // Open popups of selected stops
  useEffect(() => {
    markersRef.current.forEach((marker, idx) => {
      if (!marker) return;
      const stop = routeStops[idx];

      if (selectedDay === pkg.itinerary.length - 1 && stop.dayIndex === -1) {
        marker.openPopup();
      } else if (stop.dayIndex === selectedDay) {
        marker.openPopup();
      } else {
        marker.closePopup();
      }
    });
  }, [selectedDay, routeStops, pkg]);

  return (
    <div className="font-poppins text-gray-900">
      {/* HERO */}
   <section
  className="relative bg-cover bg-center"
  style={{
    backgroundImage: `url(${
      pkg.image?.trim()
        ? encodeURI(pkg.image)
        : pkg.itinerary?.[0]?.image
        ? encodeURI(pkg.itinerary[0].image)
        : "/assets/default-hero.jpg"
    })`
  }}
>
  {/* Overlay */}
  <div className="absolute inset-0 bg-black/20"></div>

  {/* CONTENT */}
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    className="
      relative z-10
      text-center text-white
      px-4
      pt-24 pb-10
      md:min-h-[70vh]
      md:flex md:flex-col md:items-center md:justify-center
      max-w-3xl mx-auto
    "
  >
    <h1 className="text-2xl sm:text-3xl md:text-6xl font-bold leading-tight mb-3">
      {pkg.name}
    </h1>

    <p className="text-sm sm:text-base md:text-xl opacity-90 mb-5">
      {pkg.description}
    </p>

    <div className="flex flex-wrap justify-center gap-3 text-xs sm:text-sm mb-6">
      <div className="bg-white/20 px-3 py-1.5 rounded-md">
        Duration: {pkg.duration}
      </div>
      <div className="bg-white/20 px-3 py-1.5 rounded-md">
        Stops: {routeStops.length}
      </div>
    </div>

    <button
      onClick={() => setShowBookingModal(true)}
      className="bg-blue-600 px-6 py-2.5 rounded-full font-semibold hover:bg-blue-700 transition"
    >
      Book Now
    </button>
  </motion.div>
</section>


      {/* MAIN CONTENT */}
      <div className="mx-auto mt-16 lg:flex lg:gap-10 px-4 lg:px-30">
        <div className="flex-1 lg:flex-[2]">
          {/* SINGLE-DAY HANDLING */}
          {pkg.itinerary.length === 1 ? (
            <section className="py-10">
              <div className="w-full rounded-2xl overflow-hidden shadow-lg mb-6">
                <img
                  src={pkg.itinerary[0].image || pkg.image}
                  alt={pkg.itinerary[0].title}
                  className="w-full h-[400px] object-cover"
                />
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-md">
                <h2 className="text-3xl font-bold text-[#105050] mb-4">{pkg.itinerary[0].title}</h2>
                <p className="text-gray-700 leading-relaxed text-lg">{pkg.itinerary[0].description}</p>
              </div>
            </section>
          ) : (
            <ItineraryPreview
              pkg={pkg}
              activeDay={activeDay}
              setActiveDay={setActiveDay}
              selectedDay={selectedDay}
              setSelectedDay={setSelectedDay}
            />
          )}

          {/* MAP */}
          <section className="pb-1 relative z-0">
            <div className="h-[450px] rounded-2xl overflow-hidden shadow-lg mb-4 relative z-0">
              <MapContainer
                center={routeStops[0]?.position || [0, 0]}
                zoom={7}
                scrollWheelZoom={false}
                className="w-full h-full"
                whenCreated={(map) => (mapRef.current = map)}
              >
                <TileLayer
                  url="https://api.maptiler.com/maps/streets-v2/{z}/{x}/{y}.png?key=VTRqXeXKkUHO8a30Pcn0"
                  attribution="&copy; MapTiler & OSM"
                />

                {/* ACTIVE DAY PATH */}
                <Polyline
                  positions={routeStops
                    .filter((s) => s.dayIndex >= 0 && s.dayIndex <= selectedDay)
                    .map((s) => s.position)}
                  weight={6}
                  color="#1E90FF"
                />

                {/* FULL GRAY ROUTE */}
                <Polyline
                  positions={routeStops.map((s) => s.position)}
                  weight={2}
                  color="#c0c0c0"
                  dashArray="6"
                />

                {/* MARKERS */}
                {routeStops.map((stop, idx) => {
                  const isSelectedDayStop = stop.dayIndex === selectedDay;
                  return (
                    <Marker
                      key={idx}
                      position={stop.position}
                      icon={L.divIcon({
                        className: "flex items-center justify-center",
                        html: `
                          <div style="
                            width: 30px;
                            height: 30px;
                            border-radius: 50%;
                            background: ${isSelectedDayStop ? "#1E90FF" : "#207070"};
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            color: white;
                            font-weight: bold;
                            font-size: 14px;
                            animation: ${isSelectedDayStop ? "pulse 1.2s infinite" : "none"};
                            cursor: pointer;
                          ">${idx + 1}</div>`,
                        iconSize: [30, 30],
                        iconAnchor: [15, 15],
                      })}
                      ref={(el) => (markersRef.current[idx] = el)}
                    >
                      <Popup>
                        <div className="text-sm">
                          <strong>{stop.name}</strong>
                          <br />
                          {stop.dayIndex >= 0 ? `Day ${stop.dayIndex + 1}` : "Airport"}
                        </div>
                      </Popup>
                    </Marker>
                  );
                })}
              </MapContainer>

              <style>{`
                @keyframes pulse {
                  0% { transform: scale(1); opacity: 1; }
                  50% { transform: scale(1.3); opacity: 0.7; }
                  100% { transform: scale(1); opacity: 1; }
                }
              `}</style>
            </div>
          </section>

          {/* ⭐ YOU MIGHT ALSO LIKE ⭐ */}
          <RecommendedPackages currentId={pkg.id} />
        </div>

        {/* SIDEBAR */}
        <div className="hidden lg:block w-[280px]">
          <div className="sticky top-24 self-start">
            <div className="bg-white shadow-xl rounded-2xl p-6 border border-gray-200">
              <div className="mb-6">
                <span className="text-3xl font-bold text-gray-900">${pkg.price}</span>
                <span className="text-gray-500 ml-1">2 person</span>
              </div>

           

              <div className="space-y-4 text-gray-700 text-[15px] pb-4 border-b">
                <div className="flex justify-between">
                  <span className="text-gray-500">Duration</span>
                  <span className="font-medium">{pkg.duration} </span>
                </div>
           
                <div className="flex justify-between">
                  <span className="text-gray-500">Availability</span>
                  <span className="text-green-600 font-medium">Year-round</span>
                </div>
              </div>

              <button
                onClick={() => setShowBookingModal(true)}
                className="w-full bg-green-700 text-white py-3 rounded-full text-lg font-semibold mt-6 hover:bg-green-800 transition"
              >
                Enquire This Package
              </button>


              <div className="mt-8">
                <h4 className="text-lg font-semibold mb-3">What's Included</h4>
                <ul className="space-y-2 text-gray-700">
                  {pkg.includes?.map((inc, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="text-yellow-500 text-lg">•</span>
                      {inc}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* BOOKING MODAL */}
{showBookingModal && (
  <div
    className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
    onClick={(e) => { if(e.target === e.currentTarget) setShowBookingModal(false); }}
  >
    <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-2xl max-h-[90vh] overflow-auto relative">
      {/* Close Button */}
      <button
        className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl"
        onClick={() => setShowBookingModal(false)}
      >
        ✖
      </button>

      <h2 className="text-2xl font-bold mb-6 text-center">Book {pkg.name}</h2>

      {/* Success message */}
      {successMessage && (
        <div className="mb-6 p-4 bg-green-100 text-green-800 rounded-lg text-center font-semibold">
          {successMessage}
        </div>
      )}

      <form
        id="bookingForm"
        className="space-y-4"
onSubmit={async (e) => {
  e.preventDefault();
  const form = e.target;
  const data = new FormData(form);

  const validationErrors = validateBookingForm(data);
  setErrors(validationErrors);

  if (Object.keys(validationErrors).length > 0) {
    return; // stop submission if errors exist
  }

  try {
    const response = await fetch("https://formspree.io/f/mnnelljk", {
      method: "POST",
      headers: { Accept: "application/json" },
      body: data,
    });

    if (response.ok) {
      setSuccessMessage("Booking submitted successfully!");
      form.reset();
      setErrors({});

      setTimeout(() => setSuccessMessage(""), 5000);
    } else {
      alert("Failed to submit booking. Try again!");
    }
  } catch (err) {
    console.error(err);
    alert("Error submitting form. Try again!");
  }
}}
     
      >
          {/* Hidden fields — ADD THESE */}
          <input type="hidden" name="packageId" value={pkg.id} />
          <input type="hidden" name="packageName" value={pkg.name} />
        {/* Name and Email */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-700">Full Name*</label>
            <input
              type="text"
              name="name"
              required
              className="w-full border border-gray-300 rounded-lg p-2 mt-1"
            />
            {errors.name && <p className="text-red-600 text-sm">{errors.name}</p>}
          </div>
          <div>
            <label className="block text-gray-700">Email*</label>
            <input
              type="email"
              name="email"
              required
              className="w-full border border-gray-300 rounded-lg p-2 mt-1"
            />
            {errors.email && <p className="text-red-600 text-sm">{errors.email}</p>}
          </div>
        </div>

        {/* Country and Phone */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-700">Country*</label>
            <input
              type="text"
              name="country"
              required
              className="w-full border border-gray-300 rounded-lg p-2 mt-1"
            />
            {errors.phone && <p className="text-red-600 text-sm">{errors.phone}</p>}


          </div>
          <div>
            <label className="block text-gray-700">Phone*</label>
          <input
            type="tel"
            name="phone"
            required
            className="w-full border border-gray-300 rounded-lg p-2 mt-1"
          />
          {errors.phone && (
            <p className="text-red-600 text-sm">{errors.phone}</p>
          )}

          </div>
        </div>

        {/* Adults, Kids, Infants */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-gray-700">No Of Adults</label>
            <input
              type="number"
              name="adults"
              min="1"
              defaultValue="1"
              className="w-full border border-gray-300 rounded-lg p-2 mt-1"
            />
          </div>
          <div>
            <label className="block text-gray-700">No Of Kids (0-11 Years)</label>
            <input
              type="number"
              name="kids"
              min="0"
              defaultValue="0"
              className="w-full border border-gray-300 rounded-lg p-2 mt-1"
            />
          </div>
          <div>
            <label className="block text-gray-700">No Of Infants</label>
            <input
              type="number"
              name="infants"
              min="0"
              defaultValue="0"
              className="w-full border border-gray-300 rounded-lg p-2 mt-1"
            />
          </div>
        </div>

        {/* Hotel Class and Dates */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-gray-700">Hotel Class*</label>
            <select
              name="hotelClass"
              required
              className="w-full border border-gray-300 rounded-lg p-2 mt-1"
            >
              <option value="">Select Hotel Class</option>
              <option value="3">3★</option>
              <option value="4">4★</option>
              <option value="5">5★</option>
            </select>
          </div>
          <div>
            <label className="block text-gray-700">Arrival Date</label>
            <input
              type="date"
              name="arrivalDate"
              className="w-full border border-gray-300 rounded-lg p-2 mt-1"
            />
            {errors.arrivalDate && <p className="text-red-600 text-sm">{errors.arrivalDate}</p>}
          </div>
          <div>
            <label className="block text-gray-700">Departure Date</label>
            <input
              type="date"
              name="departureDate"
              className="w-full border border-gray-300 rounded-lg p-2 mt-1"
            />
            {errors.departureDate && <p className="text-red-600 text-sm">{errors.departureDate}</p>}
          </div>
        </div>

        {/* Message */}
        <div>
          <label className="block text-gray-700">Message</label>
          <textarea
            name="message"
            rows="4"
            className="w-full border border-gray-300 rounded-lg p-2 mt-1"
          ></textarea>
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-green-700 text-white py-3 rounded-full text-lg font-semibold hover:bg-green-800 transition"
        >
          Submit Booking
        </button>
      </form>
    </div>
  </div>
)}



      </div>
    </div>
  );
}

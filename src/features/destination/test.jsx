import { useParams } from 'react-router-dom';
import { packagesdata } from './data/PackageData';
import { MapContainer, TileLayer, Marker, Popup, Polyline } from 'react-leaflet';
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { motion } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';

// Fix default Leaflet marker icon
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

export default function PackageDetail() {
  const { id } = useParams();
  const pkg = packagesdata.find((p) => p.id === parseInt(id));

  if (!pkg) return <div className="p-6 text-center text-red-600">Package not found.</div>;

  const [selectedDay, setSelectedDay] = useState(0);
  const [activeDay, setActiveDay] = useState(pkg.itinerary[0]);
  const mapRef = useRef(null);
  const previewRef = useRef(null);

  // ------------------------------
  // Build itinerary stops with airport first
  // ------------------------------
  const itineraryStops = [];

  if (pkg.airport) {
    itineraryStops.push({
      name: pkg.airport.name,
      position: [pkg.airport.lat, pkg.airport.lng],
      dayIndex: -1,
      isAirport: true,
    });
  }

  pkg.itinerary.forEach((day, dayIndex) => {
    (day.locations ?? []).forEach((loc) => {
      itineraryStops.push({
        name: loc.name,
        position: [loc.lat, loc.lng],
        dayIndex,
        isAirport: false,
      });
    });
  });

  // Fly to first stop of selected day
  useEffect(() => {
    if (!mapRef.current) return;
    const dayStops = itineraryStops.filter(
      (s) => s.dayIndex === selectedDay || s.isAirport
    );
    if (dayStops.length > 0) {
      mapRef.current.flyTo(dayStops[0].position, 10, { duration: 1.2 });
    }
  }, [selectedDay, itineraryStops]);

  return (
    <div className="font-poppins text-gray-900">

      {/* HERO */}
      <section
        className="relative h-[70vh] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${pkg.image})` }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center text-white max-w-3xl px-6"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4">{pkg.name}</h1>
          <p className="text-lg md:text-xl mb-6 opacity-90">{pkg.description}</p>
          <div className="flex flex-wrap justify-center gap-4 mb-6">
            <div className="bg-white/20 px-4 py-2 rounded-lg">Duration: {pkg.duration} days</div>
            <div className="bg-white/20 px-4 py-2 rounded-lg">Stops: {itineraryStops.length}</div>
            <div className="bg-white/20 px-4 py-2 rounded-lg">Difficulty: {pkg.difficulty}</div>
          </div>
          <button className="bg-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-700">
            Book Now
          </button>
        </motion.div>
      </section>

      {/* MAIN LAYOUT */}
      <div className="mx-auto mt-16 lg:flex lg:gap-10 px-4 lg:px-30">

        {/* LEFT COLUMN */}
        <div className="flex-1 lg:flex-[2]">

          {/* SINGLE-DAY ITINERARY */}
          {pkg.itinerary.length === 1 && (
            <section className="py-10">
              <div className="w-full rounded-2xl overflow-hidden shadow-lg mb-6">
                <img
                  src={pkg.itinerary[0].image || pkg.image}
                  alt={pkg.itinerary[0].title}
                  className="w-full h-[400px] object-cover"
                />
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-md">
                <h2 className="text-3xl font-bold text-[#105050] mb-4">
                  {pkg.itinerary[0].title}
                </h2>
                <p className="text-gray-700 leading-relaxed text-lg">
                  {pkg.itinerary[0].description}
                </p>
              </div>
            </section>
          )}

          {/* MULTI-DAY ITINERARY */}
          {pkg.itinerary.length > 1 && (
            <>
              {/* ITINERARY MOBILE */}
              <section className="py-6 bg-white lg:hidden">
                <div className="flex flex-col gap-4">
                  <motion.div
                    ref={previewRef}
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
                    <div className="absolute inset-0 bg-black/40 flex items-end p-4">
                      <h3 className="text-xl font-bold text-white">{activeDay.title}</h3>
                    </div>
                  </motion.div>
                  <div className="flex gap-4 overflow-x-auto pb-2">
                    {pkg.itinerary.map((day, i) => (
                      <motion.div
                        key={i}
                        whileHover={{ scale: 1.02 }}
                        className={`flex-shrink-0 min-w-[140px] p-4 rounded-xl shadow-md cursor-pointer 
                          ${activeDay.title === day.title ? "bg-blue-200 border-l-4 border-[#207070]" : "bg-gray-200"}`}
                        onClick={() => {
                          setActiveDay(day);
                          setSelectedDay(i);
                        }}
                      >
                        <h4 className="font-semibold mb-1 text-sm">Day {i + 1}</h4>
                        <p className="text-xs line-clamp-2">{day.title}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </section>

              {/* ITINERARY DESKTOP */}
              <section className="hidden lg:block py-10">
                <div className="grid lg:grid-cols-[1fr_1fr] gap-10 items-start">
                  <motion.div
                    ref={previewRef}
                    key={activeDay.title}
                    initial={{ opacity: 0, x: -40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="h-[520px] w-full min-w-0 rounded-2xl overflow-hidden shadow-lg sticky top-24"
                  >
                    <img
                      src={activeDay.image || pkg.image}
                      alt={activeDay.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40 flex items=end p-6">
                      <h3 className="text-3xl font-bold text-white mb-3">{activeDay.title}</h3>
                    </div>
                  </motion.div>
                  <div className="flex flex-col gap-6 max-h-[500px] overflow-y-auto pr-2">
                    {pkg.itinerary.map((day, i) => (
                      <motion.div
                        key={i}
                        whileHover={{ scale: 1.02 }}
                        className={`p-5 rounded-xl shadow-md cursor-pointer transition bg-[#F0F0F0] hover:bg-[#D0F0F0] border-l-4 ${
                          activeDay.title === day.title ? "border-[#207070]" : "border-transparent"
                        }`}
                        onClick={() => {
                          setActiveDay(day);
                          setSelectedDay(i);
                        }}
                      >
                        <h3 className="text-xl font-semibold text-[#105050] mb-1">
                          {day.title}
                        </h3>
                        <p className="text-gray-700 text-sm line-clamp-1 mb-8">
                          {day.description}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </section>
            </>
          )}

          {/* MAP */}
          <section className="pb-20 relative">
            <div className="h-[450px] rounded-2xl overflow-hidden shadow-lg mb-12 relative">
              <MapContainer
                center={itineraryStops[0].position}
                zoom={7}
                scrollWheelZoom={false}
                className="w-full h-full"
                whenCreated={(map) => (mapRef.current = map)}
              >
                <TileLayer
                  url="https://api.maptiler.com/maps/streets-v2/{z}/{x}/{y}.png?key=VTRqXeXKkUHO8a30Pcn0"
                  attribution='&copy; MapTiler & OSM'
                />

                {/* Polyline */}
                <Polyline
                  positions={
                    pkg.itinerary.length > 1
                      ? itineraryStops.filter((s) => s.dayIndex <= selectedDay || s.isAirport).map(s => s.position)
                      : itineraryStops.map(s => s.position)
                  }
                  weight={6}
                  color="#1E90FF"
                />

                {/* Full route in gray */}
                {pkg.itinerary.length > 1 && (
                  <Polyline
                    positions={itineraryStops.map(s => s.position)}
                    weight={2}
                    color="#c0c0c0"
                    dashArray="6"
                  />
                )}

                {/* MARKERS */}
                {pkg.itinerary.length > 1
                  ? itineraryStops.map((stop, idx) => {
                      const isActive = stop.dayIndex === selectedDay || stop.isAirport;
                      return (
                        <Marker
                          key={`stop-${idx}`}
                          position={stop.position}
                          icon={L.divIcon({
                            html: `<div style="
                              width: 32px;
                              height: 32px;
                              border-radius: 50%;
                              background: ${isActive ? "#1E90FF" : "#105050"};
                              display: flex;
                              align-items: center;
                              justify-content: center;
                              color: white;
                              font-weight: bold;
                              font-size: 14px;
                              animation: ${isActive ? "pulse 1.2s infinite" : "none"};
                            ">${idx + 1}</div>`,
                            iconSize: [32, 32],
                            iconAnchor: [16, 16],
                          })}
                        >
                          <Popup>{stop.name}</Popup>
                        </Marker>
                      );
                    })
                  : // Single-day package: markers without numbers
                    itineraryStops.map((stop, idx) => (
                      <Marker
                        key={`stop-${idx}`}
                        position={stop.position}
                        icon={L.divIcon({
                          html: `<div style="
                            width: 24px;
                            height: 24px;
                            border-radius: 50%;
                            background: #105050;
                          "></div>`,
                          iconSize: [24, 24],
                          iconAnchor: [12, 12],
                        })}
                      >
                        <Popup>{stop.name}</Popup>
                      </Marker>
                    ))
                }

              </MapContainer>

              <style>{`
                @keyframes pulse {
                  0% { transform: scale(1); opacity: 1; }
                  50% { transform: scale(1.25); opacity: 0.7; }
                  100% { transform: scale(1); opacity: 1; }
                }
              `}</style>
            </div>
          </section>

        </div>

        {/* RIGHT COLUMN - SIDEBAR */}
        <div className="hidden lg:block w-[280px]">
          <div className="sticky top-24 self-start">
            <div className="bg-white shadow-xl rounded-2xl p-6 border border-gray-200">
              <div className="mb-6">
                <span className="text-3xl font-bold text-gray-900">${pkg.price}</span>
                <span className="text-gray-500 ml-1">per person</span>
              </div>
              <div className="flex items-center text-gray-600 text-sm mb-6">
                <span className="text-yellow-500 text-lg mr-1">★</span>
                <span>4.9/5 (127 reviews)</span>
              </div>
              <div className="space-y-4 text-gray-700 text-[15px] pb-4 border-b">
                <div className="flex justify-between">
                  <span className="text-gray-500">Duration</span>
                  <span className="font-medium">{pkg.duration} Days</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Group Size</span>
                  <span className="font-medium">Max 12 people</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Availability</span>
                  <span className="text-green-600 font-medium">Year-round</span>
                </div>
              </div>
              <button className="w-full bg-green-700 text-white py-3 rounded-full text-lg font-semibold mt-6 hover:bg-green-800 transition">
                Book This Package
              </button>
              <button className="w-full border border-gray-400 text-gray-700 py-3 rounded-full text-lg font-medium mt-3 hover:bg-gray-100 transition flex items-center justify-center gap-2">
                <span>💬</span> Ask a Question
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

      </div>
    </div>
  );
}

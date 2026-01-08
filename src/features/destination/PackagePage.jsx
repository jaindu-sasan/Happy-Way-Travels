// PackagePage.jsx
import React, { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { packagesdata } from './data/PackageData'; 
import PackageContent, { createSlug } from "./components/PackageContent";

import {
  MapPin,
  Clock,
  Tag,
  Star,
  Search,
  ChevronDown,
  ChevronUp,
  Filter,
} from "lucide-react";


export const metadata = {
  title: "Sri Lanka Tour Packages",
  description: "Discover the best Sri Lanka tour packages",
};
/**
 * NOTE: heroImageUrl uses the local path you uploaded.
 * The system/dev environment will transform this path into a usable asset URL.
 */

/* -------------------------
   Sample package data
   If you have ./data/PackageData, replace this array with import.
   ------------------------- */


/* -------------------------
   Helper: unique values for filters
   ------------------------- */
const uniq = (arr) => Array.from(new Set(arr));

/* -------------------------
   Small utility: price format
   ------------------------- */
const formatPrice = (n) =>
  n.toLocaleString(undefined, { minimumFractionDigits: 0 });

/* -------------------------
   Package Card component
   ------------------------- */
function PackageCard({ pkg, onView }) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.02 }}
      className="bg-white rounded-2xl shadow-md overflow-hidden flex flex-col"
      aria-labelledby={`pkg-${pkg.id}-title`}
    >
      <div className="relative h-52 md:h-44 lg:h-48">
        <img
          src={pkg.image}
          alt={pkg.name}
          className="w-full h-full object-cover"
          loading="lazy"
        />
        {pkg.badge && (
          <span className="absolute top-3 left-3 bg-amber-400/95 text-sm font-semibold text-amber-900 px-3 py-1 rounded-full shadow">
            {pkg.badge}
          </span>
        )}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 to-transparent p-3">
          <div className="text-white text-sm flex items-center gap-2">
             <span>{pkg.region}</span>
            
            <span>{pkg.type}</span>
          </div>
        </div>
      </div>

      <div className="p-4 flex-1 flex flex-col justify-between">
        <div>
          <h3
            id={`pkg-${pkg.id}-title`}
            className="text-lg font-semibold text-slate-800"
          >
            {pkg.name}
          </h3>
          <p className="text-sm text-slate-500 mt-1">{pkg.description}</p>

          <div className="mt-3 grid grid-cols-2 gap-2 text-sm text-slate-600">
            <div className="flex items-center gap-2">
              <Clock size={16} /> <span>{pkg.duration}</span>
            </div>
            <div className="flex items-center gap-2">
              <Tag size={16} /> <span>From LKR {formatPrice(pkg.price)}</span>
            </div>
          </div>

          <div className="mt-3 text-xs text-slate-500">
            <strong>Includes:</strong> {pkg.includes.join(", ")}
          </div>
        </div>

        <div className="mt-4 flex items-center justify-between gap-3 self-center">
         
          <button
            onClick={() => onView(pkg.id)}
            className="ml-auto bg-emerald-600 text-white px-4 py-2 rounded-full text-sm hover:bg-emerald-700 transition"
            aria-label={`View details for ${pkg.name}`}
          >
            View Details →
          </button>
        </div>
      </div>
    </motion.article>
  );
}


/* -------------------------
   Main PackagePage component
   ------------------------- */
export default function PackagePage({ packages = packagesdata }) {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("popular");
  const [filters, setFilters] = useState({
    region: "",
    type: "",
    price: [0, 9999999],
  });

  const regions = useMemo(() => uniq(packages.map((p) => p.region)), [packages]);
  const types = useMemo(() => uniq(packages.map((p) => p.type)), [packages]);

 /* Filter + sort pipeline */
  const visible = useMemo(() => {
    let data = packages.slice();
 
    if (filters.region) {
      data = data.filter((p) => p.region === filters.region);
    }
    if (filters.type) {
      data = data.filter((p) => p.type === filters.type);
    }
    if (filters.price) {
      const [min, max] = filters.price;
      data = data.filter((p) => p.price >= min && p.price <= max);
    }
    if (search.trim()) {
      const q = search.toLowerCase();
      data = data.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q) ||
          p.region.toLowerCase().includes(q)
      );
    }

    switch (sort) {
      case "priceAsc":
        data.sort((a, b) => a.price - b.price);
        break;
      case "priceDesc":
        data.sort((a, b) => b.price - a.price);
        break;
      case "duration":
        // naive: sort by numeric part of duration
        data.sort((a, b) => {
          const aNum = parseInt(a.duration, 10) || 0;
          const bNum = parseInt(b.duration, 10) || 0;
          return aNum - bNum;
        });
        break;
      case "popular":
      default:
        data.sort((a, b) => (b.rating || 0) - (a.rating || 0));
        break;
    }

    return data;
  }, [packages, filters, sort, search]);

function goToDetails(pkgId) {
  const pkg = packages.find((p) => p.id === pkgId);
  if (!pkg) return;

  const slug = createSlug(pkg.name); // ← createSlug not defined here
  navigate(`/packages/${slug}`);
}


  return (
    <div className="min-h-screen bg-slate-50">
      {/* HERO */}
<header className="relative w-full min-h-[60vh] md:h-[70vh]">
  {/* Background Image */}
  <img
    src="assets/Package page/banner.jpg"
    alt="Sri Lanka hero"
    className="absolute inset-0 w-full h-full object-cover"
  />

  {/* Overlay */}
  <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/20"></div>

  {/* CONTENT */}
  <div
    className="
      relative z-10
      max-w-7xl mx-auto
      px-4 sm:px-6
      pt-24 pb-12
      text-center
      md:flex md:flex-col md:items-center md:justify-center
      md:min-h-[70vh]
    "
  >
    <motion.h1
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-extrabold text-white drop-shadow-md leading-tight"
    >
      Discover Sri Lanka&apos;s Best Tour Packages
    </motion.h1>

    <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2 }}
      className="mt-4 text-sm sm:text-base md:text-lg text-white/90 max-w-2xl mx-auto"
    >
      Handpicked itineraries across beaches, hill country, wildlife & culture.
      Choose a package or customize your perfect trip.
    </motion.p>

    {/* Buttons */}
    <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
      <button
        onClick={() =>
          document
            .getElementById("packages-section")
            ?.scrollIntoView({ behavior: "smooth" })
        }
        className="bg-emerald-600 text-white px-6 py-2.5 rounded-full font-medium hover:bg-emerald-700 transition"
      >
        Explore Packages
      </button>

      <button
        onClick={() => navigate("/contact")}
        className="bg-white/90 text-slate-800 px-6 py-2.5 rounded-full font-medium hover:shadow-lg transition"
      >
        Customize Your Trip
      </button>
    </div>

    {/* Desktop-only features */}
    <div className="mt-8 hidden md:flex items-center justify-center gap-8 text-white/80">
      <div className="flex items-center gap-2">
        <MapPin size={18} /> <span className="text-sm">Region-focused trips</span>
      </div>
      <div className="flex items-center gap-2">
        <Clock size={18} /> <span className="text-sm">Flexible durations</span>
      </div>
      <div className="flex items-center gap-2">
        <Tag size={18} /> <span className="text-sm">Tailored inclusions</span>
      </div>
    </div>
  </div>
</header>



      {/* PACKAGES GRID */}
      <main id="packages-section" className="max-w-7xl mx-auto px-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {visible.length > 0 ? (
            visible.map((pkg) => <PackageCard key={pkg.id} pkg={pkg} onView={goToDetails} />)
          ) : (
            <div className="col-span-full p-8 bg-white rounded-2xl shadow text-center">
              <h3 className="text-lg font-semibold">No packages found</h3>
              <p className="text-sm text-slate-500 mt-2">Try adjusting filters or search terms.</p>
            </div>
          )}
        </div>
      </main>

      {/* CUSTOMIZE TRIP CTA */}
      <section className="max-w-7xl mx-auto px-6 py-10">
        <div className="bg-gradient-to-r from-emerald-600 to-sky-500 text-white rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-bold">Want a tailor-made itinerary?</h3>
            <p className="mt-2 text-sm opacity-90">We’ll craft a travel plan that fits your interests, budget and schedule.</p>
          </div>
          <div className="flex gap-3">
            <button
              onClick={() => navigate("/contact")}
              className="bg-white text-emerald-700 px-5 py-3 rounded-full font-medium hover:opacity-95 transition"
            >
              Start customizing
            </button>

          </div>
        </div>
      </section>

    


    </div>
  );
}

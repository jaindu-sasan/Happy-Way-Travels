import { Link, NavLink } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500
        ${
          scrolled
            ? "bg-white/30 backdrop-blur-lg shadow-sm"
            : "bg-transparent"
        }
      `}
    >
      <div className="relative max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* ---------------- MOBILE HAMBURGER ---------------- */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`
            md:hidden w-16 h-16 flex flex-col justify-center items-center gap-[0.3rem] 
            !bg-transparent hover:!bg-transparent focus:!bg-transparent active:!bg-transparent
            transition-transform duration-150 ease-out
            active:scale-110 
          `}
        >
          <span
            className={`block w-9 h-1 rounded-full ${
              scrolled
                ? "bg-slate-700"
                : "bg-white drop-shadow-[0_0_6px_rgba(0,0,0,0.8)]"
            }`}
          ></span>
          <span
            className={`block w-9 h-1 rounded-full ${
              scrolled
                ? "bg-slate-700"
                : "bg-white drop-shadow-[0_0_6px_rgba(0,0,0,0.8)]"
            }`}
          ></span>
          <span
            className={`block w-9 h-1 rounded-full ${
              scrolled
                ? "bg-slate-700"
                : "bg-white drop-shadow-[0_0_6px_rgba(0,0,0,0.8)]"
            }`}
          ></span>
        </button>

        {/* ---------------- LOGO ---------------- */}
        <Link to="/" className="ml-auto md:ml-0 flex items-center">
          <img
            src="/assets/logo.png"
            alt="Visit Sri Lanka"
            className={`h-16 w-auto transition-all duration-300
              ${
                scrolled
                  ? "brightness-100"
                  : "brightness-110 drop-shadow-[0_0_6px_rgba(0,0,0,0.6)]"
              }
            `}
          />
        </Link>

{/* ---------------- MOBILE DROPDOWN MENU ---------------- */}
{isOpen && (
  <>
    {/* OVERLAY (click anywhere to close) */}
    <div
      className="fixed inset-0 z-40 md:hidden"
      onClick={() => setIsOpen(false)}
    ></div>

    {/* MENU */}
    <div className="absolute top-full left-6 mt-3 w-56 bg-white rounded-xl shadow-xl z-50 md:hidden p-2">
      <ul className="text-slate-700 font-medium">
        {/* Other menu items */}
        {[
          ["/", "Home"],
          ["/sri-lanka-tour-packages", "Tour Packages"],
          ["/free-sri-lanka-itinerary", "Free Itinerary"],
          ["/blog", "Blog"],
          ["/about", "About"],
          ["/contact", "Contact"],
        ].map(([to, label]) => (
          <li key={to}>
            <NavLink
              to={to}
              onClick={() => setIsOpen(false)}
              className="block px-5 py-3 hover:bg-slate-100 transition mb-1"
            >
              {label}
            </NavLink>
          </li>
        ))}

        {/* Customize Trip Button */}
        <li>
          <Link
            to="/contact"
            onClick={() => setIsOpen(false)}
            className={`block text-center mx-3 my-2 px-4 py-2 rounded-full font-medium transition
              ${
                scrolled
                  ? "bg-emerald-600 text-white hover:bg-emerald-700"
                  : "bg-emerald-800/80 text-white hover:bg-emerald-600"
              }
            `}
          >
            Customize Trip
          </Link>
        </li>
      </ul>
    </div>
  </>
)}



        {/* ---------------- DESKTOP NAV ---------------- */}
        <ul className="hidden md:flex gap-8 font-medium items-center">

          {[
            ["/", "Home"],
            ["/sri-lanka-tour-packages", "Tour Packages"],
            ["/free-sri-lanka-itinerary", "Free Itinerary"],
            ["/blog", "Blog"],
            ["/about", "About"],
            ["/contact", "Contact"],
          ].map(([to, label]) => (
            <li key={to}>
              <NavLink
                to={to}
                className={({ isActive }) =>
                  `
                  ${
                    isActive
                      ? scrolled
                        ? "text-emerald-600 font-semibold"
                        : "text-emerald-600 font-semibold drop-shadow-[0_0_4px_rgba(0,0,0,0.7)]"
                      : scrolled
                      ? "text-slate-800 hover:text-emerald-600"
                      : "text-white hover:text-emerald-300 drop-shadow-[0_0_4px_rgba(0,0,0,0.7)]"
                  }
                  transition-colors duration-200
                  `
                }
              >
                {label}
              </NavLink>
            </li>
          ))}

          {/* ---------------- DESKTOP CTA ---------------- */}
          <Link
            to="/contact"
            className={`ml-2 px-5 py-2 rounded-full font-medium transition
              ${
                scrolled
                  ? "bg-emerald-600 text-white hover:bg-emerald-700"
                  : "bg-emerald-800/80 text-white hover:bg-emerald-600"
              }
            `}
          >
            Customize Trip
          </Link>
          
        </ul>
      </div>
    </nav>
  );
}

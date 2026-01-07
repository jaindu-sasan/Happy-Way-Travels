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
            className={`h-10 w-auto transition-all duration-300
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
          <div className="absolute top-full left-6 mt-3 w-56 bg-white rounded-xl shadow-xl md:hidden">
            <ul className="text-slate-700 font-medium">
              {[
                ["/", "Home"],
                ["/t20-world-cup", "🏏 T20 World Cup"], // ✅ ADDED
                ["/destinations", "Packages"],
                ["/blog", "Blog"],
                ["/about", "About"],
                ["/contact", "Contact"],
              ].map(([to, label]) => (
                <li key={to}>
                  <NavLink
                    to={to}
                    onClick={() => setIsOpen(false)}
                    className="block px-5 py-3 hover:bg-slate-100 transition"
                  >
                    {label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* ---------------- DESKTOP NAV ---------------- */}
        <ul className="hidden md:flex gap-8 font-medium items-center">

          {/* ✅ T20 WORLD CUP FEATURE LINK */}
          <li>
            <NavLink
              to="/t20-world-cup"
              className={({ isActive }) =>
                `
                px-4 py-2 rounded-full font-semibold transition-all
                ${
                  isActive
                    ? "bg-yellow-400 text-black"
                    : scrolled
                    ? "bg-yellow-300/90 text-black hover:bg-yellow-400"
                    : "bg-yellow-400/90 text-black hover:bg-yellow-300"
                }
                `
              }
            >
              🏏 T20 World Cup
            </NavLink>
          </li>

          {[
            ["/", "Home"],
            ["/destinations", "Packages"],
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

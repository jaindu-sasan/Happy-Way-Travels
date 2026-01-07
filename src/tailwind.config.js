/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Neutrals
        black: "#010100",      // Deep black
        darkGray: "#101010",   // Dark gray for text
        midGray: "#D0D0D0",    // Light mid-gray
        lightGray: "#E0E0E0",  // Background or borders
        offWhite: "#F0F0F0",   // Page background
        
        // Brand / Primary Colors
        primary: "#105050",    // Primary teal
        secondary: "#206070",  // Secondary blue-teal
        accent: "#207070",     // Accent for buttons/highlights
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
        heading: ["Pacifico", "cursive"],
      },
      boxShadow: {
        soft: "0 4px 10px rgba(0,0,0,0.08)",
        card: "0 6px 20px rgba(0,0,0,0.1)",
      },
    },
  },
  plugins: [],
}

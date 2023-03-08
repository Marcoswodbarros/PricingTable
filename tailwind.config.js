/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors: {
        newBlue: '#1d539e',
        newGray: '#828799',
        newYellow: '#ffcc29',
        pageBackground: '#f9fbfc',
      },

      fontFamily: {
        openSans: 'Open',
      },

      height: {
        "half": "50vh",
      },

      screens: {
        'tablet': '640px',
        // => @media (min-width: 640px) { ... }
  
        'laptop': '1024px',
        // => @media (min-width: 1024px) { ... }
  
        'desktop': '1280px',
        // => @media (min-width: 1280px) { ... }
      },
    },
  },
  plugins: [],
}

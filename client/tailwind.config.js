/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.jsx",
    
  ],
  theme: {
    extend: {
      boxShadow: {
        'sharp': '20px -20px 2px 1px rgba(147, 98, 5, 0.87)',
      },
      fontFamily: {
        'major-mono': ["Major Mono Display", 'monospace'],
      }
    },

  },
  plugins: [],
}


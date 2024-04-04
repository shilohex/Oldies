/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        pry: "#ffa101",
        sec: "#b3dee5",
        sec2: "#31525B",
      },
    },
  },
  plugins: [],
};

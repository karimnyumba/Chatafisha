/** @type {import('tailwindcss').Config} */
export default {
  content: ["./indexedDB.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        btnGrey: "#d9d9d9",
      },
      boxShadow: {
        btnShadowGrey: "0px 4px 2px rgba(0, 0, 0, 0.1)",
      },
      backgroundImage: {
        tembo: "url(./assets/tembo.png)",
        baki: "url('./assets/shutterstock_15255660171.jpg')",
      },
    },
  },
  plugins: [],
};

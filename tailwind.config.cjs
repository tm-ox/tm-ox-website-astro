/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    colors: {
      primary: "#69e228",
      secondary: "#30405F",
      tertiary: "#1ba6fa",
      background: "#1e293b",
      hover: "#47A216",
    },
    extend: {
      fontFamily: {
        jakarta: ["Plus Jakarta Sans", "sans-serif"],
      },
      animation: {
        "pulse-slow": "pulse 8s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "bounce-slow": "bounce 2s infinite",
      },
    },
    transition: {
      trans: "all 0.5s ease-in-out",
    },
  },
  plugins: [require("@tailwindcss/forms")],
};

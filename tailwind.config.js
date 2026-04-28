/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Space Grotesk"', "sans-serif"],
        sans: ['"Manrope"', "sans-serif"],
      },
      colors: {
        ink: "rgb(var(--color-ink) / <alpha-value>)",
        muted: "rgb(var(--color-muted) / <alpha-value>)",
        canvas: "rgb(var(--color-canvas) / <alpha-value>)",
        surface: "rgb(var(--color-surface) / <alpha-value>)",
        border: "rgb(var(--color-border) / <alpha-value>)",
        berry: "rgb(var(--color-berry) / <alpha-value>)",
        clay: "rgb(var(--color-clay) / <alpha-value>)",
        gold: "rgb(var(--color-gold) / <alpha-value>)",
        teal: "rgb(var(--color-teal) / <alpha-value>)",
        jade: "rgb(var(--color-jade) / <alpha-value>)",
        night: "rgb(var(--color-night) / <alpha-value>)",
      },
    },
  },
  plugins: [],
};

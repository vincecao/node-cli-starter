import type { Config } from "tailwindcss";

/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{ts,tsx}", "./index.html"],
  theme: {
    extend: {
      fontFamily: {
        // check examples for font imports in /src/tailwind.css
        home: ["gaultier"],
      },
      zIndex: {
        header: "999",
        hamberger: "1000",
        footer: "998",
      },
      spacing: {
        navigation: "60px"
      }
    },
  },
  plugins: [],
} satisfies Config;
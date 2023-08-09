import type { Config } from "tailwindcss";

/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{ts,tsx}", "./index.html"],
  theme: {
    extend: {
      fontFamily: {
        gaultier: ["gaultier"],
        gothamHtf: ["gotham-htf"],
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
import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          900: "#070C18",
          800: "#0B1226",
          700: "#101B39",
        },
        gold: {
          600: "#C7A24B",
          500: "#D8B563",
          400: "#E7CF8A",
        },
      },
      boxShadow: {
        soft: "0 12px 36px rgba(2, 6, 23, 0.10)",
      },
      borderRadius: {
        xl2: "1.25rem",
      },
    },
  },
  plugins: [],
};
export default config;

import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}", "./app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["Vazirmatn", "ui-sans-serif", "system-ui"],
        body: ["Vazirmatn", "ui-sans-serif", "system-ui"]
      },
      colors: {
        primary: {
          50: "#f3f6ff",
          100: "#e1e8ff",
          200: "#c1d0ff",
          300: "#93b0ff",
          400: "#5f86ff",
          500: "#325bff",
          600: "#1e3df0",
          700: "#132cc6",
          800: "#12259b",
          900: "#101f7c"
        }
      }
    }
  },
  plugins: []
};

export default config;

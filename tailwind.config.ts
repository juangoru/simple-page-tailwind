import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      textShadow: {
        blue: "0 0 10px #00f, 0 0 15px #00f, 0 0 20px #00f, 0 0 25px #00f, 0 0 30px #00f",
      },
      boxShadow: {
        purple: "0 10px 20px 0 rgba(128, 0, 128, 1)",
      },
      colors: {
        "dark-background": "#1a202c",
        "dark-primary": "#2d3748",
        "dark-secondary": "#4a5568",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      animation: {
        neon: "neon 1.5s ease-in-out infinite",
      },
      keyframes: {
        neon: {
          "0%, 22%, 100%": {
            textShadow:
              "0 0 10px #00f, 0 0 20px #00f, 0 0 30px #00f, 0 0 40px #00f, 0 0 50px #00f, 0 0 60px #00f",
          },
          "28%": {
            textShadow: "none",
          },
        },
      },
    },
  },
  darkMode: "class", // This enables dark mode
  plugins: [],
};

export default config;

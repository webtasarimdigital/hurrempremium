import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#bd0f49",
          dark: "#900b38",
          light: "#fce9ef",
          soft: "#fdf2f5",
        },
        brand: {
          dark: "#1b0d12",
          "dark-card": "#26131a",
          primary: "#bd0f49",
          "primary-light": "#ff5287",
          cream: "#fcf8f9",
          "cream-light": "#ffffff",
          text: "#1b0d12",
          "text-secondary": "#7a505e",
          border: "#f0dbe2",
        },
      },
      fontFamily: {
        sans: ["var(--font-manrope)", "system-ui", "sans-serif"],
        display: ["var(--font-manrope)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        container: "1280px",
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.25rem",
      },
    },
  },
  plugins: [],
};

export default config;

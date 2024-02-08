import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/constants/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: "#007AFF",
        "primary-hover":"#0066EB",
        "primary-dark": "#0a84ffff",
        dark: "#000000ff",
        light: "#ffffffff",
        "dark-1": "#242424ff",
        "dark-2": "#333333ff",
        "dark-3": "#434346ff",
        "light-1":"#f7f7f7ff",
        "light-2":"#f4f4f4ff",
        "light-3":"#e8e8e8ff",
        "gray-1":"#222222ff",
        "gray-2": "#999999ff",
        "gray-3": "#c8c8c8ff",
      }
    },
  },
  plugins: [],
};
export default config;

import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        background: {
          topbar: "rgb(60, 60, 60)",
          sidebar: "rgb(51, 51, 51)",
          footer: "rgb(49, 118, 185)",
          explorer: "rgb(37, 37, 38)",
          main: "rgb(30, 30, 30)",
          "explorer-accent": "rgb(56, 56, 56)",
          searchbar: "rgb(75, 75, 75)",
          buttons: "rgb(79, 79, 80)",
        },
        hover: {
          footer: "rgb(69, 123, 184)",
          sidebar: "rgb(43, 45, 46)",
        },
        active: {
          sidebar: "rgb(55, 55, 60)",
        },
        inactive: {
          tab: "rgb(45, 45, 45)",
        },
        border: {
          footer: "rgb(83, 131, 186)",
          sidebar: "rgb(92, 92, 92)",
          searchbar: "rgb(95, 95, 95)",
        },
        text: {
          inactive: "rgb(130, 130, 130)",
          sidebar: "rgb(202, 202, 202)",
          green: "rgb(124, 179, 136)",
          searchbar: "rgb(146, 146, 146)",
        },
      },
    },
  },
  plugins: [],
};
export default config;

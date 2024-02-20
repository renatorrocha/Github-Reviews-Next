import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "text-light": "#F6F6F6",
        "text-dark": "#1E1E1E",
        "text-medium": "#5A5A5A",
        "icons-purple": "#8B5CF6",
        "line-color": "#BFBFBF",
        "page-background": "#F6F6F6",
        "button-background": "#1E1E1E",
      },
    },
  },
  plugins: [],
};
export default config;

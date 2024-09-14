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
      fontFamily: {
        'p22-bifur': ['P22 Bifur A Regular', 'sans-serif'],
        'p22-constructivist': ['P22 Constructivist Block Regular', 'sans-serif'],
        'proxima-regular': ['Proxima-Nova-Extra-Condensed', 'sans-serif'],
        'proxima-bold': ['Proxima-Nova-Extra-Condensed-Bold', 'sans-serif'],
      }
    },
  },
  plugins: [],
};
export default config;

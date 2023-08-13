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
        "kakao-color": "#FCE601",
        "naver-color": "#07BF35",
        "apple-color": "#000000",
      },
    },
  },
  plugins: [],
};
export default config;

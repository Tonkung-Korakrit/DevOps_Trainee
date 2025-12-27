// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./**/*.{js,ts,jsx,tsx,mdx}", // กันพลาดครอบทุกที่
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['var(--font-inter)'],
        space: ['var(--font-space)'],
        geist: ['var(--font-geist-sans)'],
        geistMono: ['var(--font-geist-mono)'],
      },
    },
  },
  plugins: [],
};

export default config;

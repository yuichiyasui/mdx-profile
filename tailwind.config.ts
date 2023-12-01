import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./mdx-components.tsx",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        print: { raw: "print" },
      },
    },
  },
  plugins: [],
};
export default config;

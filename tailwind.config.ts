import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--ibm-plex-sans-thai-looped-font)", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;

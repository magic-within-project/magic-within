import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    fontFamily: {
      ibmPlex: ["var(--ibm-plex-sans-thai-looped-font)", "sans-serif"],
      charmonman: ["var(--charmonman-font)", "serif"],
    },
    extend: {
      colors: {
        default: "#272018",
        active: "#B78181",
        disable: "#CBD5E1",
        purple: "#512C4D",
      },
    },
  },
  plugins: [],
} satisfies Config;

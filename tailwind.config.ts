import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    fontFamily: {
      ibmPlex: ["var(--ibm-plex-sans-thai-looped-font)", "sans-serif"],
      charmonman: ["var(--charmonman-font)", "serif"],
      plaphao: ["var(--plaphao-font)", "sans-serif"],
    },
    extend: {
      colors: {
        default: "#272018",
        active: "#B78181",
        disable: "#CBD5E1",
        purple2: "#512C4D",
        purple3: "#5D5E96",
        purple: "#341F42",
        mwWhite: "#F8F8F7",
        yellow: "#FFBA5A",
        yellow2: "#403A20",
      },
    },
  },
  plugins: [],
} satisfies Config;

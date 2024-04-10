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
        purple: "#512C4D",
        darkPurple: "#341F42",
        brown :"#74564A",
      },
    },
  },
  plugins: [],
} satisfies Config;

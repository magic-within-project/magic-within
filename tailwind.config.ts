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
        lightYellow: "#FFFDC9",
        darkPurple: "#341F42",
        brown: "#74564A",
        "mw-white": "#F8F8F7",
      },
      backgroundImage: {
        "white-radial":
          "radial-gradient(51% 42.5% at 50% 50%, #FFFFFF 0%, rgba(255, 255, 255, 0.78) 36.4%, rgba(255, 255, 255, 0.84) 59.9%, rgba(255, 255, 255, 0.56) 76.9%, rgba(255, 255, 255, 0) 100%)",
        "0-0": "url('/bg/0-0.webp')",
        "img-white-radial": "url('/img/white-radial.webp')",
        "magic-stick": "url('/img/magic-stick.png')",
        perfect: "url('/img/perfect.webp')",
      },
    },
  },
  plugins: [],
} satisfies Config;

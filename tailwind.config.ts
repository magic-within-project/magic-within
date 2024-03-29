import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--ibm-plex-sans-thai-looped-font)", "sans-serif"],
      },
      colors: {
        default: "#272018",
        active: "#B78181",
        disable: "#CBD5E1",
        purple: "#512C4D",
      },
      backgroundImage: {
        'reframe': "url('/bg_reframe.png')",
      }
    },
  },
  plugins: [],
} satisfies Config;

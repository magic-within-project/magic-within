import "~/styles/globals.css";

import { Charmonman, IBM_Plex_Sans_Thai_Looped } from "next/font/google";
import { cn } from "../lib/utils";
import localFont from "next/font/local";
import Sounds from "~/components/sounds";
import SoundToggle from "~/components/sound-toggle";

const ibmPlexSansThaiLooped = IBM_Plex_Sans_Thai_Looped({
  weight: ["400", "500", "600", "700"],
  subsets: ["thai"],
  variable: "--ibm-plex-sans-thai-looped-font",
});

const charmonman = Charmonman({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--charmonman-font",
});

const plaphao = localFont({
  src: [
    { path: "../../public/fonts/Plaphao.ttf", weight: "400", style: "normal" },
    {
      path: "../../public/fonts/PlaphaoBold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/PlaphaoThin.ttf",
      weight: "100",
      style: "normal",
    },
  ],
  variable: "--plaphao-font",
});

export const metadata = {
  title: "Magic Within",
  description: "Magic Within Project ",
  icons: [{ rel: "icon", url: "/logo.webp" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="th">
      <body
        className={cn(
          "relative mx-auto min-h-screen w-full max-w-md overscroll-none font-ibmPlex",
          ibmPlexSansThaiLooped.variable,
          charmonman.variable,
          plaphao.variable,
        )}
      >
        <Sounds />
        <div className="absolute right-5 top-10 z-50 flex w-full items-center justify-end">
          <SoundToggle />
        </div>
        {children}
      </body>
    </html>
  );
}

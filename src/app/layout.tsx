import "~/styles/globals.css";

import { Charmonman, IBM_Plex_Sans_Thai_Looped } from "next/font/google";
import { cn } from "../lib/utils";

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

export const metadata = {
  title: "Magic Within",
  description: "Magic Within Project ",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
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
          "font-ibmPlex relative mx-auto min-h-screen w-full max-w-md overscroll-none",
          ibmPlexSansThaiLooped.variable,
          charmonman.variable,
        )}
      >
        {children}
      </body>
    </html>
  );
}

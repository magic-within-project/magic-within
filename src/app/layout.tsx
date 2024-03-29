import "~/styles/globals.css";

import { IBM_Plex_Sans_Thai_Looped } from "next/font/google";
import { cn } from "../lib/utils";

const ibmPlexSansThaiLooped = IBM_Plex_Sans_Thai_Looped({
  weight: ["400", "500", "600", "700"],
  subsets: ["thai", "latin"],
  variable: "--ibm-plex-sans-thai-looped-font",
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
          "relative mx-auto min-h-screen w-full max-w-md overscroll-none font-sans",
          ibmPlexSansThaiLooped.variable,
        )}
      >
        {children}
      </body>
    </html>
  );
}
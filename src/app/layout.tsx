import "~/styles/globals.css";

import { IBM_Plex_Sans_Thai_Looped } from "next/font/google";
import { cn } from "./lib/utils";

const ibmPlexSansThaiLooped = IBM_Plex_Sans_Thai_Looped({
  weight: ["400", "500", "600", "700"],
  subsets: ["thai", "latin"],
  variable: "--ibm-plex-sans-thai-looped-font",
});

export const metadata = {
  title: "Create T3 App",
  description: "Generated by create-t3-app",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="th">
      <body className={cn("font-sans", ibmPlexSansThaiLooped.variable)}>
        {children}
      </body>
    </html>
  );
}

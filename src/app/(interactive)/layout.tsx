import InteractiveBackground from "~/components/interactive-background";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <InteractiveBackground />
      {children}
    </>
  );
}

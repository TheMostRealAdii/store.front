import "./globals.css";

export const metadata = {
  title: "RustyRags",
  description:
    "Discover the charm of RustyRags, your ultimate destination for vintage and retro-inspired apparel. Embrace nostalgia with our exquisite collection of print-on-demand dropshipped clothing. Get ready to transport yourself to a bygone era as we bring timeless designs to life. Stay tuned for our upcoming launch and embark on a journey through fashion history with RustyRags.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

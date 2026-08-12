import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://mtrade-msme.sites.openai.com"),
  title: "M’Trade — Trade. Finance. Grow.",
  description: "A trusted digital trade and finance workspace for MSMEs on M’World.",
  openGraph: {
    title: "M’Trade — Trade. Finance. Grow.",
    description: "The MSME trade workspace powered by M’World.",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "M’Trade — Trade. Finance. Grow." }],
  },
  twitter: { card: "summary_large_image", images: ["/og.png"] },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

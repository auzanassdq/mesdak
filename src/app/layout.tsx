import type { Metadata } from "next";
import { Geist_Mono, Host_Grotesk, Sansation } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const hostGrotesk = Host_Grotesk({
  variable: "--font-host-grotesk",
  subsets: ["latin"],
});

const sansation = Sansation({
  weight: ["300", "400", "700"],
  variable: "--font-sansation",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: 'MSME World - Leading Digital Solutions for Small Businesses',
    template: '%s | MSME World'
  },
  description: 'MSME World empowers Micro, Small, and Medium Enterprises through comprehensive digital solutions, business consulting, and sustainable development practices.',
  keywords: 'MSME World, small business, digitization, decentralization, decarbonization, business consulting, digital transformation',
  authors: [{ name: 'MSME World' }],
  creator: 'MSME World',
  publisher: 'MSME World',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://msmeworld.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://msmeworld.com',
    siteName: 'MSME World',
    title: 'MSME World - Leading Digital Solutions for Small Businesses',
    description: 'Empowering MSMEs through digitization, decentralization, and decarbonization.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MSME World - Digital Solutions for Small Business Growth',
    description: 'Comprehensive digital infrastructures and solutions to power MSMEs worldwide.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "MSME World",
              "description": "Leading digitization, decentralization, and decarbonization towards sustainable development for MSMEs worldwide.",
              "url": "https://msmeworld.com",
              "logo": "https://msmeworld.com/logo/msme-world-white.png",
              "sameAs": [
                "https://www.linkedin.com/company/msme-world",
                "https://twitter.com/msmeworld",
                "https://www.facebook.com/msmeworld"
              ],
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+1-XXX-XXX-XXXX",
                "contactType": "customer service",
                "availableLanguage": ["English"]
              },
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "Global"
              },
              "foundingDate": "2020",
              "numberOfEmployees": "50-200",
              "industry": "Business Consulting and Digital Solutions"
            })
          }}
        />
      </head>
      <body
        className={`${sansation.className} ${sansation.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
      </html>
    );
}

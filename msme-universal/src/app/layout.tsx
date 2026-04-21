import type { Metadata } from "next";
import { Geist_Mono, Host_Grotesk, Sansation } from "next/font/google";
import "./globals.css";
import ConditionalLayout from "@/components/ConditionalLayout";
import { getRegionConfig } from "@/lib/config";

const sansation = Sansation({
  weight: ["300", "400", "700"],
  variable: "--font-sansation",
  subsets: ["latin"],
});

export async function generateMetadata(): Promise<Metadata> {
  const config = getRegionConfig();
  
  return {
    title: {
      default: `${config.name} - Leading Digital Solutions for Small Businesses`,
      template: `%s | ${config.name}`
    },
    description: `${config.name} empowers Micro, Small, and Medium Enterprises through comprehensive digital solutions, business consulting, and sustainable development practices.`,
    keywords: `${config.name}, small business, digitization, decentralization, decarbonization, business consulting, digital transformation`,
    authors: [{ name: config.name }],
    creator: config.name,
    publisher: config.name,
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
      siteName: config.name,
      title: `${config.name} - Leading Digital Solutions for Small Businesses`,
      description: `Empowering MSMEs through digitization, decentralization, and decarbonization.`,
    },
    twitter: {
      card: 'summary_large_image',
      title: `${config.name} - Digital Solutions for Small Business Growth`,
      description: `Comprehensive digital infrastructures and solutions to power MSMEs worldwide.`,
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
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const config = getRegionConfig();
  const { colors } = config;

  // Generate CSS variables string
  const cssVars = `
    :root {
      --primary: ${colors.primary};
      --primary-dark: ${colors.primaryDark};
      --primary-light: ${colors.primaryLight};
      --primary-50: ${colors.palette[50]};
      --primary-100: ${colors.palette[100]};
      --primary-200: ${colors.palette[200]};
      --primary-300: ${colors.palette[300]};
      --primary-400: ${colors.palette[400]};
      --primary-500: ${colors.palette[500]};
      --primary-600: ${colors.palette[600]};
      --primary-700: ${colors.palette[700]};
      --primary-800: ${colors.palette[800]};
      --primary-900: ${colors.palette[900]};
      --primary-950: ${colors.palette[950]};
    }
  `;

  return (
    <html lang="en">
      <head>
        <style dangerouslySetInnerHTML={{ __html: cssVars }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": config.name,
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
        <ConditionalLayout>
          {children}
        </ConditionalLayout>
      </body>
    </html>
  );
}

import Hero from '@/components/Hero';
import HomeContent from '@/components/HomeContent';

import { Metadata } from 'next';

// SEO metadata
export const metadata: Metadata = {
  title: 'MSME World - Leading Digitization, Decentralization & Decarbonization for Small Businesses',
  description: 'MSME World empowers Micro, Small, and Medium Enterprises through comprehensive digital solutions, business consulting, financial guidance, and sustainable development practices. Transform your business today.',
  keywords: 'MSME World, small business empowerment, digitization, decentralization, decarbonization, business consulting, financial guidance, digital transformation, sustainable development, MSME solutions',
  openGraph: {
    title: 'MSME World - Empowering Small Businesses Globally',
    description: 'Leading digitization, decentralization, and decarbonization towards sustainable development for MSMEs worldwide.',
    type: 'website',
    url: '/',
    siteName: 'MSME World',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MSME World - Digital Solutions for Small Business Growth',
    description: 'Comprehensive digital infrastructures and solutions to power MSMEs, financial institutions, and governments.',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: '/',
  },
  authors: [{ name: 'MSME World' }],
  creator: 'MSME World',
  publisher: 'MSME World',
};

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      {/* <HomeContent /> */}
    </main>
  )
}

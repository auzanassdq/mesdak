import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Services - MSME World | Digital Solutions for Small Businesses',
  description: 'Explore MSME World\'s comprehensive services including business consulting, digital transformation, financial guidance, market access, and capacity building for small businesses.',
  keywords: 'MSME services, business consulting, digital transformation, financial guidance, market access, capacity building, small business solutions, MSME support',
  openGraph: {
    title: 'MSME World Services - Comprehensive Business Solutions',
    description: 'Discover our range of services designed to help MSMEs grow through digitization, financial support, and strategic consulting.',
    type: 'website',
    url: '/services',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MSME World Services - Digital Solutions for Growth',
    description: 'Comprehensive services for MSMEs including consulting, digital transformation, and financial guidance.',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: '/services',
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
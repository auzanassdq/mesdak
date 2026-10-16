import { Metadata } from 'next';

import { getRegionConfig } from '@/lib/config';

export async function generateMetadata(): Promise<Metadata> {
  const config = getRegionConfig();
  
  return {
    title: 'Our Services',
    description: `Explore ${config.name}'s comprehensive services including business consulting, digital transformation, financial guidance, market access, and capacity building for small businesses.`,
    keywords: `${config.name} services, business consulting, digital transformation, financial guidance, market access, capacity building, small business solutions, MSME support`,
    openGraph: {
      title: `${config.name} Services - Comprehensive Business Solutions`,
      description: 'Discover our range of services designed to help MSMEs grow through digitization, financial support, and strategic consulting.',
      type: 'website',
      url: '/services',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${config.name} Services - Digital Solutions for Growth`,
      description: 'Comprehensive services for MSMEs including consulting, digital transformation, and financial guidance.',
    },
    alternates: {
      canonical: '/services',
    },
  };
}

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
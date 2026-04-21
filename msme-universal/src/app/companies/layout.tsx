import { Metadata } from 'next';

import { getRegionConfig } from '@/lib/config';

export async function generateMetadata(): Promise<Metadata> {
  const config = getRegionConfig();
  
  return {
    title: 'Group Companies',
    description: `Discover ${config.name}'s group companies including MSME Network, M'Butic, M'DataTalk, MSME Finance, MSME Development Consulting, M'IZITec, and M'Media - all dedicated to empowering small businesses.`,
    keywords: `${config.name} group companies, business network, MSME Network Incorporation, M'Butic, M'DataTalk, MSME Finance, MSME Development Consulting, M'IZITec, M'Media, business partnerships`,
    openGraph: {
      title: `${config.name} Group Companies - Comprehensive Business Network`,
      description: 'Explore our diverse portfolio of companies providing specialized services to MSMEs across various sectors and industries.',
      type: 'website',
      url: '/companies',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${config.name} Group Companies - Business Network`,
      description: 'Our group companies offer specialized solutions for MSMEs including consulting, technology, finance, and media services.',
    },
    alternates: {
      canonical: '/companies',
    },
  };
}

export default function CompaniesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
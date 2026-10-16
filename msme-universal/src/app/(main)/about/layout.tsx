import { Metadata } from 'next';

import { getRegionConfig } from '@/lib/config';

export async function generateMetadata(): Promise<Metadata> {
  const config = getRegionConfig();
  
  return {
    title: 'About Us',
    description: `Learn about ${config.name}'s vision to empower small businesses, our mission for sustainable development, and meet our leadership team driving innovation in the MSME sector.`,
    keywords: `${config.name} about, company vision, mission statement, leadership team, small business empowerment, sustainable development, MSME innovation`,
    openGraph: {
      title: `About ${config.name} - Empowering Small Businesses Globally`,
      description: `Discover our vision, mission, and leadership team dedicated to transforming the MSME landscape through digitization, decentralization, and decarbonization.`,
      type: 'website',
      url: '/about',
    },
    twitter: {
      card: 'summary_large_image',
      title: `About ${config.name} - Vision, Mission & Leadership`,
      description: `Learn about our commitment to empowering MSMEs through innovative solutions and sustainable development practices.`,
    },
    alternates: {
      canonical: '/about',
    },
  };
}

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
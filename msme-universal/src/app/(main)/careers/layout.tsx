import { Metadata } from 'next';

import { getRegionConfig } from '@/lib/config';

export async function generateMetadata(): Promise<Metadata> {
  const config = getRegionConfig();
  
  return {
    title: 'Careers',
    description: `Explore career opportunities at ${config.name}. Join our mission to empower small businesses through innovative solutions. Find full-time, part-time, freelance, and internship positions across our global locations.`,
    keywords: `${config.name} careers, jobs, employment opportunities, business consultant jobs, innovation specialist, business development manager, MSME jobs, remote work, internships`,
    openGraph: {
      title: `Careers at ${config.name} - Shape the Future of Small Business`,
      description: `Join our team at ${config.name} and help transform the MSME landscape. Explore exciting career opportunities across our group companies worldwide.`,
      type: 'website',
      url: '/careers',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${config.name} Careers - Join Our Mission`,
      description: 'Discover career opportunities to make a meaningful impact in the small business ecosystem. Apply now!',
    },
    alternates: {
      canonical: '/careers',
    },
  };
}

export default function CareersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
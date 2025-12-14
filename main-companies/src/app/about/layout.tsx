import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us - MSME World | Vision, Mission & Leadership',
  description: 'Learn about MSME World\'s vision to empower small businesses, our mission for sustainable development, and meet our leadership team driving innovation in the MSME sector.',
  keywords: 'MSME World about, company vision, mission statement, leadership team, small business empowerment, sustainable development, MSME innovation',
  openGraph: {
    title: 'About MSME World - Empowering Small Businesses Globally',
    description: 'Discover our vision, mission, and leadership team dedicated to transforming the MSME landscape through digitization, decentralization, and decarbonization.',
    type: 'website',
    url: '/about',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About MSME World - Vision, Mission & Leadership',
    description: 'Learn about our commitment to empowering MSMEs through innovative solutions and sustainable development practices.',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: '/about',
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
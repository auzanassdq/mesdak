import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Careers - MSME World | Join Our Team & Make an Impact',
  description: 'Explore career opportunities at MSME World. Join our mission to empower small businesses through innovative solutions. Find full-time, part-time, freelance, and internship positions across our global locations.',
  keywords: 'MSME World careers, jobs, employment opportunities, business consultant jobs, innovation specialist, business development manager, MSME jobs, remote work, internships',
  openGraph: {
    title: 'Careers at MSME World - Shape the Future of Small Business',
    description: 'Join our team and help transform the MSME landscape. Explore exciting career opportunities across our group companies worldwide.',
    type: 'website',
    url: '/careers',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MSME World Careers - Join Our Mission',
    description: 'Discover career opportunities to make a meaningful impact in the small business ecosystem. Apply now!',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: '/careers',
  },
};

export default function CareersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
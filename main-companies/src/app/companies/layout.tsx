import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Group Companies - MSME World | Our Business Network & Partnerships',
  description: 'Discover MSME World\'s group companies including MSME Network, M\'Butic, M\'DataTalk, MSME Finance, MSME Development Consulting, M\'IZITec, and M\'Media - all dedicated to empowering small businesses.',
  keywords: 'MSME group companies, business network, MSME Network Incorporation, M\'Butic, M\'DataTalk, MSME Finance, MSME Development Consulting, M\'IZITec, M\'Media, business partnerships',
  openGraph: {
    title: 'MSME World Group Companies - Comprehensive Business Network',
    description: 'Explore our diverse portfolio of companies providing specialized services to MSMEs across various sectors and industries.',
    type: 'website',
    url: '/companies',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MSME World Group Companies - Business Network',
    description: 'Our group companies offer specialized solutions for MSMEs including consulting, technology, finance, and media services.',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: '/companies',
  },
};

export default function CompaniesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
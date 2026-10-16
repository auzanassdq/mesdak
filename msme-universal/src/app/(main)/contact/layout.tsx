import { Metadata } from 'next';

import { getRegionConfig } from '@/lib/config';

export async function generateMetadata(): Promise<Metadata> {
  const config = getRegionConfig();
  
  return {
    title: 'Contact Us',
    description: `Contact ${config.name} for business consulting, digital transformation, and financial guidance. Reach out to our team for personalized solutions to grow your small business.`,
    keywords: `contact ${config.name}, business consultation, get in touch, MSME support, business inquiry, contact form, customer service, business solutions inquiry`,
    openGraph: {
      title: `Contact ${config.name} - Let's Grow Your Business Together`,
      description: 'Ready to transform your small business? Contact our expert team for personalized solutions and support.',
      type: 'website',
      url: '/contact',
    },
    twitter: {
      card: 'summary_large_image',
      title: `Contact ${config.name} - Business Solutions Inquiry`,
      description: 'Get in touch with our team for expert guidance on growing your small business.',
    },
    alternates: {
      canonical: '/contact',
    },
  };
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
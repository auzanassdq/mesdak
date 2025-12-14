import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us - MSME World | Get in Touch for Business Solutions',
  description: 'Contact MSME World for business consulting, digital transformation, and financial guidance. Reach out to our team for personalized solutions to grow your small business.',
  keywords: 'contact MSME World, business consultation, get in touch, MSME support, business inquiry, contact form, customer service, business solutions inquiry',
  openGraph: {
    title: 'Contact MSME World - Let\'s Grow Your Business Together',
    description: 'Ready to transform your small business? Contact our expert team for personalized solutions and support.',
    type: 'website',
    url: '/contact',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact MSME World - Business Solutions Inquiry',
    description: 'Get in touch with our team for expert guidance on growing your small business.',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: '/contact',
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

// SEO metadata
export const metadata = {
  title: 'MSME World - Empowering Small Businesses to Grow and Succeed',
  description: 'MSME World provides comprehensive support for Micro, Small, and Medium Enterprises through business consulting, financial guidance, digital transformation, market access, and capacity building.',
  keywords: 'MSME, small business, business consulting, financial support, digital transformation, market access, capacity building',
};

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Services />
    </main>
  )
}

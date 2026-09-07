import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "M'Trade | MSME Universal",
  description: "Commerce. Capital. Assurance. Logistics. Finally unified. The all-in-one trade platform for MSMEs.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

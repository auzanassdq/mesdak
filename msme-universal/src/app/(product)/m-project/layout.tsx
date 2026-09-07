import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "M'Project | MSME Universal",
  description: "Manage projects. Digitise operations. Measure impact. Become trade-finance ready.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

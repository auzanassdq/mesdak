import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "M'Project | MSME Universal",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

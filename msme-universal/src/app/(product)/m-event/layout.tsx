import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "M'Event | MSME Universal",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

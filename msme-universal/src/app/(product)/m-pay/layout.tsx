import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "M'Pay | MSME Universal",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

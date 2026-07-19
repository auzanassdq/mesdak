import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "M'Doc | MSME Universal",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "MSME Consulting",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}

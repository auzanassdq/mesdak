import { Metadata } from "next";

export const metadata: Metadata = {
  title: "MSME Butic",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "MSME Finance",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}

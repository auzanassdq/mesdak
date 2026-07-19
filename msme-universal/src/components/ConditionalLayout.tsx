"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import { products } from "@/lib/products";

export default function ConditionalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const productRoutes = products.map(p => p.route);
  const hideNavFooterRoutes = ["/mbrand", "/super-deal", "/msme-butic", "/msme-consulting", "/msme-finance", "/msme-izitec", "/msme-media", "/msme-datatalk", "/msme-network", ...productRoutes];
  const shouldHide = hideNavFooterRoutes.some(
    (route) => pathname === route || pathname.startsWith(`${route}/`)
  );

  return (
    <>
      {!shouldHide && <Navbar />}
      {children}
      {!shouldHide && <Footer />}
    </>
  );
}
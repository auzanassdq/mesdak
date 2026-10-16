"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16 border-t border-gray-800 rounded-2xl">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
          <div>
            <h2 className="text-2xl font-bold mb-4">
              A New Intelligence Architecture for MSME Development
            </h2>
            <p className="text-gray-400 leading-relaxed">
              M&apos;DataTalk is more than a data platform — It is a new
              intelligence architecture that provides institutions with the
              depth, clarity, and foresight needed to unlock growth, strengthen
              ecosystems, and transform millions of lives.
            </p>
          </div>
          <div className="flex justify-start md:justify-end">
            <div className="relative h-20 w-72 md:h-28 md:w-96 opacity-90 hover:opacity-100 transition-opacity">
              <Image
                src="/images/mdatatalk-logo-white.png"
                alt="M'DataTalk Logo"
                fill
                className="object-contain object-left md:object-right"
              />
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 rounded-2xl">
          <p>
            &copy; {new Date().getFullYear()} M&apos;DataTalk Incorporation. All
            rights reserved.
          </p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
            <Link href="/contact" className="hover:text-white transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

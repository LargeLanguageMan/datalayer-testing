import React from "react";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Script from 'next/script'

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Test Website",
  description: "This is a test website that contains example of the object that is created",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/*
          Adobe DTM Script
          Note: Third-party scripts pose security risks. This script loads Adobe Tag Manager.
          For production:
          1. Verify this URL is still needed and authorized
          2. Consider using a tag management solution with better security controls
          3. Implement Content Security Policy (CSP) headers
          4. Regular security audits of third-party scripts
          5. Use SRI hash if Adobe provides stable versioned URLs
        */}
        <Script
          src="https://assets.adobedtm.com/4ef014d90ea4/9205d627617f/launch-798188fd51d6-development.min.js"
          strategy="afterInteractive"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
} 

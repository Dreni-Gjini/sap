import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Private AI for SAP — Self-Hosted, On-Prem, US-First",
  description:
    "A self-hosted AI middleware for SAP ERP. A new SAP era. Private by design. Intelligent by default.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=JetBrains+Mono:wght@400;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}

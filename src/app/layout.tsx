"use client";
import "./globals.css";
import Lenis from "@studio-freight/lenis";
import { useEffect } from "react";
import { Analytics } from "@vercel/analytics/react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);
  return (
    <html lang="en">
      <head>
        <title>Thecrafty.custom | Custom Tote Bags</title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css"
        />
        <link rel="icon" href="/logo.avif" />
        <script src="https://unpkg.com/@studio-freight/lenis@1.0.42/dist/lenis.min.js"></script>
      </head>

      <body className={`antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}

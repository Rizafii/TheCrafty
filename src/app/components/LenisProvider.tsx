"use client";
import { useEffect } from "react";

declare global {
  interface Window {
    Lenis: any;
  }
}

export default function LenisProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    // Wait for Lenis to load
    const initializeLenis = () => {
      if (typeof window !== "undefined" && window.Lenis) {
        const lenis = new window.Lenis({
          duration: 1.2,
          easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          direction: "vertical",
          gestureDirection: "vertical",
          smooth: true,
          mouseMultiplier: 1,
          smoothTouch: false,
          touchMultiplier: 2,
          infinite: false,
        });

        function raf(time: number) {
          lenis.raf(time);
          requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        // Cleanup function
        return () => {
          lenis.destroy();
        };
      }
    };

    // Check if Lenis is already loaded
    if (window.Lenis) {
      initializeLenis();
    } else {
      // Wait for script to load
      const checkLenis = setInterval(() => {
        if (window.Lenis) {
          clearInterval(checkLenis);
          initializeLenis();
        }
      }, 100);

      // Cleanup interval after 5 seconds
      setTimeout(() => {
        clearInterval(checkLenis);
      }, 5000);
    }
  }, []);

  return <>{children}</>;
}

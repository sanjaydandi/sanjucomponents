"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function ImageSwitcher() {
  const [showFirst, setShowFirst] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowFirst((prev) => !prev);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed bottom-4 right-4 w-20 h-20 sm:w-24 sm:h-24 flex items-center justify-center">
      {/* Animated Glowing Border */}
      <div className="absolute inset-0 rounded-full shadow-[0_0_15px_rgba(255,255,255,0.6)] animate-pulse"></div>

      {/* Image Transition */}
      <div className="relative w-full h-full">
        <Image
          src="/images/mylogo1.png"
          alt="Image 1"
          fill
          className={`absolute rounded-full transition-opacity duration-1000 ease-in-out ${showFirst ? "opacity-100" : "opacity-0"}`}
        />

        <Image
          src="/images/mylogo2.png"
          alt="Image 2"
          fill
          className={`absolute rounded-full transition-opacity duration-1000 ease-in-out ${showFirst ? "opacity-0" : "opacity-100"}`}
        />
      </div>
    </div>
  );
}

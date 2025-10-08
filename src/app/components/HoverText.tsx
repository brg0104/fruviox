"use client";

import { useState } from "react";

export default function HoverText() {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="relative h-screen flex items-center justify-center bg-gray-900">
      {/* Trigger area */}
      <span
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="text-white text-4xl font-bold cursor-pointer"
      >
        Hover Me
      </span>

      {/* Animated text */}
      <span
        className={`
          absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
          text-[#A2A1A2] text-3xl font-semibold 
          transition-opacity duration-500
          ${hovered ? "opacity-100" : "opacity-0"}
        `}
      >
        Revealed Text!
      </span>
    </div>
  );
}

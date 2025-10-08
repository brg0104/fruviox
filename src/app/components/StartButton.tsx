"use client";

import React from "react";
import Link from "next/link";

interface StartButtonProps {
  href: string;       // The page route to navigate to
  label?: string;     // Optional button label
}

export default function StartButton({ href, label = "Let's Begin" }: StartButtonProps) {
  return (
    <Link href={href} passHref>
      <button className="bg-white text-black w-40 h-10 rounded-full flex items-center justify-center hover:scale-105 transition-transform duration-300">
        <span
          className="w-4 h-4 rounded-full bg-yellow-500 ml-2 animate-pulse"
          style={{ backgroundColor: "#FFD700" }}
        ></span>
        <span className="flex-1 text-center">{label}</span>
      </button>
    </Link>
  );
}

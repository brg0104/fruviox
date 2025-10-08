"use client";

import React from "react";
import Image from "next/image";

export default function BottomPage() {
  return (
    <div className="relative min-h-screen bg-[#f4f4f4] overflow-hidden">
      {/* Top-left logo */}
      <div className="absolute top-6 left-6 font-righteous text-4xl select-none border border-black/30 px-2 py-1 rounded">
        <span className="text-black font-bold">FRUVIOX</span>
        <span className="text-yellow-500 font-bold">.</span>
      </div>

      {/* Top-right social icons */}
      <div className="absolute top-6 right-6 flex gap-4 border border-black/20 p-2 rounded">
        <a href="https://www.behance.net" target="_blank" rel="noopener noreferrer">
          <Image
            src="/behance.svg"
            alt="Behance"
            width={24}
            height={24}
            className="cursor-pointer hover:opacity-70 transition"
          />
        </a>
        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
          <Image
            src="/linkedin.svg"
            alt="LinkedIn"
            width={24}
            height={24}
            className="cursor-pointer hover:opacity-70 transition"
          />
        </a>
        <a href="https://www.instagram.com/fruviox/" target="_blank" rel="noopener noreferrer">
          <Image
            src="/instagram.svg"
            alt="Instagram"
            width={24}
            height={24}
            className="cursor-pointer hover:opacity-70 transition"
          />
        </a>
      </div>

      {/* Bottom-left copyright */}
      <div className="absolute bottom-4 left-4 text-sm text-black font-sans border border-black/20 px-2 py-1 rounded">
        © {new Date().getFullYear()} Fruviox All Rights Reserved
      </div>

      {/* Bottom-right section */}
      <div className="absolute bottom-4 right-4 flex gap-6 text-sm text-black font-sans border border-black/20 px-2 py-1 rounded">
        <span className="cursor-pointer hover:underline">Made to Top</span>
        <span className="cursor-pointer hover:underline">Privacy Policy</span>
      </div>
    </div>
  );
}

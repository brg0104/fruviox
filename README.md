This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.




















"use client";

import React, { useState, useRef, useEffect } from "react";

export default function BottomPage() {
  const [hovered, setHovered] = useState(false);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [smoothPos, setSmoothPos] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);
  const [maskRadius, setMaskRadius] = useState(200);
  const textRef = useRef<HTMLHeadingElement>(null);

  // Smooth cursor follow
  useEffect(() => {
    let animationFrame: number;
    const animate = () => {
      setSmoothPos(prev => ({
        x: prev.x + (cursorPos.x - prev.x) * 0.2,
        y: prev.y + (cursorPos.y - prev.y) * 0.2,
      }));
      animationFrame = requestAnimationFrame(animate);
    };
    animate();
    return () => cancelAnimationFrame(animationFrame);
  }, [cursorPos]);

  // Gradual opacity animation
  useEffect(() => {
    let opacityFrame: number;
    const updateOpacity = () => {
      setOpacity(prev => {
        if (!hovered) return 0;
        const next = prev + 0.05;
        return next > 1 ? 1 : next;
      });
      opacityFrame = requestAnimationFrame(updateOpacity);
    };
    updateOpacity();
    return () => cancelAnimationFrame(opacityFrame);
  }, [hovered]);

  // Pulsing torchlight radius
  useEffect(() => {
    let radiusFrame: number;
    const animateRadius = () => {
      if (hovered) {
        const time = Date.now() / 300;
        setMaskRadius(150 + Math.sin(time) * 20); // proportional to font
      } else {
        setMaskRadius(0);
      }
      radiusFrame = requestAnimationFrame(animateRadius);
    };
    animateRadius();
    return () => cancelAnimationFrame(radiusFrame);
  }, [hovered]);

  const handleMouseMove = (e: React.MouseEvent<HTMLHeadingElement, MouseEvent>) => {
    if (!textRef.current) return;
    const rect = textRef.current.getBoundingClientRect();
    setCursorPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <div className="relative min-h-screen bg-[#a1a1a5] overflow-hidden">
      <h1
        ref={textRef}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onMouseMove={handleMouseMove}
        className="absolute bottom-0 left-1/2 transform -translate-x-1/2 font-bold select-none cursor-pointer font-sans"
        style={{
          color: "#FFFFFF",
          opacity: opacity * 0.9 + 0.1,
          fontSize: "clamp(6rem, 15vw, 16rem)", // responsive for all devices
          WebkitMaskImage: hovered
            ? `radial-gradient(circle ${maskRadius}px at ${smoothPos.x}px ${smoothPos.y}px, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 70%)`
            : "none",
          WebkitMaskRepeat: "no-repeat",
          WebkitMaskPosition: "center",
          maskImage: hovered
            ? `radial-gradient(circle ${maskRadius}px at ${smoothPos.x}px ${smoothPos.y}px, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 70%)`
            : "none",
          maskRepeat: "no-repeat",
          maskPosition: "center",
          transition: "text-shadow 0.2s",
          textShadow: hovered
            ? `0 0 ${25 + Math.sin(Date.now() / 200) * 8}px #A2A1A2,
               0 0 ${50 + Math.sin(Date.now() / 150) * 15}px #A2A1A2`
            : "none",
        }}
      >
        FRUVIOX
      </h1>
    </div>
  );
}

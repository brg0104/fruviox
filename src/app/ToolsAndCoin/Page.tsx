// "use client";

// import React, { useEffect, useRef, useState } from "react";

// type Tool = {
//   src: string;
//   rotate: boolean;
//   x: number;
//   y: number;
//   vx: number;
//   vy: number;
//   size: number;
//   angle: number;
//   va: number; // angular velocity
//   swayPhase: number; // phase for swaying
// };

// export default function ToolsAndCoinPage() {
//   const toolsData = [
//     { src: "/tool1.svg", rotate: false },
//     { src: "/tool2.svg", rotate: true },
//     { src: "/tool3.svg", rotate: false },
//     { src: "/figma.svg", rotate: true },
//   ];

//   const boxRef = useRef<HTMLDivElement>(null);
//   const [tools, setTools] = useState<Tool[]>(() =>
//     toolsData.map((t) => ({
//       ...t,
//       x: Math.random() * 400, // random initial x
//       y: Math.random() * 200, // random initial y
//       vx: (Math.random() - 0.5) * 1, // horizontal speed
//       vy: (Math.random() - 0.5) * 1, // vertical speed
//       size: 64,
//       angle: Math.random() * 360,
//       va: (Math.random() - 0.5) * 1,
//       swayPhase: Math.random() * Math.PI * 2,
//     }))
//   );

//   const mouse = useRef({ x: 0, y: 0 });
//   const time = useRef(0);

//   // Track mouse position
//   useEffect(() => {
//     const handleMouseMove = (e: MouseEvent) => {
//       if (boxRef.current) {
//         const rect = boxRef.current.getBoundingClientRect();
//         mouse.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
//       }
//     };
//     window.addEventListener("mousemove", handleMouseMove);
//     return () => window.removeEventListener("mousemove", handleMouseMove);
//   }, []);

//   // Floating animation with swaying
//   useEffect(() => {
//     let animationFrame: number;

//     const animate = () => {
//       time.current += 0.016; // approx 60fps

//       setTools((prev) => {
//         if (!boxRef.current) return prev;

//         const boxWidth = boxRef.current.clientWidth;
//         const boxHeight = boxRef.current.clientHeight;

//         return prev.map((tool) => {
//           let { x, y, vx, vy, size, angle, va, swayPhase } = tool;

//           // Balloon floating
//           vx += (Math.random() - 0.5) * 0.05;
//           vy += (Math.random() - 0.5) * 0.02;
//           vy -= 0.02; // slow upward drift
//           angle += va; // rotate

//           // Apply swaying
//           const swayX = Math.sin(time.current + swayPhase) * 10;
//           const swayY = Math.cos(time.current + swayPhase) * 5;

//           x += vx + swayX * 0.02;
//           y += vy + swayY * 0.02;

//           // Soft edge collisions
//           if (x + size > boxWidth) {
//             x = boxWidth - size;
//             vx *= -0.6;
//           }
//           if (x < 0) {
//             x = 0;
//             vx *= -0.6;
//           }
//           if (y < 0) {
//             y = 0;
//             vy *= -0.6;
//           }
//           if (y + size > boxHeight) {
//             y = boxHeight - size;
//             vy *= -0.6;
//           }

//           // Mouse repel effect
//           const dx = x + size / 2 - mouse.current.x;
//           const dy = y + size / 2 - mouse.current.y;
//           const dist = Math.sqrt(dx * dx + dy * dy);
//           if (dist < 120 && dist > 0) {
//             const force = (120 - dist) * 0.05;
//             vx += (dx / dist) * force;
//             vy += (dy / dist) * force;
//           }

//           return { ...tool, x, y, vx, vy, angle };
//         });
//       });

//       animationFrame = requestAnimationFrame(animate);
//     };

//     animate();
//     return () => cancelAnimationFrame(animationFrame);
//   }, []);

//   return (
//     <main className="relative min-h-screen bg-[#F4F4F4] flex px-8 items-end">
//       {/* Left Section - Tools Playground */}
//       <div
//         ref={boxRef}
//         className="w-2/3 h-[60vh] relative overflow-hidden bg-[#F4F4F4]"
//       >
//         {tools.map((tool, index) => (
//           <img
//             key={index}
//             src={tool.src}
//             alt="Tool"
//             className="absolute w-16 h-16"
//             style={{
//               left: tool.x,
//               top: tool.y,
//               transform: `rotate(${tool.angle}deg)`,
//               transition: "transform 0.05s",
//             }}
//           />
//         ))}
//       </div>

//       {/* Vertical Line */}
//       <div className="w-px bg-gray-400 self-stretch"></div>

//       {/* Right Section - Video */}
//       <div className="w-1/3 flex items-center justify-center pb-8">
//         <video
//           src="/vids/3dflogo.mp4"
//           autoPlay
//           loop
//           muted
//           playsInline
//           className="w-[80%] h-auto rounded-xl shadow-lg"
//         />
//       </div>
//     </main>
//   );
// }





"use client";

import React, { useRef } from "react";
import { FlipText } from "../components/FlipText";

export default function ToolsAndCoinPage() {
  const tools = [
    { src: "/tool1.svg" },
    { src: "/tool2.svg" },
    { src: "/tool3.svg" },
    { src: "/figma.svg" },
  ];

  const boxRef = useRef<HTMLDivElement>(null);

  return (
    <main className="relative min-h-screen bg-[#121315] flex px-8 items-end">
      {/* Top-left "Explore" */}
      <div className="absolute top-6 left-6 text-[#A2A1A2] text-2px font-semibold tracking-wide">
        <p><FlipText text="Explore" /></p>
      </div>

      {/* Left Section - Tools */}
      <div
        ref={boxRef}
        className="w-2/3 h-[60vh] relative overflow-hidden bg-[#121315] flex flex-wrap gap-6 p-6"
      >
        {tools.map((tool, index) => (
          <img
            key={index}
            src={tool.src}
            alt="Tool"
            className="w-16 h-16 object-contain"
          />
        ))}
      </div>

      {/* Right Section - Video */}
      <div className="w-1/3 flex items-center justify-center pb-8">
        <video
          src="/vids/3dFlogo.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-[80%] h-auto rounded-xl shadow-lg"
        />
      </div>

      {/* Gradient Bottom Border */}
      <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-[#121315] via-[#f4f4f4] to-[#121315]" />
    </main>
  );
}

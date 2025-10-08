"use client";

import { useEffect, useRef, useState } from "react";

export default function Cursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false); // for scaling
  const [hide, setHide] = useState(false);       // hide over interactive elements

  const targetPos = useRef({ x: 0, y: 0 });
  const currentPos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      targetPos.current = { x: e.clientX, y: e.clientY };
    };

    const hoverIn = () => {
      setHovered(true);
      setHide(true); // hide custom cursor
    };
    const hoverOut = () => {
      setHovered(false);
      setHide(false); // show custom cursor again
    };

    window.addEventListener("mousemove", move);

    // Add hover listeners to buttons, links, and logos
    document.querySelectorAll("a, button, .logo").forEach((el) => {
      el.addEventListener("mouseenter", hoverIn);
      el.addEventListener("mouseleave", hoverOut);
    });

    const animate = () => {
      currentPos.current.x += (targetPos.current.x - currentPos.current.x) * 0.15;
      currentPos.current.y += (targetPos.current.y - currentPos.current.y) * 0.15;

      if (cursorRef.current && !hide) {
        cursorRef.current.style.transform = `translate(${currentPos.current.x - 12}px, ${currentPos.current.y - 12}px)`;
      }

      requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener("mousemove", move);
      document.querySelectorAll("a, button, .logo").forEach((el) => {
        el.removeEventListener("mouseenter", hoverIn);
        el.removeEventListener("mouseleave", hoverOut);
      });
    };
  }, [hide]);

  return (
    <div
      ref={cursorRef}
      className={`fixed top-0 left-0 z-[9999] pointer-events-none transition-transform duration-200 ease-out
        ${hovered ? "scale-150 border-blue-400" : "border-black"} 
        rounded-full border-2 bg-transparent`}
      style={{
        width: "24px",
        height: "24px",
        display: hide ? "none" : "block", // hide cursor over interactive elements
      }}
    />
  );
}

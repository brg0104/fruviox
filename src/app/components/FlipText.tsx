"use client";

import React from "react";

export function FlipText({ text }: { text: string }) {
  return (
    <span className="flip-text">
      {text.split("").map((char, i) => (
        <span
          key={i}
          style={{ animationDelay: `${i * 0.15}s` }} // stagger delay
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </span>
  );
}

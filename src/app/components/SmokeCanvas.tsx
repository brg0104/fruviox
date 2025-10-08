"use client";

import { useEffect, useRef } from "react";

export default function SmokeCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    type ParticleType = {
      x: number;
      y: number;
      radius: number;
      speedY: number;
      angle: number;
      angularSpeed: number;
      opacity: number;
      reset: () => void;
      update: () => void;
      draw: () => void;
    };

    const particles: ParticleType[] = [];
    const particleCount = 60;

    class Particle implements ParticleType {
      x: number = 0;
      y: number = 0;
      radius: number = 0;
      speedY: number = 0;
      angle: number = 0;
      angularSpeed: number = 0;
      opacity: number = 0;

      constructor() {
        this.reset();
      }

      reset() {
        this.x = Math.random() * width;
        this.y = height + Math.random() * 100;
        this.radius = 20 + Math.random() * 80;
        this.speedY = 0.3 + Math.random() * 1;
        this.angle = Math.random() * Math.PI * 2;
        this.angularSpeed = 0.01 + Math.random() * 0.02;
        this.opacity = 0.05 + Math.random() * 0.2;
      }

      update() {
        this.y -= this.speedY;
        this.angle += this.angularSpeed;
        this.x += Math.sin(this.angle) * 0.5;
        if (this.y < -this.radius) this.reset();
      }

      draw() {
        if (!ctx) return;
        const gradient = ctx.createRadialGradient(
          this.x,
          this.y,
          0,
          this.x,
          this.y,
          this.radius
        );
        gradient.addColorStop(0, `rgba(255,255,255,${this.opacity})`);
        gradient.addColorStop(1, "rgba(255,255,255,0)");
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    let animationId: number;
    const animate = () => {
      if (!ctx) return;
      ctx.clearRect(0, 0, width, height);
      particles.forEach(p => {
        p.update();
        p.draw();
      });
      animationId = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      width = canvas!.width = window.innerWidth;
      height = canvas!.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full z-0" />;
}

// "use client";

// import React from "react";
// import StartButton from "../components/StartButton"; // adjust path if needed

// export default function Contactus() {
//   return (
//     <div className="relative min-h-screen bg-[#121315] overflow-hidden">
//       {/* Top center heading */}
//       <div className="absolute top-10 left-1/2 transform -translate-x-1/2 text-center w-[85%] mx-auto">
//         <h1 className="text-white text-8xl font-righteous">
//           Let&apos;s Make Something Amazing
//           <span className="text-yellow-400">.</span>
//         </h1>
//       </div>

//       {/* Bottom center button */}
//       <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
//         {/* Vertical line */}
//         <div className="w-[1px] h-25 bg-white mb-4"></div>

//         {/* Start button */}
//         {/* <StartButton href="/contact" /> */}
//         <StartButton href="/contact" label="Let's Begin" />
//       </div>
//     </div>
//   );
// }


// "use client";

// import React, { useRef, useEffect } from "react";
// import * as THREE from "three";
// import StartButton from "../components/StartButton";

// export default function Contactus() {
//   const mountRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const mount = mountRef.current!;
//     const scene = new THREE.Scene();
//     const camera = new THREE.PerspectiveCamera(
//       75,
//       window.innerWidth / window.innerHeight,
//       0.1,
//       2000
//     );
//     camera.position.z = 1;

//     const renderer = new THREE.WebGLRenderer({ antialias: true });
//     renderer.setSize(window.innerWidth, window.innerHeight);
//     renderer.setClearColor(0x121315, 1);
//     mount.appendChild(renderer.domElement);

//     // 🌌 Create Stars
//     const starCount = 3000;
//     const geometry = new THREE.BufferGeometry();
//     const positions = new Float32Array(starCount * 3);
//     for (let i = 0; i < starCount * 3; i++) {
//       positions[i] = (Math.random() - 0.5) * 2000;
//     }
//     geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
//     const material = new THREE.PointsMaterial({
//       color: 0xffffff,
//       size: 2,
//       sizeAttenuation: true,
//       transparent: true,
//       opacity: 0.9,
//     });
//     const stars = new THREE.Points(geometry, material);
//     scene.add(stars);

//     // 🌠 Star movement
//     let speed = 0.4;
//     let targetSpeed = 0.4;

//     const animate = () => {
//       requestAnimationFrame(animate);

//       // Smooth transition between current speed and target
//       speed += (targetSpeed - speed) * 0.05;

//       const positions = geometry.attributes.position.array as Float32Array;
//       for (let i = 0; i < starCount * 3; i += 3) {
//         positions[i + 2] += speed;
//         if (positions[i + 2] > 1000) {
//           positions[i + 2] = -1000;
//           positions[i] = (Math.random() - 0.5) * 2000;
//           positions[i + 1] = (Math.random() - 0.5) * 2000;
//         }
//       }

//       geometry.attributes.position.needsUpdate = true;
//       renderer.render(scene, camera);
//     };

//     animate();

//     // Resize handler
//     const handleResize = () => {
//       renderer.setSize(window.innerWidth, window.innerHeight);
//       camera.aspect = window.innerWidth / window.innerHeight;
//       camera.updateProjectionMatrix();
//     };
//     window.addEventListener("resize", handleResize);

//     // ✨ Lightspeed hover effects
//     const btn = document.getElementById("start-btn");
//     btn?.addEventListener("mouseenter", () => {
//       targetSpeed = 12; // lightspeed
//     });
//     btn?.addEventListener("mouseleave", () => {
//       targetSpeed = 0.4; // back to normal
//     });

//     return () => {
//       window.removeEventListener("resize", handleResize);
//       mount.removeChild(renderer.domElement);
//     };
//   }, []);

//   return (
//     <div
//       ref={mountRef}
//       className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden bg-[#121315] text-center"
//     >
//       {/* Foreground UI */}
//       <div className="absolute z-10 flex flex-col items-center">
//         <h1 className="text-white text-8xl font-righteous mb-12 leading-tight">
//           Let&apos;s Make Something Amazing
//           <span className="text-yellow-400">.</span>
//         </h1>

//         <div className="w-[1px] h-24 bg-white mb-6"></div>

//         {/* Add id for event listener */}
//         <div id="start-btn">
//           <StartButton href="/contact" label="Let's Begin" />
//         </div>
//       </div>

//       {/* Gradient overlay for cinematic depth */}
//       <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#121315]/20 to-[#121315] pointer-events-none" />
//     </div>
//   );
// }




"use client";

import React, { useRef, useEffect } from "react";
import * as THREE from "three";
import StartButton from "../components/StartButton";

export default function Contactus() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current!;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      2000
    );
    camera.position.z = 1;

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x121315, 1);
    mount.appendChild(renderer.domElement);

    // 🌌 Stars
    const starCount = 3000;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(starCount * 3);
    for (let i = 0; i < starCount * 3; i++) {
      positions[i] = (Math.random() - 0.5) * 2000;
    }
    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));

    const material = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 2,
      sizeAttenuation: true,
      transparent: true,
      opacity: 0.9,
    });
    const stars = new THREE.Points(geometry, material);
    scene.add(stars);

    // 🌠 Star movement
    let speed = 0.4;
    let targetSpeed = 0.4;

    // 🖱️ Mouse parallax
    let mouseX = 0,
      mouseY = 0;
    let targetX = 0,
      targetY = 0;

    // Attach listener to renderer DOM
    const handleMouseMove = (event: MouseEvent) => {
      mouseX = (event.clientX / window.innerWidth) * 2 - 1;
      mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
    };
    renderer.domElement.addEventListener("mousemove", handleMouseMove);

    const animate = () => {
      requestAnimationFrame(animate);

      // Smooth speed
      speed += (targetSpeed - speed) * 0.05;

      // Smooth camera rotation
      targetX += (mouseX - targetX) * 0.05;
      targetY += (mouseY - targetY) * 0.05;
      camera.rotation.y = targetX * 0.5;
      camera.rotation.x = targetY * 0.5;

      // Update star positions
      const positionsArray = geometry.attributes.position.array as Float32Array;
      for (let i = 0; i < starCount * 3; i += 3) {
        // Move stars forward
        positionsArray[i + 2] += speed;

        // Slight horizontal + vertical parallax based on mouse
        positionsArray[i] += targetX * 0.2;
        positionsArray[i + 1] += targetY * 0.2;

        // Reset stars when they pass camera
        if (positionsArray[i + 2] > 1000) {
          positionsArray[i + 2] = -1000;
          positionsArray[i] = (Math.random() - 0.5) * 2000;
          positionsArray[i + 1] = (Math.random() - 0.5) * 2000;
        }
      }
      geometry.attributes.position.needsUpdate = true;

      renderer.render(scene, camera);
    };

    animate();

    // 🪟 Resize
    const handleResize = () => {
      renderer.setSize(window.innerWidth, window.innerHeight);
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
    };
    window.addEventListener("resize", handleResize);

    // 🚀 Lightspeed hover
    const btn = document.getElementById("start-btn");
    btn?.addEventListener("mouseenter", () => {
      targetSpeed = 12;
    });
    btn?.addEventListener("mouseleave", () => {
      targetSpeed = 0.4;
    });

    // 🧹 Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
      renderer.domElement.removeEventListener("mousemove", handleMouseMove);
      mount.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden bg-[#121315] text-center"
    >
      {/* Foreground UI */}
      <div className="absolute z-10 flex flex-col items-center">
        <h1 className="text-white text-8xl font-righteous mb-12 leading-tight">
          Let&apos;s Make Something Amazing
          <span className="text-yellow-400">.</span>
        </h1>

        <div className="w-[1px] h-24 bg-white mb-6"></div>

        <div id="start-btn">
          <StartButton href="/contact" label="Let's Begin" />
        </div>
      </div>

      {/* Gradient overlay for cinematic depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#121315]/20 to-[#121315] pointer-events-none" />
    </div>
  );
}

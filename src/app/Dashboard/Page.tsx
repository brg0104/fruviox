// "use client";

// import Navbar from "../components/Navbar";
// import Cursor from "../components/Cursor";   // 👈 import cursor
// import Image from "next/image";

// export default function Dashboard() {
//   const stars = Array.from({ length: 20 }, (_, i) => ({
//     id: i,
//     top: `${Math.random() * 100}%`,
//     left: `${Math.random() * 100}%`,
//     size: `${Math.random() * 2 + 1}px`,
//     delay: `${Math.random() * 2}s`,
//     char: Math.random() > 0.5 ? "+" : "★",
//   }));

//   const floatingSvgs = [
//     { src: "/star.svg", size: 60, delay: "0s", top: "20%", left: "25%" },
//     { src: "/flower.svg", size: 80, delay: "1s", top: "30%", left: "70%" },
//     { src: "/star.svg", size: 50, delay: "2s", top: "60%", left: "40%" },
//     { src: "/flower.svg", size: 70, delay: "3s", top: "50%", left: "15%" },
//   ];

//   return (
//     <div
//       className="relative min-h-screen flex flex-col overflow-hidden"
//       style={{ background: "linear-gradient(to bottom, #000000ff)" }}
//     >
//       {/* Custom Cursor */}
//       <Cursor />

//       {/* Navbar */}
//       <Navbar />

//       {/* Stars */}
//       {/* {stars.map((star) => (
//         <span
//           key={star.id}
//           className="absolute text-white blink"
//           style={{
//             top: star.top,
//             left: star.left,
//             fontSize: star.size,
//             animationDelay: star.delay,
//           }}
//         >
//           {star.char}
//         </span>
//       ))} */}

//       {/* Centered Heading */}
//       <div className="flex flex-1 items-center justify-center z-10 relative">
//         <div className="absolute inset-0 flex items-center justify-center">
//           <div className="w-96 h-96 bg-white opacity-10 rounded-full blur-3xl"></div>
//         </div>

//         {/* {floatingSvgs.map((svg, i) => (
//           <div
//             key={i}
//             className="absolute animate-float"
//             style={{
//               top: svg.top,
//               left: svg.left,
//               width: svg.size,
//               height: svg.size,
//               animationDelay: svg.delay,
//             }}
//           >
//             <Image src={svg.src} alt="floating-svg" width={svg.size} height={svg.size} />
//           </div>
//         ))} */}

//         <h1 className="text-7xl font-extrabold tracking-wider text-white text-center relative z-20">
//           FROM PIXELS TO MOTION
//         </h1>
//       </div>

//       <style jsx>{`
//         @keyframes float {
//           0% {
//             transform: translateY(0px);
//           }
//           50% {
//             transform: translateY(-20px);
//           }
//           100% {
//             transform: translateY(0px);
//           }
//         }
//         .animate-float {
//           animation: float 6s ease-in-out infinite;
//         }
//       `}</style>
//     </div>
//   );
// }





// "use client";

// import Navbar from "../components/Navbar";
// import Cursor from "../components/Cursor";
// import Image from "next/image";
// import { FlipText } from "../components/FlipText";

// export default function Dashboard() {
//   return (
//     <div
//       className="relative min-h-screen flex flex-col overflow-hidden"
//       style={{ background: "linear-gradient(to bottom,#F4F4F4)" }}
//     >
//       <Cursor />
//       <Navbar />

//       <div className="flex flex-1 items-center justify-center z-10 relative">
//         <div className="absolute inset-0 flex items-center justify-center">
//           <div className="w-96 h-96 bg-white opacity-10 rounded-full blur-3xl"></div>
//         </div>

//         {/* Left Star + Right Text */}
//         <div className="flex items-center justify-between w-3/4 relative z-20">
//           {/* Left Star SVG */}
//           <div className="w-24 h-24 animate-star">
//             <Image
//               src="/star.svg"
//               alt="Star"
//               width={96}
//               height={96}
//             />
//           </div>

//           {/* Right Text */}
//           <h1 className="text-7xl font-extrabold tracking-wider text-black text-right">
//             FROM PIXELS TO MOTION
//           </h1>
//         </div>

//         {/* Bottom Texts with Fade-up + Float + Hover */}
//         <div className="absolute bottom-10 left-10 text-[#A1A1A5] text-sm leading-5 animate-fadeUp animate-float hover:-translate-y-1 hover:scale-105 transition-all duration-300">
//           {/* <p>Interactive Studio,</p>
//           <p>Based In BAM, IN.</p> */}
//            <p><FlipText text="Interactive Studio," /></p>
//            <p><FlipText text="Based In BAM, IN." /></p>
//         </div>

//         <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-[#A2A1A2] text-sm animate-fadeUp animate-float delay-200 hover:-translate-y-1 hover:scale-105 transition-all duration-300 flex items-center gap-2">
//           <FlipText text="SCROLL TO EXPLORE" />
//             <Image
//               src="/arrow-down.svg"
//               alt="Arrow Down"
//               width={18}
//               height={18}
//               className="inline-block"
//             />
//         </div>


//         <div className="absolute bottom-10 right-10 text-[#A2A1A2] text-sm animate-fadeUp animate-float delay-400 hover:-translate-y-1 hover:scale-105 transition-all duration-300">
//           <FlipText text="Welcome.." />
//         </div>
//       </div>
//     </div>
//   );
// }



// "use client";

// import Navbar from "../components/Navbar";
// import Cursor from "../components/Cursor";
// import Image from "next/image";
// import { FlipText } from "../components/FlipText";

// export default function Dashboard() {
//   return (
//     <div
//       className="relative min-h-screen flex flex-col overflow-hidden"
//       style={{ background: "linear-gradient(to bottom,#FFFFFF)" }}
//     >
//       <Cursor />
//       <Navbar />

//       <div className="flex flex-1 items-center justify-center z-10 relative">
//         {/* Background blur circle (optional – remove this too if not needed) */}
//         <div className="absolute inset-0 flex items-center justify-center">
//           {/* <div className="w-96 h-96 bg-white opacity-10 rounded-full blur-3xl"></div> */}
//         </div>

//         {/* Bottom Left Text */}
//         <div className="absolute bottom-10 left-10 text-[#A1A1A5] text-sm leading-5 animate-fadeUp animate-float hover:-translate-y-1 hover:scale-105 transition-all duration-300">
//           <p><FlipText text="Interactive Studio," /></p>
//           <p><FlipText text="Based In BAM, IN." /></p>
//         </div>

//         {/* Bottom Center Text */}
//         <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-[#A2A1A2] text-sm animate-fadeUp animate-float delay-200 hover:-translate-y-1 hover:scale-105 transition-all duration-300 flex items-center gap-2">
//           <FlipText text="SCROLL TO EXPLORE" />
//           <Image
//             src="/arrow-down.svg"
//             alt="Arrow Down"
//             width={18}
//             height={18}
//             className="inline-block"
//           />
//         </div>

//         {/* Bottom Right Text */}
//         <div className="absolute bottom-10 right-10 text-[#A2A1A2] text-sm animate-fadeUp animate-float delay-400 hover:-translate-y-1 hover:scale-105 transition-all duration-300">
//           <FlipText text="Welcome.." />
//         </div>
//       </div>
//     </div>
//   );
// }








// "use client";

// import Navbar from "../components/Navbar";
// import Cursor from "../components/Cursor";
// import Image from "next/image";
// import { FlipText } from "../components/FlipText";

// export default function Dashboard() {
//   return (
//     <div
//       className="relative min-h-screen flex flex-col overflow-hidden"
//       style={{ background: "linear-gradient(to bottom,#FFFFFF)" }}
//     >
//       <Cursor />
//       <Navbar />

//       <div className="flex flex-1 items-center justify-center z-10 relative">
//         {/* Background boxes container */}
//         <div className="absolute inset-0 flex flex-col items-center justify-center gap-8">
//           {/* Box 1 */}
//           <div className="w-[90%] h-26 bg-white/10 border border-[#E0E0E0] rounded-xl backdrop-blur-md flex items-center justify-center text-gray-700 text-lg font-semibold">
//             <div className="flex w-full h-full">
//               {/* Left Div - 45% */}
//               <div className="w-[45%] h-full text-black flex items-center justify-start border-r border-[#E0E0E0] text-8xl">
//                 DESIGNING
//               </div>

//               {/* Middle Div - Capsule with local video */}
//               <div className="w-[15%] h-full flex items-center justify-center">
//                 <div className="w-full h-full flex items-center justify-center px-2">
//                   <div className="w-full h-full rounded-full overflow-hidden border-2">
//                     <video
//                       src="/vids/vid1.mp4" // 👈 your local video file
//                       autoPlay
//                       loop
//                       muted
//                       playsInline
//                       className="w-full h-full object-cover"
//                     />
//                   </div>
//                 </div>
//               </div>

//               {/* Right Div - 40% */}
//               <div className="w-[40%] h-full flex items-center border-l border-[#E0E0E0] text-black text-8xl">
//                 VISUAL
//               </div>
//             </div>
//           </div>

//           {/* Box 2 */}
//           <div className="w-[90%] h-26 bg-white/10 border border-[#E0E0E0] rounded-xl backdrop-blur-md flex items-center justify-center text-gray-700 text-lg font-semibold">
//             <div className="flex w-full h-full">
//               {/* Left Div - 50% */}
//               <div className="w-[50%] h-full flex items-center justify-start border-r border-[#E0E0E0] text-black text-8xl">
//                 STORIES
//               </div>
//               {/* Middle Div - 20% */}
//               <div className="w-[20%] h-full flex items-center justify-center">
//                 Middle 2
//               </div>
//               {/* Right Div - 30% */}
//               <div className="w-[30%] h-full flex items-center justify-center border-l border-[#E0E0E0] text-black text-8xl">
//                 THAT
//               </div>
//             </div>
//           </div>

//           {/* Box 3 */}
//           <div className="w-[90%] h-26 bg-white/10 border border-[#E0E0E0] rounded-xl backdrop-blur-md flex items-center justify-center text-gray-700 text-lg font-semibold">
//             <div className="flex w-full h-full">
//               {/* Left Div - 30% */}
//               <div className="w-[30%] h-full flex items-center justify-start border-r border-[#E0E0E0] text-black text-8xl">
//                 MOVE
//               </div>
//               {/* Middle Div - 20% */}
//               <div className="w-[20%] h-full flex items-center justify-center">
//                 Middle 3
//               </div>
//               {/* Right Div - 50% */}
//               <div className="w-[50%] h-full flex items-center justify-start border-l border-[#E0E0E0] text-black text-8xl">
//                 THE WORLD
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Bottom Left Text */}
//         <div className="absolute bottom-10 left-10 text-[#A1A1A5] text-sm leading-5 animate-fadeUp animate-float hover:-translate-y-1 hover:scale-105 transition-all duration-300">
//           <p>
//             <FlipText text="Interactive Studio," />
//           </p>
//           <p>
//             <FlipText text="Based In BAM, IN." />
//           </p>
//         </div>

//         {/* Bottom Center Text */}
//         <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-[#A2A1A2] text-sm animate-fadeUp animate-float delay-200 hover:-translate-y-1 hover:scale-105 transition-all duration-300 flex items-center gap-2">
//           <FlipText text="SCROLL TO EXPLORE" />
//           <Image
//             src="/arrow-down.svg"
//             alt="Arrow Down"
//             width={18}
//             height={18}
//             className="inline-block"
//           />
//         </div>

//         {/* Bottom Right Text */}
//         <div className="absolute bottom-10 right-10 text-[#A2A1A2] text-sm animate-fadeUp animate-float delay-400 hover:-translate-y-1 hover:scale-105 transition-all duration-300">
//           <FlipText text="Welcome.." />
//         </div>
//       </div>
//     </div>
//   );
// }



"use client";

import React, { useEffect, useRef } from "react";
import Navbar from "../components/Navbar";
import Cursor from "../components/Cursor";
import Image from "next/image";
import { FlipText } from "../components/FlipText";

export default function Dashboard() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const gl = canvas.getContext("webgl")!;
    let animationFrame: number;

    // Resize canvas
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      gl.viewport(0, 0, canvas.width, canvas.height);
    };
    window.addEventListener("resize", resize);
    resize();

    // Shader code
    const vertex = `
      attribute vec2 position;
      void main() {
        gl_Position = vec4(position, 0.0, 1.0);
      }
    `;

    const fragment = `
      precision mediump float;
      uniform vec2 resolution;
      uniform vec2 mouse;
      uniform float time;

      float ripple(vec2 uv, vec2 pos, float t) {
        float d = distance(uv, pos);
        return 0.03 * sin(40.0 * d - 4.0 * t) / (1.0 + 10.0 * d);
      }

      void main() {
        vec2 uv = gl_FragCoord.xy / resolution.xy;
        vec3 color = vec3(0.95, 0.95, 0.95); // light background
        float wave = ripple(uv, mouse, time);
        color += wave * vec3(0.2, 0.4, 0.6); // ripple color
        gl_FragColor = vec4(color, 1.0);
      }
    `;

    const createShader = (type: number, source: string) => {
      const shader = gl.createShader(type)!;
      gl.shaderSource(shader, source);
      gl.compileShader(shader);
      return shader;
    };

    const program = gl.createProgram()!;
    const vShader = createShader(gl.VERTEX_SHADER, vertex);
    const fShader = createShader(gl.FRAGMENT_SHADER, fragment);
    gl.attachShader(program, vShader);
    gl.attachShader(program, fShader);
    gl.linkProgram(program);
    gl.useProgram(program);

    const positionBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]),
      gl.STATIC_DRAW
    );

    const posLoc = gl.getAttribLocation(program, "position");
    gl.enableVertexAttribArray(posLoc);
    gl.vertexAttribPointer(posLoc, 2, gl.FLOAT, false, 0, 0);

    const resLoc = gl.getUniformLocation(program, "resolution");
    const mouseLoc = gl.getUniformLocation(program, "mouse");
    const timeLoc = gl.getUniformLocation(program, "time");

    let mouseX = 0.5, mouseY = 0.5;
    window.addEventListener("mousemove", (e) => {
      mouseX = e.clientX / window.innerWidth;
      mouseY = 1.0 - e.clientY / window.innerHeight;
    });

    const render = (t: number) => {
      gl.uniform2f(resLoc, canvas.width, canvas.height);
      gl.uniform2f(mouseLoc, mouseX, mouseY);
      gl.uniform1f(timeLoc, t * 0.001);
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
      animationFrame = requestAnimationFrame(render);
    };
    render(0);

    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <div className="relative min-h-screen flex flex-col overflow-hidden">
      {/* Water ripple background canvas */}
      <canvas
        ref={canvasRef}
        className="absolute top-0 left-0 w-full h-full"
      />

      <Cursor />
      <Navbar />

      <div className="flex flex-1 items-center justify-center z-10 relative">
        {/* Background boxes container */}
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-8 z-10">
          {/* Box 1 */}
          <div className="w-[90%] h-26 bg-white/10 border border-[#E0E0E0] rounded-xl backdrop-blur-md flex items-center justify-center text-gray-700 text-lg font-semibold">
            <div className="flex w-full h-full">
              <div className="w-[45%] h-full text-black flex items-center justify-start border-r border-[#E0E0E0] text-8xl">
                DESIGNING
              </div>
              <div className="w-[15%] h-full flex items-center justify-center">
                <div className="w-full h-full flex items-center justify-center px-2">
                  <div className="w-full h-full rounded-full overflow-hidden border-2">
                    <video
                      src="/vids/vid1.mp4"
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
              <div className="w-[40%] h-full flex items-center border-l border-[#E0E0E0] text-black text-8xl">
                VISUAL
              </div>
            </div>
          </div>

          {/* Box 2 */}
          <div className="w-[90%] h-26 bg-white/10 border border-[#E0E0E0] rounded-xl backdrop-blur-md flex items-center justify-center text-gray-700 text-lg font-semibold">
            <div className="flex w-full h-full">
              <div className="w-[50%] h-full flex items-center justify-start border-r border-[#E0E0E0] text-black text-8xl">
                STORIES
              </div>
              <div className="w-[20%] h-full flex items-center justify-center">
                Middle 2
              </div>
              <div className="w-[30%] h-full flex items-center justify-center border-l border-[#E0E0E0] text-black text-8xl">
                THAT
              </div>
            </div>
          </div>

          {/* Box 3 */}
          <div className="w-[90%] h-26 bg-white/10 border border-[#E0E0E0] rounded-xl backdrop-blur-md flex items-center justify-center text-gray-700 text-lg font-semibold">
            <div className="flex w-full h-full">
              <div className="w-[30%] h-full flex items-center justify-start border-r border-[#E0E0E0] text-black text-8xl">
                MOVE
              </div>
              <div className="w-[20%] h-full flex items-center justify-center">
                Middle 3
              </div>
              <div className="w-[50%] h-full flex items-center justify-start border-l border-[#E0E0E0] text-black text-8xl">
                THE WORLD
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Left Text */}
        <div className="absolute bottom-10 left-10 text-[#A1A1A5] text-sm leading-5 animate-fadeUp animate-float hover:-translate-y-1 hover:scale-105 transition-all duration-300 z-10">
          <p>
            <FlipText text="Interactive Studio," />
          </p>
          <p>
            <FlipText text="Based In BAM, IN." />
          </p>
        </div>

        {/* Bottom Center Text */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-[#A2A1A2] text-sm animate-fadeUp animate-float delay-200 hover:-translate-y-1 hover:scale-105 transition-all duration-300 flex items-center gap-2 z-10">
          <FlipText text="SCROLL TO EXPLORE" />
          <Image
            src="/arrow-down.svg"
            alt="Arrow Down"
            width={18}
            height={18}
            className="inline-block"
          />
        </div>

        {/* Bottom Right Text */}
        <div className="absolute bottom-10 right-10 text-[#A2A1A2] text-sm animate-fadeUp animate-float delay-400 hover:-translate-y-1 hover:scale-105 transition-all duration-300 z-10">
          <FlipText text="Welcome.." />
        </div>
      </div>
    </div>
  );
}

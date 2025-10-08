// // app/AnotherPage/page.tsx
// "use client";

// import React from "react";

// export default function AnotherPage() {
//   // // Generate floating stars
//   // const stars = Array.from({ length: 20 }, (_, i) => ({
//   //   id: i,
//   //   top: `${Math.random() * 100}%`,
//   //   left: `${Math.random() * 100}%`,
//   //   size: `${Math.random() * 2 + 1}px`,
//   //   delay: `${Math.random() * 2}s`,
//   //   char: Math.random() > 0.5 ? "+" : "★",
//   // }));

//   return (
//     <div className="relative min-h-screen overflow-hidden flex flex-col items-center justify-center gap-20 py-10"
//     style={{ background: "#121315" }}
//     >
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

//       {/* Graphic Design Container */}
//       <div className="w-4/5 max-w-3xl h-64 flex items-center justify-center bg-white/10 backdrop-blur-md border border-white/20 rounded-xl text-white shadow-lg">
//         <h1 className="text-3xl font-bold">Graphic Design</h1>
//       </div>

//       {/* Animation & Video Editing Container */}
//      {/* <div className="w-4/5 max-w-3xl h-64 flex items-center justify-center bg-white/10 backdrop-blur-md border border-white/20 rounded-xl text-white shadow-lg mt-16">
//   <h1 className="text-3xl font-bold text-center">
//     Animation & Video Editing
//   </h1>
// </div> */}

//       {/* Stars animation */}
//       <style jsx>{`
//         @keyframes blink {
//           0%, 100% { opacity: 1; }
//           50% { opacity: 0; }
//         }
//         .blink {
//           animation: blink 1.5s infinite;
//         }
//       `}</style>
//     </div>
//   );
// }

// app/AnotherPage/page.tsx
"use client";

import React from "react";
import Image from "next/image";

export default function AnotherPage() {
  return (
    <div
      className="relative min-h-[100vh] overflow-hidden flex flex-col items-center justify-start gap-10"
      style={{ background: "#121315", fontFamily: "'Righteous', cursive" }}
    >
      {/* Import Google Font */}
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Righteous&display=swap");
      `}</style>

      {/* Top Full-width Container for Text + F Circle */}
      <div className="absolute top-14 left-0 w-full flex items-center justify-between px-10 text-white">
        {/* Top-left text (80%) */}
        <div className="w-4/5 flex flex-col justify-center gap-1">
          <div className="flex flex-wrap items-center gap-2 text-6xl">
            <span>TURNING IDEAS</span>
            <Image
              src="/w-star.svg"
              alt="star"
              width={60}
              height={60}
              className="inline-block"
            />
            <span>INTO VISUAL MAGIC</span>
          </div>
          <span className="text-6xl">FOR YOUR BUSINESS</span>
        </div>

        {/* Top-right animated F circle (20%) */}
        <div className="w-1/5 flex items-center justify-end">
          <div className="w-16 h-16 rounded-full border-2 border-white flex items-center justify-center">
            <span className="animate-spin-slow text-yellow-500 font-bold text-4xl">
              F
            </span>
          </div>
        </div>
      </div>

      {/* Projects Container */}
      <div className="w-full mt-[300px] flex flex-col items-center gap-8">
        {/* Project One Container */}
        <div className="w-[95%] h-[700px] relative rounded-lg overflow-hidden border border-gray-600">
          <Image
            src="/kfc.jpg"
            alt="Project KFC"
            fill
            className="object-cover"
          />
        </div>

        {/* Project Two Container */}
        {/* Project Two Container */}
        <div className="w-[95%] h-[700px] flex justify-between gap-4 rounded-lg overflow-hidden">
          {/* Project Two Left */}
          <div className="w-[49%] h-full bg-gray-800 relative overflow-hidden border border-gray-500 rounded-lg">
            <Image
              src="/cloth.jpeg"
              alt="Project Cloth"
              fill
              className="object-cover"
            />
          </div>

          {/* Project Two Right */}
          <div className="w-[49%] h-full bg-gray-800 relative overflow-hidden border border-gray-500 rounded-lg">
            <Image
              src="/T-Kare.jpeg"
              alt="Project Cloth"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Project Three Container */}
        <div className="w-[95%] h-[700px] rounded-lg overflow-hidden border border-gray-600 bg-transparent">
          {/* Empty Project Three container */}
        </div>

        {/* Project Four Container */}
        <div className="w-[95%] h-[700px] flex justify-between gap-4 rounded-lg overflow-hidden">
          {/* Project Four Left */}
          <div className="w-[49%] h-full bg-white relative overflow-hidden border border-gray-500 rounded-lg flex justify-center items-center">
  <Image
    src="/maga.jpeg"
    alt="Project Cloth"
    width={200}       // set your desired width
    height={200}      // set your desired height
    className="object-cover rounded-lg"
  />
</div>


          {/* Project Four Right */}
          <div className="w-[49%] h-full bg-gray-800 relative overflow-hidden border border-gray-500 rounded-lg">
            <Image
              src="/T-Kare.jpeg"
              alt="Project Cloth"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>

      {/* Gradient Bottom Border */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-[#121315] via-[#f4f4f4] to-[#121315]" />

      {/* Spin Animation */}
      <style jsx>{`
        @keyframes spin-slow {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
        .animate-spin-slow {
          animation: spin-slow 4s linear infinite;
        }
      `}</style>
    </div>
  );
}

// "use client";

// import React from "react";

// export default function WhatWeDo() {
//   const services = [
//     {
//       title: "Typography",
//       description:
//         "Your logo is your first impression and it needs to dominate. I craft distinctive, timeless logos that capture the essence of your brand in a single mark. Every design is built with purpose and scalability.",
//     },
//     {
//       title: "Motion Graphics",
//       description:
//         "We create stunning motion graphics that bring your ideas to life, enhancing storytelling and engaging your audience with dynamic visuals.",
//     },
//     {
//       title: "Video Editing",
//       description:
//         "Our video editing services transform raw footage into polished, professional content that captures attention and communicates your message clearly.",
//     },
//     {
//       title: "Colour Grading",
//       description:
//         "We enhance your visuals with expert colour grading to set the perfect mood, ensuring your videos look cinematic and consistent across all platforms.",
//     },
//   ];

//   return (
//     <div className="flex flex-col items-center min-h-screen bg-[#121315] px-6 pt-12">
//       {/* Top Left Heading */}
//       <h2 className="self-start text-2xl sm:text-3xl font-bold text-white mb-4">
//         What We Do
//       </h2>

//       {/* Top Center Heading */}
//       <h1 className="text-3xl sm:text-4xl font-bold text-white mb-12 text-center w-full">
//         Services We Offer
//       </h1>

//       {/* 2x2 Grid */}
//       {/* 2x2 Grid */}
// <div className="grid grid-cols-2 gap-12 w-[70%] max-w-[90rem]">
//   {services.map((service, index) => (
//     <div
//       key={index}
//       className="relative p-8 h-[20rem] bg-[#121315] border-[0.5px] border-[#C4C3C4] rounded-xl text-white transition-transform duration-300"
//     >
//       {/* Top-right button */}
//       <button className="absolute top-4 right-4 w-12 h-12 rounded-full bg-[#121315] border-[1px] border-[#ABAAAB] hover:bg-[#FFD700] transition-colors duration-300" />

//       {/* Box content */}
//       <div className="flex flex-col gap-6">
//         <h3 className="text-2xl font-semibold flex items-center gap-2">
//           {service.title === "Video Editing" && (
//             <img src="/Pause.svg" alt="Pause Icon" className="w-6 h-6" />
//           )}
//           {service.title}
//         </h3>
//         <p className="text-lg font-medium">{service.description}</p>
//       </div>
//     </div>
//   ))}
// </div>
//     </div>
//   );
// }


"use client";

import React from "react";

export default function WhatWeDo() {
  return (
    <div className="flex flex-col h-[230vh] bg-[#ffffff]">
      {/* Top Div - 50% height */}
      <div className="w-full h-[50%] flex gap-4 p-4">
        {/* Left Div - 40% with image */}
        <div
          className="w-[40%] relative p-6 rounded-lg bg-cover bg-center"
          style={{ backgroundImage: "url('/typography.jpeg')" }}
        >
          <div className="absolute bottom-4 left-4 text-white text-2xl font-bold px-2 py-1 rounded">
            Typography
          </div>
        </div>

        {/* Middle Div - 30% */}
        <div className="w-[30%] p-6 rounded-lg bg-[#ffffff] border-1">
          {/* Content for middle div */}
        </div>

        {/* Right Div - 30% */}
        <div className="w-[30%] relative p-6 rounded-lg bg-[#5A5B5F]">
          <div className="absolute bottom-4 left-4 text-white text-2xl font-bold px-2 py-1 rounded">
            Motion Graphics
          </div>
        </div>
      </div>

      {/* Bottom Div - 50% height */}
      <div className="w-full h-[50%] flex gap-4 p-4">
        {/* Left Div - 30% */}
        <div className="w-[30%] relative p-6 rounded-lg bg-[#6A6B6F]">
          <div className="absolute bottom-4 left-4 text-white text-2xl font-bold px-2 py-1 rounded">
            Video Editing
          </div>
        </div>

        {/* Middle Div - 30% */}
        <div className="w-[30%] p-6 rounded-lg bg-[#ffffff] border-1">
          {/* Content for middle div */}
        </div>

        {/* Right Div - 40% */}
        <div
          className="w-[40%] relative p-6 rounded-lg bg-[#8A8B8F] bg-cover bg-center"
          style={{ backgroundImage: "url('/typography.jpeg')" }}
        >
          <div className="absolute bottom-4 left-4 text-white text-2xl font-bold px-2 py-1 rounded">
            Colour Grading
          </div>
        </div>
      </div>
    </div>
  );
}




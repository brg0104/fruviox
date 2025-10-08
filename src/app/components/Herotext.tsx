// "use client";

// import React from "react";

// export default function HeroText() {
//   const steps = [
//     "Logo Development",
//     "Brand Strategy",
//     "Typography",
//     "Motion Design",
//     "2D Design",
//     "Flyer Design",
//     "Video Editing",
//     "Colour Grading",
//   ];

//   const leftSteps = steps.slice(0, 4);
//   const rightSteps = steps.slice(4);

//   return (
//     <div className="flex flex-col items-center min-h-screen bg-[#f4f4f4] px-6 pt-24">
//       {/* Import Righteous for main paragraph */}
//       <style>
//         {`@import url('https://fonts.googleapis.com/css2?family=Righteous&display=swap');`}
//       </style>

//       {/* Import Changa for steps */}
//       <style>
//         {`@import url('https://fonts.googleapis.com/css2?family=Changa:wght@200..800&display=swap');`}
//       </style>

//       {/* "Our Mission" label */}
//         <span className="text-1px font-bold text-black w-full max-w-[90%] lg:max-w-[1200px] text-left mb-1 ml-9 block">
//            Our Mission
//         </span>

//       {/* Horizontal line */}
//       <hr className="w-4/5 border-t-1 border-black mb-6 mx-auto" />


//       {/* Main Paragraph */}
//       <span className="font-righteous text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-black font-bold leading-snug text-left w-full max-w-[90%] lg:max-w-[1200px] mb-15">
//         At Fruviox Studio, we combine the art of design with the power of motion. Our
//         goal? To transform your ideas into visuals that captivate, inspire, and engage.
//       </span>

//       {/* Step-by-Step Services */}
//       <div className="flex w-full max-w-[800px] ml-auto gap-16">
//         {/* Left Column */}
//         <div className="flex flex-col gap-3 text-lg sm:text-xl" style={{ fontFamily: "'Changa', sans-serif" }}>
//           {leftSteps.map((step, index) => (
//             <div
//               key={index}
//               className="group flex items-center gap-3 text-gray-400 hover:text-black transition-colors duration-300 cursor-pointer"
//             >
//               <span className="w-2 h-2 bg-black rounded-full opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"></span>
//               {step}
//             </div>
//           ))}
//         </div>

//         {/* Right Column */}
//         <div className="flex flex-col gap-3 text-lg sm:text-xl mt-10" style={{ fontFamily: "'Changa', sans-serif" }}>
//           {rightSteps.map((step, index) => (
//             <div
//               key={index}
//               className="group flex items-center gap-3 text-gray-400 hover:text-black transition-colors duration-300 cursor-pointer"
//             >
//               <span className="w-2 h-2 bg-black rounded-full opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"></span>
//               {step}
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }


// "use client";

// import React from "react";

// export default function HeroText() {
//   return (
//     <div className="flex flex-col min-h-[75vh] bg-[#ffffff] px-6 pt-16">
//       <style>
//         {`@import url('https://fonts.googleapis.com/css2?family=Righteous&display=swap');`}
//       </style>

//       <div className="flex flex-col lg:flex-row w-full max-w-[1200px] justify-between">
//         {/* Left Side - Capsule Label */}
//         <div className="lg:w-1/4">
//           <div className="bg-black text-white font-bold px-24 py-12 rounded-full shadow-md">
//             Our Mission
//           </div>
//         </div>

//         {/* Right Side - Line + Paragraph */}
//         <div className="flex flex-col lg:w-3/4 lg:items-end">
//           <hr className="w-full border-t border-black mb-4" />
//           <span className="font-righteous text-lg sm:text-xl md:text-2xl lg:text-3xl text-black font-bold leading-snug text-right">
//             At Fruviox Studio, we combine the art of design with the power of motion. Our
//             goal? To transform your ideas into visuals that captivate, inspire, and engage.
//           </span>
//         </div>
        
//       </div>
//     </div>
//   );
// }



























"use client";

import React from "react";

export default function HeroText() {
  return (
    <div className="flex flex-col min-h-[75vh] bg-[#FF531A] px-6 pt-16 items-center justify-center ">
      <style>
        {`@import url('https://fonts.googleapis.com/css2?family=Righteous&display=swap');`}
      </style>

      <div className="flex w-full justify-center gap-12">
        {/* Left Side - Circle with F */}
        <div className="w-[250px] h-[250px] relative flex items-center justify-center">
          {/* Circle Background */}
          <div className="absolute w-full h-full rounded-full flex items-center justify-center">
            <span className="text-white font-righteous text-6xl font-bold">F</span>
          </div>

          {/* Circular Text */}
          <svg viewBox="0 0 200 200" className="absolute w-full h-full">
            <defs>
              <path
                id="circlePath"
                d="M100,100 m-75,0 a75,75 0 1,1 150,0 a75,75 0 1,1 -150,0"
              />
            </defs>

            {/* Group to rotate text smoothly */}
            <g className="animate-spin-slow origin-[100px_100px]">
              <text className="text-white font-bold text-xs">
                <textPath
                  href="#circlePath"
                  textAnchor="middle"
                  startOffset="50%"
                  className="fill-white"
                >
                  OUR MISSION • OUR MISSION • OUR MISSION • OUR MISSION • OUR MISSION • OUR MISSION •
                </textPath>
              </text>
            </g>
          </svg>
        </div>

        {/* Right Side Paragraph */}
        <div className="w-[60%] flex flex-col items-end border-t border-black p-4" >
          <span className="font-righteous text-lg sm:text-xl md:text-2xl lg:text-3xl text-white font-bold leading-snug text-left">
            At Fruviox Studio, we combine the art of design with the power of motion. Our
            goal? To transform your ideas into visuals that captivate, inspire, and engage.
          </span>
        </div>
      </div>

      {/* Tailwind custom animation */}
      <style>
        {`
          @keyframes spin-slow {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
          .animate-spin-slow {
            animation: spin-slow 15s linear infinite;
          }
        `}
      </style>
    </div>
  );
}

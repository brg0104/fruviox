// "use client";

// import React from "react";

// export default function MovingText() {
//   const text = "FRUVIOX";

//   return (
//     <div
//        className="relative w-full h-64 sm:h-80 md:h-96 flex flex-col items-center justify-center overflow-hidden px-4"
//         style={{ backgroundColor: "#F4F4F4" }}
//     >
//       {/* Top ticker (Left ➝ Right) */}
//       <div className="w-full overflow-hidden">
//         <div className="flex animate-leftToRight whitespace-nowrap">
//           {Array(20)
//             .fill(text)
//             .map((t, i) => (
//               <span
//                 key={i}
//                 className="text-4xl sm:text-5xl md:text-6xl font-bold text-black mr-6 sm:mr-8"
//               >
//                 {t}
//               </span>
//             ))}
//         </div>
//       </div>

//       {/* Bottom ticker (Right ➝ Left) */}
//       <div className="w-full overflow-hidden mt-6 sm:mt-8 md:mt-10">
//         <div className="flex animate-rightToLeft whitespace-nowrap">
//           {Array(20)
//             .fill(text)
//             .map((t, i) => (
//               <span
//                 key={i}
//                 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-600 mr-6 sm:mr-8"
//               >
//                 {t}
//               </span>
//             ))}
//         </div>
//       </div>
//     </div>
//   );
// }

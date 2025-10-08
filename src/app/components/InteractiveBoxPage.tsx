// // app/components/InteractiveBoxPage.tsx
// "use client";

// import React from "react";

// export default function InteractiveBoxPage() {
//   return (
//     <div className="w-full h-screen flex items-center justify-center bg-[#F4F4F4]">
//       {/* Main Rounded Box */}
//       <div className="relative flex items-center justify-center gap-x-8 rounded-full w-[90%] h-[50%] bg-[#E9E9E9] px-4">
//         {/* 4 Inner Circles */}
//         {Array.from({ length: 4 }).map((_, index) => (
//           <div
//             key={index}
//             className={`
//               flex-shrink-0 w-[20%] h-[70%] rounded-full bg-[#F0F0F0] 
//               transition-colors duration-300 ease-in-out
//               hover:bg-[#FFD90C]
//             `}
//           />
//         ))}
//       </div>
//     </div>
//   );
// }


// app/components/InteractiveBoxPage.tsx
"use client";

import React, { useState } from "react";

export default function InteractiveBoxPage() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - left) / width - 0.5) * 30; // range -15 to 15
    const y = ((e.clientY - top) / height - 0.5) * 30; // range -15 to 15
    setMousePos({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
  };

  return (
    <div className="w-full h-screen flex items-center justify-center bg-[#F4F4F4]">
      {/* Main Rounded Box */}
      <div
        className="relative flex items-center justify-center gap-x-8 rounded-full w-[90%] h-[50%] bg-[#E9E9E9] px-4
                   transition-transform duration-300 ease-out"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: `rotateX(${-mousePos.y}deg) rotateY(${mousePos.x}deg)`,
        }}
      >
        {/* 4 Inner Circles */}
        {Array.from({ length: 4 }).map((_, index) => (
          <div
            key={index}
            className={`
              flex-shrink-0 w-[20%] h-[70%] rounded-full bg-[#F0F0F0] 
              transition-all duration-300 ease-out
              hover:bg-[#FFD90C] hover:scale-110 hover:shadow-xl
            `}
          />
        ))}
      </div>
    </div>
  );
}

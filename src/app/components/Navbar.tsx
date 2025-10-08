"use client";

import { Luckiest_Guy } from "next/font/google";
import { Button } from "./Button";
import { useRouter } from "next/navigation";

const luckiestGuy = Luckiest_Guy({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-luckiest-guy",
});

export default function Navbar() {
  const router = useRouter();

  const handleNavigate = () => {
    // Optional: Add delay/animation logic here if you want transition
    router.push("/contact"); // make sure this matches your folder name
  };

  return (
    <nav className="fixed top-6 left-0 w-full z-50 bg-transparent animate-slide-down">
      <div className="w-full px-8">
        <div
          className="flex justify-between items-center h-16 rounded-lg"
          // style={{ background: "#FFFFFF", padding: "0 1.5rem" }}
          style={{padding: "0 1.5rem" }}
        >
          {/* Logo */}
          <div className="flex-shrink-0 cursor-pointer" onClick={() => router.push("/")}>
            <span
              className={`${luckiestGuy.className} text-3xl text-black animate-fade-in`}
            >
              <span className="text-black">F</span>
              <span className="text-yellow-500">.</span>
            </span>
          </div>

          {/* Contact Button */}
          <div>
            <Button
              variant="default"
              size="sm"
              onClick={handleNavigate}
              className="bg-white text-black w-40 h-10 rounded-full flex items-center hover:scale-105 transition-transform duration-300 shadow-sm"
            >
              <span
                className="w-4 h-4 rounded-full bg-yellow-500 ml-2 animate-pulse"
                style={{ backgroundColor: "#FFD700" }}
              ></span>
              <span className="flex-1 text-center">Let's Begin</span>
            </Button>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideDown {
          0% {
            transform: translateY(-50px);
            opacity: 0;
          }
          100% {
            transform: translateY(0);
            opacity: 1;
          }
        }

        @keyframes fadeIn {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }

        .animate-slide-down {
          animation: slideDown 0.8s ease-out forwards;
        }

        .animate-fade-in {
          animation: fadeIn 1s ease-out forwards;
        }
      `}</style>
    </nav>
  );
}

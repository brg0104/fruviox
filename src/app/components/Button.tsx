"use client";

import * as React from "react";
import { cn } from "../lib/utils";

const buttonVariants = {
  variant: {
    default: "bg-primary text-primary-foreground hover:bg-primary/90",
    destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
    outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
    secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
    ghost: "hover:bg-accent hover:text-accent-foreground",
    link: "text-primary underline-offset-4 hover:underline",
    gradient: "bg-gradient-to-r from-blue-500 to-white text-white hover:from-blue-600 hover:to-gray-200",
  },
  size: {
    default: "h-10 px-4 py-2",
    sm: "h-9 rounded-md px-3",
    lg: "h-11 rounded-md px-8",
    icon: "h-10 w-10",
  },
};

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: keyof typeof buttonVariants.variant;
  size?: keyof typeof buttonVariants.size;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-transform focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:scale-95",
          buttonVariants.variant[variant],
          buttonVariants.size[size],
          className
        )}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";
























// "use client";

// import React, { FC, ReactNode } from "react";
// import Link from "next/link";

// type ButtonProps = {
//   children: ReactNode;
//   href?: string;           // Optional: if provided, button becomes a link
//   className?: string;
// };

// const Button: FC<ButtonProps> = ({ children, href, className }) => {
//   const content = (
//     <button
//       className={`bg-white text-black w-40 h-10 rounded-full flex items-center justify-center hover:scale-105 transition-transform duration-300 ${className}`}
//     >
//       <span
//         className="w-4 h-4 rounded-full bg-yellow-500 ml-2 animate-pulse"
//         style={{ backgroundColor: "#FFD700" }}
//       ></span>
//       <span className="flex-1 text-center">{children}</span>
//     </button>
//   );

//   // If href is provided, wrap button in Link
//   return href ? <Link href={href}>{content}</Link> : content;
// };

// export default Button;

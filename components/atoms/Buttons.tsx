import React, { forwardRef } from "react";
import clsx from "clsx"; // Optional: for better class management

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "second" | "outline";
}

export const Buttons = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "primary", children, className = "", ...props }, ref) => {
    const variantClass = {
      primary: "bg-blue-500 text-white",
      second: "bg-gray-500 text-white",
      outline: "border border-gray-500 text-gray-500",
    }[variant];

    return (
      <button ref={ref} className={clsx(variantClass, className)} {...props}>
        {children || "Submit"}
      </button>
    );
  }
);

Buttons.displayName = "Buttons";

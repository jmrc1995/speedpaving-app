import React, { forwardRef } from "react"; //Injecting the program.

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "second" | "outline";
}

const Buttons = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "primary", children, className = "", ...props }, ref) => {
    return <button> Submit </button>;
  }
);

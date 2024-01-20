import React, { ButtonHTMLAttributes } from "react";
import classes from "./button.module.scss";

export function Button({ variant, icon, vw, children, ...rest }: ButtonProps) {
   return (
      <button
         {...rest}
         className={`${classes.button} ${vw ? classes.vw : null} ${variant === "outlined" ? classes.outlined : classes.filled}`}
      >
         {icon}
         {children}
      </button>
   );
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
   variant?: "outlined" | "filled";
   icon?: React.ReactNode;
   children?: React.ReactNode;
   vw?: boolean;
   fw?: boolean;
}

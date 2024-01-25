import React, { ButtonHTMLAttributes } from "react";
import classes from "./button.module.scss";
import { Loader } from "./loader";

export function Button({ variant, loading, icon, vw, children, ...rest }: ButtonProps) {
   return (
      <button
         {...rest}
         disabled={loading}
         className={`${classes.button} ${vw ? classes.vw : null} ${variant === "outlined" ? classes.outlined : classes.filled}`}
      >
         {icon}
         {loading ? <Loader /> : children}
      </button>
   );
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
   variant?: "outlined" | "filled";
   icon?: React.ReactNode;
   children?: React.ReactNode;
   vw?: boolean;
   fw?: boolean;
   loading?: boolean;
}

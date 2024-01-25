// input.module.tsx
import React, { forwardRef, InputHTMLAttributes, TextareaHTMLAttributes } from "react";
import classes from "./input.module.scss";
import dynamic from "next/dynamic";

const Lottie = dynamic(() => import("lottie-react"), {
   ssr: false,
});

export const Input = forwardRef(
   (
      { lottie, title, placeholder, area, required, ...rest }: InputProps,
      ref: React.ForwardedRef<HTMLInputElement | HTMLTextAreaElement>
   ) => {
      return (
         <div className={classes.container}>
            <div className={classes.flex_row}>
               <Lottie animationData={lottie} className={classes.lottie} />
               <p>
                  {title} {required && <span>*</span>}
               </p>
            </div>

            {area ? (
               <textarea
                  {...(rest as TextareaHTMLAttributes<HTMLTextAreaElement>)}
                  ref={ref as React.Ref<HTMLTextAreaElement>}
                  placeholder={placeholder}
               />
            ) : (
               <input
                  {...(rest as InputHTMLAttributes<HTMLInputElement>)}
                  ref={ref as React.Ref<HTMLInputElement>}
                  placeholder={placeholder}
               />
            )}
         </div>
      );
   }
);

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
   lottie: any;
   title: string;
   placeholder?: string;
   required?: boolean;
   area?: boolean;
}

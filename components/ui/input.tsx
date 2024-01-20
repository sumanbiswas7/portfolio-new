import classes from "./input.module.scss";
import dynamic from "next/dynamic";

const Lottie = dynamic(() => import("lottie-react"), {
   ssr: false,
});

export function Input({ lottie, title, placeholder, area, required }: Props) {
   return (
      <div className={classes.container}>
         <div className={classes.flex_row}>
            <Lottie animationData={lottie} className={classes.lottie} />
            <p>
               {title} {required && <span>*</span>}
            </p>
         </div>

         {area ? <textarea placeholder={placeholder} /> : <input placeholder={placeholder} />}
      </div>
   );
}

interface Props {
   lottie: any;
   title: string;
   placeholder?: string;
   required?: boolean;
   area?: boolean;
}

import dynamic from "next/dynamic";
import lottie from "../../public/contact/lotties/success.json";
import classes from "./success-popup.module.scss";
import { useState } from "react";

const Lottie = dynamic(() => import("lottie-react"), {
   ssr: false,
});

export function SuccessPopup() {
   const [hide, setHide] = useState(false);

   if (hide) return null;

   return (
      <div className={classes.full_screen_overlay} onClick={() => setHide(true)}>
         <div className={classes.modal}>
            <Lottie animationData={lottie} className={classes.lottie} />
            <p>Email Sent</p>
         </div>
      </div>
   );
}

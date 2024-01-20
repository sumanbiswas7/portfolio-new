import Lottie from "lottie-react";
import { SectionTitle } from "../ui/section-title";
import classes from "./contact.module.scss";
import { Input } from "../ui/input";

import name_lottie from "../../public/contact/lotties/name.json";
import email_lottie from "../../public/contact/lotties/email.json";
import message_lottie from "../../public/contact/lotties/message.json";
import phone_lottie from "../../public/contact/lotties/phone.json";
import { Button } from "../ui/button";
import React from "react";

export function ContactSection() {
   async function handleSendMessage(e: React.MouseEvent<HTMLButtonElement>) {
      e.preventDefault();
   }

   return (
      <div className={classes.container} id="about">
         <SectionTitle title="Contact Me" />

         <div className={classes.centered_div}>
            <div className={classes.img_div}></div>
            <form className={classes.form}>
               <div className={classes.flex_row}>
                  <Input lottie={name_lottie} title="Name" required placeholder="John Doe" />
                  <Input lottie={phone_lottie} title="Phone" placeholder="+123 3456 000" />
               </div>
               <Input lottie={email_lottie} title="Email" required placeholder="johndoe@gmail.com" />
               <Input lottie={message_lottie} title="Message" required placeholder="hi there!" area />

               <div className={classes.flex_end}>
                  <Button fw onClick={handleSendMessage}>
                     Send
                  </Button>
               </div>
            </form>
         </div>
      </div>
   );
}

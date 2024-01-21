import { SectionTitle } from "../ui/section-title";
import classes from "./contact.module.scss";
import { Input } from "../ui/input";

import name_lottie from "../../public/contact/lotties/name.json";
import email_lottie from "../../public/contact/lotties/email.json";
import message_lottie from "../../public/contact/lotties/message.json";
import phone_lottie from "../../public/contact/lotties/phone.json";
import { Button } from "../ui/button";
import React, { useRef, useState } from "react";
import { Toaster, toast } from "sonner";
import { validMessage } from "../../utils/validate-message";
import { SuccessPopup } from "../popup/success-popup";
import { sendEmail } from "../../server/send-email";
import { StatusCode } from "../../utils/http_response";

export function ContactSection() {
   const [loading, setLoading] = useState(false);
   const [success, setSuccess] = useState(false);

   const nameRef = useRef<HTMLInputElement | null>(null);
   const phoneRef = useRef<HTMLInputElement | null>(null);
   const emailRef = useRef<HTMLInputElement | null>(null);
   const msgRef = useRef<HTMLTextAreaElement | null>(null);

   async function handleSendMessage(e: React.MouseEvent<HTMLButtonElement>) {
      try {
         e.preventDefault();
         const form = {
            name: nameRef.current?.value,
            phone: phoneRef.current?.value,
            email: emailRef.current?.value,
            message: msgRef.current?.value,
         };

         const valid = validMessage(form);
         if (valid.valid === false) return toast.error(valid.msg);
         setLoading(true);

         const res = await sendEmail(form);
         setLoading(false);

         if (res.statusCode !== StatusCode.OK) return toast.error(`Email not sent`);

         // reset the states after success
         resetInputs();
         setSuccess(true);
      } catch (error) {
         console.log(error);
         setLoading(false);
      }
   }

   function resetInputs() {
      (nameRef.current as any).value = "";
      (phoneRef.current as any).value = "";
      (emailRef.current as any).value = "";
      (msgRef.current as any).value = "";
   }

   return (
      <div className={classes.container} id="about">
         <SectionTitle title="Contact Me" />

         <div className={classes.centered_div}>
            <div className={classes.img_div}></div>
            <form className={classes.form}>
               <div className={classes.flex_row}>
                  <Input ref={nameRef} lottie={name_lottie} title="Name" required placeholder="John Doe" />
                  <Input ref={phoneRef} lottie={phone_lottie} title="Phone" placeholder="+123 3456 000" />
               </div>
               <Input ref={emailRef} lottie={email_lottie} title="Email" required placeholder="johndoe@gmail.com" />
               <Input ref={msgRef} lottie={message_lottie} title="Message" required placeholder="hi there!" area />

               <div className={classes.flex_end}>
                  <Button loading={loading} fw onClick={handleSendMessage}>
                     Send
                  </Button>
               </div>
            </form>
         </div>

         {success && <SuccessPopup />}
         <Toaster />
      </div>
   );
}

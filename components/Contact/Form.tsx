import styles from "./Form.module.scss";
import { Input } from "./InputElement";
import name_lottie from "../../public/lotties/name.json";
import email_lottie from "../../public/lotties/email.json";
import message_lottie from "../../public/lotties/message.json";
import phone_lottie from "../../public/lotties/phone.json";
import { useRef } from "react";

export function Form() {
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);

  function handleSubmit(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    const name = nameRef.current?.value;
    const email = emailRef.current?.value;
    const phone = phoneRef.current?.value;
    const message = messageRef.current?.value;

    const data = { name, email, phone, message };
    console.log(data);
  }

  return (
    <form className={styles.form}>
      <h2>GET IN TOUCH</h2>
      <div className={styles.first_row}>
        <Input
          title="Name"
          required
          lottie={name_lottie}
          forwardedRef={nameRef}
        />
        <Input title="Phone" lottie={phone_lottie} forwardedRef={phoneRef} />
      </div>
      <Input
        title="Email"
        required
        lottie={email_lottie}
        forwardedRef={emailRef}
      />
      <Input
        title="Message"
        area
        required
        lottie={message_lottie}
        forwardedAreaRef={messageRef}
      />
      <button onClick={handleSubmit}>SEND</button>
    </form>
  );
}

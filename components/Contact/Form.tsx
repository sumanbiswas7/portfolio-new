import styles from "./Form.module.scss";
import { Input } from "./InputElement";
import name_lottie from "../../public/lotties/name.json";
import email_lottie from "../../public/lotties/email.json";
import message_lottie from "../../public/lotties/message.json";
import phone_lottie from "../../public/lotties/phone.json";
import { useRef, useState } from "react";
import { validate } from "../../server/validate";
import { postMail } from "../../server/postMail";
import { Loader } from "@mantine/core";
import {
  showErrorNotification,
  showSuccessNotification,
  showWarnNotification,
} from "../../utils/notifications";
import { StatusCode } from "../../utils/http_response";

export function Form() {
  const [loading, setLoading] = useState(false);
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);

  async function handleSubmit(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    const name = nameRef.current?.value;
    const email = emailRef.current?.value;
    const phone = phoneRef.current?.value;
    const message = messageRef.current?.value;
    const data = { name, email, phone, message };

    const validation = validate(data);
    if (!validation.valid) return showWarnNotification(validation.msg);

    setLoading(true);
    const res = await postMail(data);

    if (res.statusCode === StatusCode.OK) {
      setLoading(false);
      clearFormInputs();
      return showSuccessNotification("Message sent successfully");
    } else {
      setLoading(false);
      return showErrorNotification(res.message);
    }
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
          type="text"
        />
        <Input title="Phone" lottie={phone_lottie} forwardedRef={phoneRef} />
      </div>
      <Input
        title="Email"
        required
        lottie={email_lottie}
        forwardedRef={emailRef}
        type={"email"}
      />
      <Input
        title="Message"
        area
        required
        lottie={message_lottie}
        forwardedAreaRef={messageRef}
      />
      <button disabled={loading} type={"submit"} onClick={handleSubmit}>
        {loading ? <Loader color="#fff" size={20} /> : "SEND"}
      </button>
    </form>
  );

  /**
   * -----------------
   *     Helpers
   * -----------------
   */

  function clearFormInputs() {
    nameRef.current!.value = "";
    phoneRef.current!.value = "";
    emailRef.current!.value = "";
    messageRef.current!.value = "";
  }
}

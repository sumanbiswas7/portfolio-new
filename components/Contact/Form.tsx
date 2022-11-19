import styles from "./Form.module.scss";
import { Input } from "./InputElement";
import name_lottie from "../../public/lotties/name.json";
import email_lottie from "../../public/lotties/email.json";
import message_lottie from "../../public/lotties/message.json";
import phone_lottie from "../../public/lotties/phone.json";

export function Form() {
  return (
    <form className={styles.form}>
      <h2>GET IN TOUCH</h2>
      <div className={styles.first_row}>
        <Input title="Name" required lottie={name_lottie} />
        <Input title="Phone" lottie={phone_lottie} />
      </div>
      <Input title="Email" required lottie={email_lottie} />
      <Input title="Message" area required lottie={message_lottie} />
      <button>SEND</button>
    </form>
  );
}

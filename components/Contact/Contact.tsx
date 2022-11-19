import styles from "./Contact.module.scss";
import name_lottie from "../../public/lotties/name.json";
import phone_lottie from "../../public/lotties/phone.json";
import email_lottie from "../../public/lotties/email.json";
import message_lottie from "../../public/lotties/message.json";
import { InputArea, InputLine } from "./Input";
import { InfoBox } from "./InfoBox";
import { Form } from "./Form";

export function Contact() {
  return (
    <div id="contact" className={styles.page_container}>
      <InfoBox />
      <div className={styles.form_container}>
        <Form />
      </div>
    </div>
  );
}

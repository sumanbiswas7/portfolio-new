import styles from "./Contact.module.scss";
import name_lottie from "../../public/lotties/name.json";
import phone_lottie from "../../public/lotties/phone.json";
import email_lottie from "../../public/lotties/email.json";
import message_lottie from "../../public/lotties/message.json";
import { InputArea, InputLine } from "./Input";
import { AddressBox } from "./AddressBox";


export function Contact() {
  return (
    <div id="contact" className={styles.page_container}>
      <div className={styles.main_box}>
        <AddressBox />
        <form className={styles.form}>
          <p>GET IN TOUCH</p>
          <div className={styles.row_1}>
            <InputLine data={name_lottie} title="Name*" />
            <InputLine data={phone_lottie} title="Phone" />
          </div>
          <InputLine data={email_lottie} title="Email*" />
          <InputArea data={message_lottie} title="Message*" />
          <button className={styles.send_btn}>SEND</button>
        </form>
      </div>
    </div>
  );
}

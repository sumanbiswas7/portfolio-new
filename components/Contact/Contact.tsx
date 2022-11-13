import styles from "./Contact.module.scss";
import Lottie from "lottie-react";
import name_lottie from "../../public/lotties/name.json";
import phone_lottie from "../../public/lotties/phone.json";
import email_lottie from "../../public/lotties/email.json";
import message_lottie from "../../public/lotties/message.json";

export function Contact() {
  return (
    <div id="contact" className={styles.page_container}>
      <form className={styles.form}>
        <p className={styles.text}>GET IN TOUCH</p>
        <div className={styles.first_row_container}>
          <Input data={name_lottie} title="Name*" className={styles.name_box} />
          <Input data={phone_lottie} title="Phone" />
        </div>
        <Input
          data={email_lottie}
          title="Email*"
          className={styles.email_box}
        />
        <InputArea
          data={message_lottie}
          title="Message*"
          className={styles.msg_box}
        />
        <button className={styles.send_btn}>SEND</button>
      </form>
    </div>
  );
}

interface Props {
  data: any;
  title?: string;
  style?: any;
  className?: any;
}

function Input({ data, title, style, className }: Props) {
  return (
    <div
      id={styles.box}
      style={style}
      className={`${styles.input_box} ${className}`}
    >
      <Lottie animationData={data} className={styles.icon} />
      <input placeholder={title || ""} id={styles.input} />
    </div>
  );
}

function InputArea({ data, title, className }: Props) {
  return (
    <div className={`${styles.inputarea_box} ${styles.input_box} ${className}`}>
      <Lottie
        animationData={data}
        className={`${styles.icon} ${styles.area_icon}`}
      />
      <textarea placeholder={title || ""} />
    </div>
  );
}

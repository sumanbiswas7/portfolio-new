import styles from "./Contact.module.scss";
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

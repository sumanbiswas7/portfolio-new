import styles from "./Form.module.scss";
import { Input } from "./InputElement";

export function Form() {
  return (
    <form className={styles.form}>
      <h2>GET IN TOUCH</h2>
      <div className={styles.first_row}>
        <Input title="Name" required />
        <Input title="Phone" />
      </div>
      <Input title="Email" required />
      <Input title="Message" area required />
      <button>SEND</button>
    </form>
  );
}

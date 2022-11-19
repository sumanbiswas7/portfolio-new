import styles from "./Form.module.scss";
import { Input } from "./InputElement";

export function Form() {
  return (
    <form className={styles.form}>
      <Input title="Name" />
    </form>
  );
}

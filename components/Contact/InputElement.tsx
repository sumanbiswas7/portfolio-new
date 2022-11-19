import styles from "./InputElement.module.scss";

export function Input({ title }) {
  return (
    <div className={styles.input_container}>
      <label> {title} </label>
      <input placeholder={title} />
    </div>
  );
}

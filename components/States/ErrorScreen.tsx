import styles from "./ErrorScreen.module.scss";

export function ErrorScreen({ msg }: { msg: string }) {
  return (
    <div className={styles.container}>
      <h1>Error: {msg}</h1>
    </div>
  );
}

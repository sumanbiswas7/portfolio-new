import styles from "./Terminal.module.scss";

export default function Terminal() {
  return (
    <div className={styles.new_page}>
      <div className={styles.terminal_container}>
        <div className={styles.terminal_box_head}>
          <span className={styles.head_circle}></span>
          <span className={styles.head_circle}></span>
          <span className={styles.head_circle}></span>
        </div>
        <div className={styles.terminal_box_content}></div>
      </div>
    </div>
  );
}

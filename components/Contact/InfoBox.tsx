import styles from "./InfoBox.module.scss";

export function InfoBox() {
  return (
    <div className={styles.info_box}>
      <div className={styles.box_1}>
        <div className={styles.quote_box}>
          If you want to see more pictures like behind, do not forget to follow
          me on instagram :)
        </div>
      </div>
      <div className={styles.box_2}></div>
    </div>
  );
}

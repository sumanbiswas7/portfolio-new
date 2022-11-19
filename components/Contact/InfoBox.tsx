import { Description } from "./Description";
import styles from "./InfoBox.module.scss";

export function InfoBox() {
  return (
    <div className={styles.info_box}>
      <div className={styles.box_1}>
        <div className={styles.quote_box}>
          <p>
            If you want to see more pictures like behind, do not forget to
            follow me on instagram :)
          </p>
          <User />
        </div>
      </div>
      <div className={styles.box_2}>
        <Description />
      </div>
    </div>
  );
}

function User() {
  return (
    <div className={styles.user_box}>
      <img className={styles.user_img} src="./contact/user.webp" />
      <div>
        <p>Suman Biswas</p>
        <p>FrontEnd dev</p>
      </div>
    </div>
  );
}

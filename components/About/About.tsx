import styles from "./About.module.scss";
import { Description } from "./Description";

export function About() {
  return (
    <div id="about" className={styles.page_container}>
      <img
        src="./about/about_buttom-right_tex.svg"
        className={`${styles.bg_img} ${styles.bg_br}`}
      />
      <img
        src="./about/about_top-left_tex.svg"
        className={`${styles.bg_img} ${styles.bg_tl}`}
      />
      <Description />
    </div>
  );
}

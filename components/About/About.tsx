import styles from "./About.module.scss";
import { Description } from "./Description";

export function About() {
  return (
    <div id="about" className={styles.page_container}>
      <div className={styles.background_shapes}></div>
      <Description />
    </div>
  );
}

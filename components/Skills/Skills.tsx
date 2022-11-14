import styles from "./Skills.module.scss";
import { SkillsBox } from "./SkillsBox";

export function Skills() {
  return (
    <div id="skills" className={styles.page_container}>
      <picture>
        <source
          srcSet="./skills/main_mobile.svg"
          media="(orientation: portrait)"
        />
        <img className={styles.img} src="./skills/main.svg" />
      </picture>
    </div>
  );
}

import styles from "./Skills.module.scss";
import { SkillsBox } from "./SkillsBox";

export function Skills() {
  return (
    <div id="skills" className={styles.page_container}>
      <div className={styles.main_img}></div>
      {/* <SkillsBox
        category="languages"
        tech={["JavaScript", "TypeScript", "Python"]}
      /> */}
    </div>
  );
}

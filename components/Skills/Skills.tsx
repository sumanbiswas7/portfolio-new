import styles from "./Skills.module.scss";

export function Skills() {
  return (
    <div id="skills" className={styles.page_container}>
      <picture>
        <source
          srcSet="./skills/skills_tree-mobile.svg"
          media="(orientation: portrait)"
        />
        <img className={styles.img} src="./skills/skills_tree.svg" />
      </picture>
    </div>
  );
}

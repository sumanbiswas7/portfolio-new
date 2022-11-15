import styles from "./About.module.scss";

export function About() {
  return (
    <div id="about" className={styles.page_container}>
      <div className={styles.background_shapes}></div>
      <h1>Sweet Background Magic</h1>
      <p>This whole element, background included, only weighs about 5kb</p>
    </div>
  );
}

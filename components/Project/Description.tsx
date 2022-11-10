import styles from "./Description.module.scss";

export function Description() {
  return (
    <div className={styles.container}>
      <img src="./projects/logo_vivid.png" alt="icon.svg" />
      <p className={styles.description}>
        vivid is a social media app for android and ios where people can share
        images, like, comment and many more...
      </p>
      <p>used technologies</p>
      <p>show project</p>
    </div>
  );
}

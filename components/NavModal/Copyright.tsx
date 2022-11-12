import styles from "./Copyright.module.scss";
import { AiFillEye } from "react-icons/ai";

export function Copyright({ views }: { views?: number }) {
  return (
    <div className={styles.container}>
      <small className={styles.copyright_text}>&copy; Suman Biswas, 2022</small>
      <div className={styles.views_box}>
        <AiFillEye size={15} />
        <span>{views || "- - -"}</span>
      </div>
    </div>
  );
}

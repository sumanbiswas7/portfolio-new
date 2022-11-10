import { useRef } from "react";
import useObserver from "../../hooks/useObserver";
import styles from "./MyImage.module.scss";

export function MyImage() {
  const circleRef = useRef<HTMLDivElement>(null);
  const [visible] = useObserver(circleRef);

  return (
    <div
      ref={circleRef}
      className={styles.circle}
      id={`${visible ? styles.animate_circle : styles.hide_circle}`}
    >
      <img
        className={styles.my_img}
        src="./home/my_img.webp"
        id={`${visible ? styles.animate_img : styles.hide_img}`}
      />
    </div>
  );
}

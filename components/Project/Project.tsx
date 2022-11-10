import { Footer } from "./Footer";
import styles from "./Project.module.scss";
import { useRef } from "react";
import useObserver from "../../hooks/useObserver";
import { Description } from "./Description";
const col = "#50251c";

interface Props {
  name: string;
  background: string;
  image: string;
}

export function Project() {
  const spanRef = useRef<HTMLSpanElement>(null);
  const [visible] = useObserver(spanRef);

  return (
    <div className={styles.main}>
      <span
        ref={spanRef}
        id={`${visible ? styles.animate : styles.hide}`}
        className={styles.project_name}
      >
        projects / vivid
      </span>
      <div
        style={{
          background: `linear-gradient(180deg, #262626 0%, ${col} 100%)`,
        }}
        className={styles.main_container}
      >
        <div className={styles.content_container}>
          <Description />
          <img src="./projects/img_vivid.png" alt="project-showcase.webp" />
        </div>
      </div>
      <Footer />
    </div>
  );
}

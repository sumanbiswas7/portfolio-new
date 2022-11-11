import styles from "./NavButton.module.scss";
import { useState } from "react";
import Link from "next/link";

export function NavButton() {
  const [modal, setModal] = useState(false);
  const handleModalClick = () => setModal((p) => !p);

  return (
    <>
      <div className={styles.nav_btn} onClick={handleModalClick}>
        <span
          id={modal ? `${styles.active_1}` : `${styles.normal_1}`}
          className={styles.top_line}
        ></span>
        <span
          id={modal ? `${styles.active_2}` : `${styles.normal_2}`}
          className={styles.mid_line}
        ></span>
        <span
          id={modal ? `${styles.active_3}` : `${styles.normal_3}`}
          className={styles.bottom_line}
        ></span>
      </div>
      {modal && (
        <div className={styles.modal}>
          <Link href={"#home"}>
            <p>Home</p>
          </Link>
          <Link href={"#projects"}>
            <p>Projects</p>
          </Link>
        </div>
      )}
    </>
  );
}

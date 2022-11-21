import styles from "./Terminal.module.scss";
import { useEffect, useRef, useState } from "react";

export default function Terminal() {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const focusInput = () => inputRef.current?.focus();

  return (
    <div className={styles.new_page} onClick={focusInput}>
      <div className={styles.terminal_container}>
        <div className={styles.terminal_box_head}>
          <span className={styles.head_circle}></span>
          <span className={styles.head_circle}></span>
          <span className={styles.head_circle}></span>
        </div>
        <div className={styles.terminal_box_content}>
          <input ref={inputRef} className={styles.term_input}></input>
        </div>
      </div>
    </div>
  );
}

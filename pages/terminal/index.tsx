import styles from "./Terminal.module.scss";
import { useEffect, useRef, useState } from "react";
import { HelpCmd } from "../../components/Terminal/Commands";
import { JsxElement } from "typescript";

export default function Terminal() {
  const [outPut, setOutput] = useState<any>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const focusInput = () => inputRef.current?.focus();
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key == "Enter") {
      if (inputRef.current?.value == "help") {
        setOutput((p: [JsxElement]) => [...p, <HelpCmd />]);
      }
    }
  };

  return (
    <div className={styles.new_page} onClick={focusInput}>
      <div className={styles.terminal_container}>
        <div className={styles.terminal_box_head}>
          <span className={styles.head_circle}></span>
          <span className={styles.head_circle}></span>
          <span className={styles.head_circle}></span>
        </div>
        <div className={styles.terminal_box_content}>
          <div>{outPut}</div>
          {outPut.map((e: JsxElement) => e)}
          <input
            onKeyDown={handleKeyDown}
            ref={inputRef}
            className={styles.term_input}
          />
        </div>
      </div>
    </div>
  );
}

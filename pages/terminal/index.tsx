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
      const command = inputRef.current?.value.toLowerCase();
      const prev = [...outPut];
      prev.push(<InputCmd cmd={command} />);
      inputRef.current!.value = "";
      if (command == "help") {
        prev.push(<HelpCmd />);
        setOutput(prev);
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
          {outPut.map((e: JsxElement) => e)}
          <InputCmd cmdRef={inputRef} handleEnter={handleKeyDown} />
        </div>
      </div>
    </div>
  );
}

interface Props {
  cmd?: string;
  handleEnter?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  cmdRef?: React.LegacyRef<HTMLInputElement>;
}

function InputCmd({ cmd, handleEnter, cmdRef }: Props) {
  //   const inputRef = useRef<HTMLInputElement>(null);

  return (
    <>
      <label className={styles.inp_prefix}>
        suman@terminal<span>$</span>
      </label>
      <input
        onKeyDown={handleEnter}
        ref={cmdRef}
        className={styles.term_input}
        value={cmd}
      />
    </>
  );
}

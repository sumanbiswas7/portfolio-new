import styles from "./Terminal.module.scss";
import { useEffect, useRef, useState } from "react";
import {
  HelpCmd,
  SkillsCmd,
  TypeHelp,
} from "../../components/Terminal/CmdComponents";
import { JsxElement } from "typescript";

interface TerminalProps {
  skillsPage?: boolean;
}
export function Terminal({ skillsPage }: TerminalProps) {
  const [outPut, setOutput] = useState<any>([]);
  const [firstLoad, setFirstLoad] = useState<boolean>(true);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (skillsPage) setOutput([<SkillsCmd />]);
    // inputRef.current?.focus();
  }, []);

  const focusInput = () => inputRef.current?.focus();
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key == "Enter") {
      setFirstLoad(false);
      const command = inputRef.current?.value.toLowerCase();
      const prev = [...outPut];
      prev.push(<InputCmd cmd={command} />);

      if (command == "skills") {
        prev.push(<SkillsCmd />);
        setOutput(prev);
      } else if (command == "help") {
        prev.push(<HelpCmd />);
        setOutput(prev);
      }
      inputRef.current!.value = "";
    }
  };

  return (
    <div id="skills" className={styles.new_page} onClick={focusInput}>
      <div className={styles.terminal_container}>
        <div className={styles.terminal_box_head}>
          <span className={styles.head_circle}></span>
          <span className={styles.head_circle}></span>
          <span className={styles.head_circle}></span>
        </div>
        <div className={styles.terminal_box_content}>
          {outPut.map((e: JsxElement) => e)}
          {firstLoad && <TypeHelp />}
          <InputCmd cmdRef={inputRef} handleEnter={handleKeyDown} />
        </div>
      </div>
    </div>
  );
}

interface InputCmdProps {
  cmd?: string;
  handleEnter?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  cmdRef?: React.LegacyRef<HTMLInputElement>;
}

function InputCmd({ cmd, handleEnter, cmdRef }: InputCmdProps) {
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

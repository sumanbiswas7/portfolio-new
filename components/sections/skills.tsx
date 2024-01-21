import styles from "./skills.module.scss";
import { useEffect, useRef, useState } from "react";
import { AboutCmd, ContactCmd, ErrorCmd, HelpCmd, SkillsCmd, TypeHelp } from "../../components/terminal/commands";
import { JsxElement } from "typescript";
import { useRouter } from "next/router";
import { socialLinks } from "../../data/social-links";
import { SectionTitle } from "../ui/section-title";

interface TerminalProps {
   skillsPage?: boolean;
}
export function SkillsSection({ skillsPage }: TerminalProps) {
   const [outPut, setOutput] = useState<any>([]);
   const [firstLoad, setFirstLoad] = useState<boolean>(true);
   const inputRef = useRef<HTMLInputElement>(null);
   const router = useRouter();

   useEffect(() => {
      if (skillsPage) setOutput([<SkillsCmd />]);
   }, []);

   const focusInput = () => inputRef.current?.focus();

   const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key == "Enter") {
         setFirstLoad(false);
         const command = inputRef.current?.value.toLowerCase().replace(" ", "");
         const prev = [...outPut];
         prev.push(<InputCmd cmd={command} fancyFocus />);

         // Command Lists
         if (command == "skills") {
            prev.push(<SkillsCmd />);
            setOutput(prev);
         } else if (command == "help") {
            prev.push(<HelpCmd />);
            setOutput(prev);
         } else if (command == "about") {
            prev.push(<AboutCmd />);
            setOutput(prev);
         } else if (command == "contact") {
            prev.push(<ContactCmd />);
            setOutput(prev);
         } else if (command == "clear" || command == "cls") {
            setOutput([<TypeHelp />]);
         } else if (command == "exit") {
            router.replace("/#home");
         } else if (command?.includes("to--")) {
            const link = command.substring(4);
            if (socialLinks[link as keyof typeof socialLinks]) {
               window.open(socialLinks[link as keyof typeof socialLinks], "_blank");
               prev.push(<p className={styles.link_social}>Opening - {link}</p>);
            } else {
               prev.push(<p className={styles.link_social}>{link} link not found</p>);
            }
            setOutput(prev);
         } else if (command?.includes("j--")) {
            const link = command.substring(3);
            router.replace(`/#${link}`);
         } else {
            prev.push(<ErrorCmd />);
            setOutput(prev);
         }
         inputRef.current!.value = "";
      }
   };

   return (
      <div id="skills" className={styles.new_page} onClick={focusInput}>
         <SectionTitle title="Skills" />

         <div className={styles.terminal_container}>
            <div className={styles.terminal_box_head}>
               <span className={styles.head_circle}></span>
               <span className={styles.head_circle}></span>
               <span className={styles.head_circle}></span>
               <div id={styles.img_reveal}></div>
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
   fancyFocus?: boolean;
}

function InputCmd({ cmd, handleEnter, cmdRef, fancyFocus }: InputCmdProps) {
   const [focus, setFocus] = useState(fancyFocus || false);
   function handleOnFocus(e: React.FocusEvent<HTMLInputElement>) {
      setFocus(true);
   }

   return (
      <>
         <label className={styles.inp_prefix}>
            suman@terminal
            <span id={!focus ? styles.dollar : styles.nodollar}>$</span>
         </label>
         <input
            onFocus={handleOnFocus}
            onKeyDown={handleEnter}
            ref={cmdRef}
            className={styles.term_input}
            value={cmd}
         />
      </>
   );
}

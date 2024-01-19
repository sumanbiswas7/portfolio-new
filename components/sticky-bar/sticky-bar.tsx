import { IconBrandGithub, IconBrandLinkedin, IconMail } from "@tabler/icons-react";
import classes from "./sticky-bar.module.scss";

export function StickyBar() {
   return (
      <div className={classes.footer_cont}>
         <div className={classes.container}>
            <a className={classes.icon_btn} target="_blank" href="https://github.com/sumanbiswas7">
               <IconBrandGithub size={18} />
            </a>
            <div className={classes.line} />

            <a className={classes.icon_btn} target="_blank" href="https://www.linkedin.com/in/sumanbiswas7">
               <IconBrandLinkedin size={18} />
            </a>
            <div className={classes.line} />

            <a className={classes.icon_btn} target="_blank" href="mailto:textsumanb@gmail.com">
               <IconMail size={18} />
            </a>
         </div>
      </div>
   );
}

import { IconBrandGithub, IconBrandLinkedin, IconMail } from "@tabler/icons-react";
import classes from "./sticky-bar.module.scss";
import { LINKS } from "../../data/social-links";

export function StickyBar() {
   return (
      <div className={classes.footer_cont}>
         <div className={classes.container}>
            <a className={classes.icon_btn} target="_blank" href={LINKS.GITUB}>
               <IconBrandGithub size={18} />
            </a>
            <div className={classes.line} />

            <a className={classes.icon_btn} target="_blank" href={LINKS.LINKED}>
               <IconBrandLinkedin size={18} />
            </a>
            <div className={classes.line} />

            <a className={classes.icon_btn} target="_blank" href={LINKS.MAILTO}>
               <IconMail size={18} />
            </a>
         </div>
      </div>
   );
}

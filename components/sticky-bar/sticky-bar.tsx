import { IconBrandGithub } from "@tabler/icons-react";
import classes from "./sticky-bar.module.scss";

export function StickyBar() {
   return (
      <div className={classes.footer_cont}>
         <div className={classes.container}>
            <IconBrandGithub color="#878787" size={18} />
            <div className={classes.line} />
            <IconBrandGithub color="#878787" size={18} />
            <div className={classes.line} />
            <IconBrandGithub color="#878787" size={18} />
         </div>
      </div>
   );
}

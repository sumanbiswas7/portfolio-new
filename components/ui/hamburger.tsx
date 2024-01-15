import { IconMenu2 } from "@tabler/icons-react";
import classes from "./hamburger.module.scss";

export function Hamburger() {
   return (
      <div className={classes.container}>
         <IconMenu2 />
      </div>
   );
}

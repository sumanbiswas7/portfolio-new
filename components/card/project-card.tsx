import Link from "next/link";
import classes from "./project-card.module.scss";
import { IconArrowNarrowRight } from "@tabler/icons-react";

export function ProjectCard() {
   return (
      <Link href={"/"} className={classes.link}>
         <div className={classes.border_container}>
            <div className={`${classes.gradient_border} ${classes.gradient_border_top}`} />
            <div className={`${classes.gradient_border} ${classes.gradient_border_bottom}`} />

            <div className={classes.container}>
               <div className={classes.flex_row}>
                  <h4>Poshkit</h4>
                  <IconArrowNarrowRight color="#fff" />
               </div>
               <p className={classes.desc}>
                  A collection of modern, fancy components with amazing hover effects for React applications.
               </p>
               <img src={"/work/cover-poshkit.png"} className={classes.cover_img} />
               <div className={classes.gradient_overlay} />
            </div>
         </div>
      </Link>
   );
}

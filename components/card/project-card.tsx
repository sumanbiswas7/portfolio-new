import Link from "next/link";
import classes from "./project-card.module.scss";
import { IconArrowNarrowRight } from "@tabler/icons-react";
import { Project } from "../../types/project";

export function ProjectCard({ project }: { project: Project }) {
   const gradient = {
      background: `linear-gradient(190deg, ${project.accent} 0%, rgba(0, 0, 0, 0.35) 50%, rgba(0, 0, 0, 0.5) 100%)`,
   };

   return (
      <Link href={"/"} className={classes.link}>
         <div className={classes.border_container}>
            <div className={`${classes.gradient_border} ${classes.gradient_border_top}`} />
            <div className={`${classes.gradient_border} ${classes.gradient_border_bottom}`} />

            <div className={classes.container} style={gradient}>
               <div className={classes.flex_row}>
                  <h4>{project.title}</h4>
                  <IconArrowNarrowRight color="#fff" />
               </div>
               <p className={classes.desc}>{project.description}</p>
               <img src={project.img} className={classes.cover_img} />
               <div className={classes.gradient_overlay} />
            </div>
         </div>
      </Link>
   );
}

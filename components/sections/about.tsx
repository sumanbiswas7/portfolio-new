import { SectionTitle } from "../ui/section-title";
import classes from "./about.module.scss";

export function AboutSection() {
   return (
      <div className={classes.container}>
         <SectionTitle title="About" />
         <img src="/about/bg-texture.svg" className={classes.texture} />
      </div>
   );
}

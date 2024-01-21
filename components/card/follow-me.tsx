import { LINKS } from "../../data/social-links";
import classes from "./follow-me.module.scss";

export function FollowMe() {
   return (
      <div className={classes.desc_box}>
         <p className={classes.desc}>
            If you want to see more pictures like behind, do not forget to follow me on{" "}
            <a href={LINKS.INSTA} target="_blank">
               instagram
            </a>{" "}
            :)
         </p>

         <div className={classes.flex_row}>
            <img src="/contact/me.png" className={classes.me} />
            <div className={classes.name_box}>
               <p>Suman Biswas</p>
               <p>FullStack Developer</p>
            </div>
         </div>
      </div>
   );
}

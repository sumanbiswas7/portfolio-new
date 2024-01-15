import Link from "next/link";
import classes from "./home.module.scss";
import { Hamburger } from "../ui/hamburger";

export function HomeSection() {
   return (
      <div className={classes.container}>
         <Link href={"/"}>
            <img src="/home/logo.svg" className={classes.logo} />
         </Link>
         <Hamburger />

         <div className={classes.left_box}></div>
         <div className={classes.right_box}></div>
      </div>
   );
}

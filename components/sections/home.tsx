import Link from "next/link";
import classes from "./home.module.scss";
import { Hamburger } from "../ui/hamburger";
import { Button } from "../ui/button";
import { IconCertificate, IconMessageShare } from "@tabler/icons-react";
import { LINKS } from "../../data/social-links";

export function HomeSection() {
   const toContactMe = () => window.open(LINKS.MAILTO, "_blank");
   const toResume = () => window.open(LINKS.RESUME, "_blank");

   return (
      <div className={classes.container}>
         <Link href={"/"}>
            <img src="/home/logo.svg" className={classes.logo} />
         </Link>

         <div className={classes.left_box}>
            <div className={classes.img_circle}>
               <img src="/home/suman.webp" className={classes.suman_img} />
            </div>
         </div>
         <div className={classes.right_box}>
            <div className={classes.right_center_cont}>
               <h1>
                  SUMAN <br />
                  BISWAS.
               </h1>
               <h1 className={classes.sm_head}>SUMAN BISWAS</h1>
               <p>FullStack Developer</p>
               <p>@Web-Wizards, @PlausibilitySolutions</p>

               <div className={classes.btn_cont}>
                  <Button onClick={toContactMe} vw icon={<IconMessageShare color="#222" size={18} />}>
                     Contact Me
                  </Button>
                  <Button onClick={toResume} vw icon={<IconCertificate color="#ededed" size={18} />} variant="outlined">
                     Resume
                  </Button>
               </div>
            </div>
         </div>
      </div>
   );
}

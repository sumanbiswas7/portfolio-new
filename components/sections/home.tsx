import Link from "next/link";
import classes from "./home.module.scss";
import { Hamburger } from "../ui/hamburger";
import { Button } from "../ui/button";
import { IconCertificate, IconMessageShare } from "@tabler/icons-react";
import { StickyBar } from "../sticky-bar/sticky-bar";

export function HomeSection() {
   return (
      <div className={classes.container}>
         <Link href={"/"}>
            <img src="/home/logo.svg" className={classes.logo} />
         </Link>
         <Hamburger />

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
                  <Button vw icon={<IconMessageShare color="#222" size={18} />}>
                     Contact Me
                  </Button>
                  <Button vw icon={<IconCertificate color="#ededed" size={18} />} variant="outlined">
                     Resume
                  </Button>
               </div>
            </div>
         </div>

         <StickyBar />
      </div>
   );
}

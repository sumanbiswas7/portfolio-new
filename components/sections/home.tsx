import Link from "next/link";
import classes from "./home.module.scss";
import { Button } from "../ui/button";
import { IconCertificate, IconMessageShare } from "@tabler/icons-react";
import { LINKS } from "../../data/social-links";
import { motion } from "framer-motion";

export function HomeSection() {
   const toContactMe = () => window.open(LINKS.MAILTO, "_blank");
   const toResume = () => window.open(LINKS.RESUME, "_blank");

   return (
      <div className={classes.container}>
         <Link href={"/"}>
            <img src="/home/logo.svg" className={classes.logo} />
         </Link>

         <div className={classes.left_box}>
            <motion.div
               className={classes.img_circle}
               transition={{ duration: 0.5 }}
               initial={{ y: 20 }}
               whileInView={{ y: 0 }}
            >
               <motion.img
                  // transition={{ duration: 0.5 }}
                  // initial={{ scale: 0.8 }}
                  // whileInView={{ scale: 1 }}
                  // whileHover={{ y: 20 }}
                  src="/home/suman.webp"
                  className={classes.suman_img}
               />
            </motion.div>
         </div>
         <div className={classes.right_box}>
            <motion.div
               transition={{ duration: 0.5 }}
               initial={{ opacity: 0, x: 30 }}
               whileInView={{ opacity: 1, x: 0 }}
               className={classes.right_center_cont}
            >
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
            </motion.div>
         </div>
      </div>
   );
}

import Link from "next/link";
import classes from "./navlink.module.scss";
import { IconBuilding, IconHome, IconPhoneCall, IconTool, IconUser } from "@tabler/icons-react";
import { motion } from "framer-motion";

interface Props {
   title: string;
   link: string;
   children: any;
}

export function Links() {
   return (
      <div>
         <NavLink title="Home" link="#">
            <IconHome className={classes.icon} size={18} />
         </NavLink>
         <NavLink title="About" link="#about">
            <IconUser className={classes.icon} size={18} />
         </NavLink>
         <NavLink title="Skills" link="#skills">
            <IconTool className={classes.icon} size={18} />
         </NavLink>
         <NavLink title="Work" link="#work">
            <IconBuilding className={classes.icon} size={18} />
         </NavLink>
         <NavLink title="Contact" link="#contact">
            <IconPhoneCall className={classes.icon} size={18} />
         </NavLink>
      </div>
   );
}

export function NavLink({ title, link, children }: Props) {
   return (
      <Link href={link} className={classes.a}>
         <motion.div whileHover={{ x: 10 }} className={classes.link_container}>
            <div className={classes.icon_container}>{children}</div>
            <p className={classes.link}>{title}</p>
         </motion.div>
      </Link>
   );
}

import { IconArrowBadgeRight } from "@tabler/icons-react";
import classes from "./section-title.module.scss";
import { motion } from "framer-motion";

export function SectionTitle({ title }: Props) {
   return (
      <motion.div className={classes.flex_row} whileInView={{ x: 10 }} initial={{ x: -35 }}>
         <div className={classes.icon_cont}>
            <IconArrowBadgeRight color="#fff" size={30} />
         </div>
         <p>{title}</p>
      </motion.div>
   );
}

interface Props {
   title: string;
}

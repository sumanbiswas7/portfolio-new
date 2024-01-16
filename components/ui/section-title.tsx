import { IconArrowBadgeRight } from "@tabler/icons-react";
import classes from "./section-title.module.scss";

export function SectionTitle({ title }: Props) {
   return (
      <div className={classes.flex_row}>
         <div className={classes.icon_cont}>
            <IconArrowBadgeRight color="#fff" size={30} />
         </div>
         <p>{title}</p>
      </div>
   );
}

interface Props {
   title: string;
}

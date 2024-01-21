import { IconEye } from "@tabler/icons-react";
import classes from "./copyright.module.scss";

interface Props {
   views?: number;
}

export function Copyright({ views }: Props) {
   return (
      <div className={classes.container}>
         <small className={classes.copyright_text}>&copy; Suman Biswas, 2022</small>
         <div className={classes.views_box}>
            <IconEye size={15} />
            <span>{views || "- - -"}</span>
         </div>
      </div>
   );
}

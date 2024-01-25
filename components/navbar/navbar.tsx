import classes from "./navbar.module.scss";
import { useContext, useState } from "react";
import { Links } from "./navlink";
import { Copyright } from "./copyright";
import { FirstLoadContext } from "../../providers/first-load";

export default function Navbar() {
   const [firstLoad] = useContext<any>(FirstLoadContext);
   const [modal, setModal] = useState(false);
   const handleModalClick = () => setModal((p) => !p);

   return (
      <>
         <div className={classes.nav_btn} onClick={handleModalClick}>
            <span id={modal ? `${classes.active_1}` : `${classes.normal_1}`} className={classes.top_line}></span>
            <span id={modal ? `${classes.active_2}` : `${classes.normal_2}`} className={classes.mid_line}></span>
            <span id={modal ? `${classes.active_3}` : `${classes.normal_3}`} className={classes.bottom_line}></span>
         </div>
         {modal && (
            <div className={classes.modal}>
               <p>Quick Links</p>
               <Links />
               <Copyright views={firstLoad?.views || 0} />
            </div>
         )}
      </>
   );
}

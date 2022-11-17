import styles from "./NavButton.module.scss";
import { useContext, useEffect, useState } from "react";
import { Links } from "../../components/NavModal/NavLink";
import { Copyright } from "../NavModal/Copyright";
import useViews from "../../hooks/useViews";
import { FirstLoadContext } from "../../pages/_app";
import initFirstLoad from "../../helpers/firstLoad";

export default function NavButton() {
  const [modal, setModal] = useState(false);
  const [firstLoad, setFirstLoad] = useContext<any>(FirstLoadContext);
  const init = initFirstLoad();
  // const [views] = useViews();
  const handleModalClick = () => setModal((p) => !p);

  return (
    <>
      <div className={styles.nav_btn} onClick={handleModalClick}>
        <span
          id={modal ? `${styles.active_1}` : `${styles.normal_1}`}
          className={styles.top_line}
        ></span>
        <span
          id={modal ? `${styles.active_2}` : `${styles.normal_2}`}
          className={styles.mid_line}
        ></span>
        <span
          id={modal ? `${styles.active_3}` : `${styles.normal_3}`}
          className={styles.bottom_line}
        ></span>
      </div>
      {modal && (
        <div className={styles.modal}>
          <p>Quick Links</p>
          <Links />
          <Copyright views={firstLoad.views} />
        </div>
      )}
    </>
  );
}

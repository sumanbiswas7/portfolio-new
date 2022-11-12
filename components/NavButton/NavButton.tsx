import styles from "./NavButton.module.scss";
import { useState } from "react";
import Link from "next/link";
import {
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
  AiOutlineSetting,
  AiOutlineMail,
} from "react-icons/ai";

export function NavButton() {
  const [modal, setModal] = useState(false);
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
          <div>
            <NavLink title="Home" link="#home">
              <AiOutlineHome className={styles.icon} size={18} />
            </NavLink>
            <NavLink title="About" link="#about">
              <AiOutlineUser className={styles.icon} size={18} />
            </NavLink>
            <NavLink title="Skills" link="#skills">
              <AiOutlineSetting className={styles.icon} size={18} />
            </NavLink>
            <NavLink title="Projects" link="#projects">
              <AiOutlineFundProjectionScreen
                className={styles.icon}
                size={18}
              />
            </NavLink>
            <NavLink title="Contact" link="#contact">
              <AiOutlineMail className={styles.icon} size={18} />
            </NavLink>
          </div>
        </div>
      )}
    </>
  );
}

interface Props {
  title: string;
  link: string;
  children: any;
}
function NavLink({ title, link, children }: Props) {
  return (
    <Link href={link}>
      <div className={styles.link_container}>
        <div className={styles.icon_container}>{children}</div>
        <p className={styles.link}>{title}</p>
      </div>
    </Link>
  );
}

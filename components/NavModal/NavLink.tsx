import Link from "next/link";
import styles from "./NavLink.module.scss";
import {
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
  AiOutlineSetting,
  AiOutlineMail,
} from "react-icons/ai";

interface Props {
  title: string;
  link: string;
  children: any;
}

export function Links() {
  return (
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
        <AiOutlineFundProjectionScreen className={styles.icon} size={18} />
      </NavLink>
      <NavLink title="Contact" link="#contact">
        <AiOutlineMail className={styles.icon} size={18} />
      </NavLink>
    </div>
  );
}

export function NavLink({ title, link, children }: Props) {
  return (
    <Link href={link}>
      <div className={styles.link_container}>
        <div className={styles.icon_container}>{children}</div>
        <p className={styles.link}>{title}</p>
      </div>
    </Link>
  );
}

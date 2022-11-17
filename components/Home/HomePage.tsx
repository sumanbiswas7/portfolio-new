import styles from "./HomePage.module.scss";
import NextLink from "next/link";
import Image from "next/image";
import { NavButton } from "../NavButton/NavButton";
import { MyDescription } from "./MyDescription";
import { MyImage } from "./MyImage";
import { DownArrow } from "../DownArrow/DownArrow";
import { SiLeetcode } from "react-icons/si";
import { RiGithubLine } from "react-icons/ri";
import { Link } from "./Link";
import useViews from "../../hooks/useViews";

export function HomePage() {
  const [views] = useViews();

  return (
    <main id="home" className={styles.main}>
      <nav className={styles.nav_container}>
        <NextLink href="/">
          <Image src={"/home/logo.svg"} width={45} height={45} alt="logo.svg" />
        </NextLink>
        <NavButton views={views} />
      </nav>
      <div className={styles.home_main}>
        <MyDescription />
        <MyImage />
      </div>
      <div className={styles.home_footer}>
        <DownArrow />
        <div className={styles.links_container}>
          <Link site="github" link="https://github.com/sumanbiswas7">
            <RiGithubLine fill="#fff" size={20} />
          </Link>
          <Link site="leetcode" link="https://leetcode.com/sumanbiswas7/">
            <SiLeetcode fill="#fff" />
          </Link>
        </div>
      </div>
    </main>
  );
}

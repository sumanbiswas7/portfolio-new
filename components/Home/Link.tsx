import styles from "./Link.module.scss";
import NextLink from "next/link";
import { useRef } from "react";
import useObserver from "../../hooks/useObserver";
// Homepage bottom right links
interface Props {
  children: React.ReactNode;
  site: string;
  link: string;
}

export function Link({ children, site, link }: Props) {
  const divRef = useRef<HTMLDivElement>(null);
  const [visible] = useObserver(divRef);

  return (
    <NextLink href={link} target="_blank">
      <div
        ref={divRef}
        className={styles.link_box}
        id={`${visible ? styles.animate : styles.hide}`}
      >
        <span id={styles.sitename}>{site}</span>
        {children}
      </div>
    </NextLink>
  );
}

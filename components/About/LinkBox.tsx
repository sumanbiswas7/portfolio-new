import styles from "./LinkBox.module.scss";
import {
  AiFillYoutube,
  AiFillFacebook,
  AiFillInstagram,
  AiFillLinkedin,
} from "react-icons/ai";
import NextLink from "next/link";
import React from "react";

export function LinkBox() {
  return (
    <div className={styles.container}>
      <Link link="https://www.linkedin.com/in/sumanbiswas7">
        <AiFillLinkedin className={styles.icon} size={18} />
      </Link>
      <Link link="https://www.instagram.com/sumanbiswas7/">
        <AiFillInstagram className={styles.icon} size={18} />
      </Link>
      <Link link="https://www.facebook.com/people/Suman-Biswas/100009266254381/">
        <AiFillFacebook className={styles.icon} size={18} />
      </Link>
      <Link link="https://www.youtube.com/channel/UCHEga9OnhbdpHrpe72gawQw">
        <AiFillYoutube className={styles.icon} size={18} />
      </Link>
    </div>
  );
}

interface Props {
  children: React.ReactNode;
  link: string;
}

function Link({ children, link }: Props) {
  return (
    <NextLink href={link} target="_blank">
      <div className={styles.icon_box}>{children}</div>
    </NextLink>
  );
}

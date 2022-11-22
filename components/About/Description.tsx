import styles from "./Description.module.scss";
import { HiMail } from "react-icons/hi";
import { LinkBox } from "./LinkBox";
import Link from "next/link";

export function Description() {
  return (
    <div className={styles.container}>
      <h2>
        Simple kid who wants to <br />
        create awesome stuff -
      </h2>
      <p>
        currently a student, learning and developing new skills. fuelled by a
        passion for making cool websites and applications. proficient in
        technologies like ReactJS, NextJS. some of my hobbies are playing
        football, photography, and traveling.
      </p>
      <div className={styles.btns_container}>
        <button className={styles.mail_btn}>
          <Link
            className={styles.btn_box}
            href="mailto:sumanbiswas842001@gmail.com"
            target="_blank"
          >
            <HiMail className={styles.icon} size={17} />
          </Link>
        </button>
        <button className={styles.resume_btn}>
          <Link
            className={styles.btn_box}
            href="https://sumanbiswas-website.s3.ap-south-1.amazonaws.com/Suman+Biswas.pdf"
            target="_blank"
          >
            RESUME
          </Link>
        </button>
      </div>
      <LinkBox />
    </div>
  );
}

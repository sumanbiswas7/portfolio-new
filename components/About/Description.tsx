import styles from "./Description.module.scss";
import { HiMail } from "react-icons/hi";
import { LinkBox } from "./LinkBox";

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
      <div>
        <button className={styles.mail_btn}>
          <HiMail className={styles.icon} size={17} />
        </button>
        <button className={styles.resume_btn}>RESUME</button>
      </div>
      <LinkBox />
    </div>
  );
}

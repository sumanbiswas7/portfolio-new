import Link from "next/link";
import styles from "./Description.module.scss";
import { FiMail, FiMapPin } from "react-icons/fi";
import {
  SlSocialFacebook,
  SlSocialLinkedin,
  SlSocialInstagram,
} from "react-icons/sl";
import { MY_EMAIL } from "../../utils/email_options";

export function Description() {
  return (
    <div className={styles.desc_container}>
      <h2>Quick Links</h2>

      <InfoLink text={MY_EMAIL} link={`mailto:${MY_EMAIL}`}>
        <FiMail className={styles.info_icon} />
      </InfoLink>
      <InfoLink text="Tehatta, West Bengal, India , 741160">
        <FiMapPin className={styles.info_icon} />
      </InfoLink>
      <div className={styles.links_box}>
        <QuickLink link="https://www.instagram.com/sumanbiswas7">
          <SlSocialInstagram className={styles.quicklink_icon} />
        </QuickLink>
        <QuickLink link="https://www.linkedin.com/in/sumanbiswas7">
          <SlSocialLinkedin className={styles.quicklink_icon} />
        </QuickLink>
        <QuickLink link="https://www.facebook.com/people/Suman-Biswas/100009266254381/">
          <SlSocialFacebook className={styles.quicklink_icon} />
        </QuickLink>
      </div>
    </div>
  );
}

interface InfoLinkProps {
  link?: string;
  children: React.ReactNode;
  text: string;
}

function InfoLink({ link, children, text }: InfoLinkProps) {
  return (
    <Link href={link || ""} target="_blank">
      <div className={styles.info_box}>
        {children}
        <p>{text}</p>
      </div>
    </Link>
  );
}

interface QuickLinkProps {
  link?: string;
  children: React.ReactNode;
}

function QuickLink({ children, link }: QuickLinkProps) {
  return (
    <Link href={link || ""} target="_blank">
      <div className={styles.link}>{children}</div>
    </Link>
  );
}

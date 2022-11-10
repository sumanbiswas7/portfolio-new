import styles from "./Description.module.scss";
import { UsedTechnologies } from "./UsedTechnologies";
import { GoLinkExternal } from "react-icons/go";
import { RiGithubLine } from "react-icons/ri";

import Link from "next/link";

export function Description() {
  return (
    <div className={styles.container}>
      <img src="./projects/logo_vivid.png" alt="icon.svg" />
      <p className={styles.description}>
        vivid is a social media app for android and ios where people can share
        images, like, comment and many more...
      </p>
      <p>used technologies</p>
      <UsedTechnologies
        technologies={["React Native", "Cloudinary", "Firebase"]}
      />
      <div className={styles.show_project_box}>
        <p className={styles.show_project}>show project</p>
        <Links />
      </div>
    </div>
  );
}

function Links() {
  return (
    <div className={styles.links}>
      <Link href="/">
        <button className={styles.link_btn}>
          <RiGithubLine className={styles.icon} size={17} />
        </button>
      </Link>
      <Link href="/">
        <button className={styles.link_btn}>
          <GoLinkExternal className={styles.icon} size={17} />
        </button>
      </Link>
    </div>
  );
}

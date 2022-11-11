import styles from "./Description.module.scss";
import { UsedTechnologies } from "./UsedTechnologies";
import { GoLinkExternal } from "react-icons/go";
import { RiGithubLine } from "react-icons/ri";
import Link from "next/link";

interface Props {
  description: string;
  techs: string[];
  link_project: string;
  link_github: string;
  logoUrl: string;
}

export function Description({
  description,
  techs,
  link_github,
  link_project,
  logoUrl,
}: Props) {
  return (
    <div className={styles.container}>
      <img src={logoUrl} alt="icon.svg" />
      <p className={styles.description}>{description}</p>
      <p>used technologies</p>
      <UsedTechnologies technologies={techs} />
      <div className={styles.show_project_box}>
        <p className={styles.show_project}>show project</p>
        <Links link_github={link_github} link_project={link_project} />
      </div>
    </div>
  );
}

interface LinkProps {
  link_project: string;
  link_github: string;
}
function Links({ link_project, link_github }: LinkProps) {
  return (
    <div className={styles.links}>
      <Link href={link_github} target="_blank">
        <button className={styles.link_btn}>
          <RiGithubLine className={styles.icon} size={17} />
        </button>
      </Link>
      <Link href={link_project} target="_blank">
        <button className={styles.link_btn}>
          <GoLinkExternal className={styles.icon} size={17} />
        </button>
      </Link>
    </div>
  );
}

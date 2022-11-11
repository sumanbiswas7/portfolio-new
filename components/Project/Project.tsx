import { Footer } from "./Footer";
import styles from "./Project.module.scss";
import { useRef } from "react";
import useObserver from "../../hooks/useObserver";
import { Description } from "./Description";

interface Props {
  name: string;
  background: string;
  imageUrl: string;
  logoUrl: string;
  id: number;
  description: string;
  techs: string[];
  link_project: string;
  link_github: string;
  imgWidth?: string;
  next?: string;
  project_id?: string;
}

export function Project({
  name,
  background,
  imageUrl,
  logoUrl,
  description,
  link_github,
  link_project,
  techs,
  id,
  imgWidth,
  next,
  project_id,
}: Props) {
  const spanRef = useRef<HTMLSpanElement>(null);
  const [visible] = useObserver(spanRef);

  return (
    <div id={project_id || "projects"} className={styles.main}>
      <span
        ref={spanRef}
        id={`${visible ? styles.animate : styles.hide}`}
        className={styles.project_name}
      >
        projects / {name}
      </span>
      <div
        style={{
          background: `linear-gradient(180deg, #262626 0%, ${background} 100%)`,
        }}
        className={styles.main_container}
      >
        <div className={styles.content_container}>
          <Description
            logoUrl={logoUrl}
            link_github={link_github}
            link_project={link_project}
            techs={techs}
            description={description}
          />
          <img
            style={{ width: imgWidth || "25vmax" }}
            src={imageUrl}
            alt="project-showcase.webp"
          />
        </div>
      </div>
      <Footer next={next} id={id} />
    </div>
  );
}

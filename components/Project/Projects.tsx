import { Project } from "./Project";
import { ProjectCard } from "./ProjectCard";
import styles from "./Projects.module.scss";
import projects from "../../data/projects.json";
import { useRef } from "react";
import useObserver from "../../hooks/useObserver";

export function Projects() {
  const spanRef = useRef<HTMLSpanElement>(null);
  const [visible] = useObserver(spanRef);

  return (
    <div className={styles.page_container} id="projects">
      {/* Projects Animation */}
      <span
        ref={spanRef}
        id={`${visible ? styles.animate : styles.hide}`}
        className={styles.my_projects}
      >
        Projects
      </span>

      <div className={styles.scroll_container}>
        {/* <h1>My Projects</h1>
        <p>
          Every project is crafted with passion, dedication, and a keen eye for
          detail. From development to design, I put my heart and soul into each
          endeavor to deliver outstanding results.
        </p> */}
        <div className={styles.grid_container}>
          {projects.map((p) => (
            <ProjectCard
              id={p.id}
              description={p.description}
              img={p.img}
              title={p.title}
              color={p.accent}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

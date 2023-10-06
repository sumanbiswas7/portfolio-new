import { Project } from "./Project";
import { ProjectCard } from "./ProjectCard";
import styles from "./Projects.module.scss";
import projects from "../../data/projects.json";

export function Projects() {
  return (
    <div className={styles.page_container} id="projects">
      <div className={styles.scroll_container}>
        <h1>My Projects</h1>
        <div className={styles.grid_container}>
          {projects.map((p) => (
            <ProjectCard
              description={p.description}
              img={p.img}
              title={p.img}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

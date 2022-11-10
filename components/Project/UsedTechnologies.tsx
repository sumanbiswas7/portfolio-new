import styles from "./UsedTechnologies.module.scss";

interface Props {
  technologies: string[];
}
export function UsedTechnologies(technologies: Props) {
  return (
    <div className={styles.container}>
      {technologies.technologies.map((tech) => {
        return <div className={styles.tech}>{tech}</div>;
      })}
    </div>
  );
}
